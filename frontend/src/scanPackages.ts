import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const listFile = process.argv[2] || 'vulnerable-packages.txt';

if (!fs.existsSync(listFile)) {
  console.error(`Liste ${listFile} nicht gefunden. Jede Zeile: <name>@<version>`);
  process.exit(1);
}

const targets = new Set(
  fs.readFileSync(listFile, 'utf-8')
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l && !l.startsWith('#'))
);

let treeJSON: any;
try {
  const out = execSync('npm ls --all --json', { stdio: ['ignore', 'pipe', 'ignore'] }).toString();
  treeJSON = JSON.parse(out);
} catch {
  const lockPath = path.join(process.cwd(), 'package-lock.json');
  if (!fs.existsSync(lockPath)) {
    console.error('Konnte npm ls nicht ausführen und package-lock.json fehlt.');
    process.exit(2);
  }
  treeJSON = JSON.parse(fs.readFileSync(lockPath, 'utf-8'));
}

interface Hit { name: string; version: string; path: string[]; }
const hits: Hit[] = [];
const seen = new Set<string>();

function record(name: string, version: string, chain: string[]) {
  const key = `${name}@${version}`;
  if (targets.has(key) && !seen.has(`${key}|${chain.join('>')}`)) {
    hits.push({ name, version, path: chain });
    seen.add(`${key}|${chain.join('>')}`);
  }
}

function walk(node: any, chain: string[]) {
  if (!node || typeof node !== 'object') return;

  // Name ermitteln: bevorzugt node.name, sonst letztes Segment des Pfades (nicht 'root')
  const inferredName = node.name || (chain.length > 1 ? chain[chain.length - 1] : undefined);

  if (node.version && inferredName) {
    record(inferredName, node.version, chain);
  }

  // npm ls Struktur
  if (node.dependencies) {
    for (const [depName, depNode] of Object.entries<any>(node.dependencies)) {
      walk(depNode, [...chain, depName]);
    }
  }

  // lockfile v2 Struktur (npm >=7) – packages Objekt
  if (node.packages) {
    for (const [pkgPath, pkgNode] of Object.entries<any>(node.packages)) {
      if (pkgNode && typeof pkgNode === 'object' && pkgNode.version) {
        const pkgName = (pkgNode as any).name ||
          (pkgPath.startsWith('node_modules/') ? pkgPath.replace(/^node_modules\//, '') : pkgPath);
        if (pkgName && !pkgName.includes('node_modules/')) {
          record(pkgName, pkgNode.version, [...chain, pkgName]);
        }
      }
    }
  }
}

walk(treeJSON, ['root']);

if (hits.length === 0) {
  console.log('Keine der angegebenen Paket+Versions-Kombinationen gefunden.');
  process.exit(0);
}

console.log('Gefundene Treffer:');
for (const h of hits) {
  console.log(`- ${h.name}@${h.version}   via ${h.path.join(' > ')}`);
}

process.exit(1);