import {dereference} from '@apidevtools/json-schema-ref-parser';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Project root is two levels up from this script (frontend/deployment-scripts)
const projectRoot = path.join(__dirname, '..', '..');
const schemaDir = path.join(projectRoot, 'model', 'schema');
const outDir = path.join(projectRoot, 'frontend', 'public', 'flatschema');

async function flatten(input, output) {
  try {
    const schema = await dereference(input);
    fs.writeFileSync(output, JSON.stringify(schema, null, 2));
    console.log(`Schema für ${path.basename(input)} gespeichert unter ${output}`);
  } catch (err) {
    console.error(`Fehler beim Verarbeiten von ${input}:`, err.message);
    process.exit(1);
  }
}

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const langSuffixes = ['en', 'fr'];
const geometryTypes = ['Point', 'LineString', 'Polygon'];
const geometryFileNames = ['point', 'line', 'polygon'];

// 1. Process project_core_schema files with geometry variants
const coreSchemaFiles = fs.readdirSync(schemaDir).filter(f =>
  f.startsWith('project_core_schema_') && (f.endsWith('_en.json') || f.endsWith('_fr.json'))
);

for (const file of coreSchemaFiles) {
  const inputPath = path.join(schemaDir, file);

  // Generate geometry-specific files
  for (let i = 0; i < geometryTypes.length; i++) {
    const geomType = geometryTypes[i];
    const geomFileName = geometryFileNames[i];

    // Read and parse the schema
    const schema = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

    // Add geom property with const
    if (!schema.properties) {
      schema.properties = {};
    }
    schema.properties.geom = {
      const: geomType
    };

    // Add geom to required array
    if (!schema.required) {
      schema.required = [];
    }
    if (!schema.required.includes('geom')) {
      schema.required.push('geom');
    }

    // Write temporary file with geom attribute
    const tempFile = path.join(schemaDir, `temp_${file.replace('.json', `_${geomFileName}.json`)}`);
    fs.writeFileSync(tempFile, JSON.stringify(schema, null, 2));

    // Flatten and save
    const geomFile = file.replace('.json', `_${geomFileName}.json`);
    const geomOutput = path.join(outDir, geomFile);
    await flatten(tempFile, geomOutput);

    // Clean up temp file
    fs.unlinkSync(tempFile);
  }
}

// 2. Process feature_project_schema.json for each language
const featureSchemaPath = path.join(schemaDir, 'feature_project_schema.json');
if (fs.existsSync(featureSchemaPath)) {
  const featureSchema = JSON.parse(fs.readFileSync(featureSchemaPath, 'utf-8'));

  for (const lang of langSuffixes) {
    // Create a copy of the schema
    const langSchema = JSON.parse(JSON.stringify(featureSchema));

    // Replace the reference to project_core_schema.json with language-specific version
    if (langSchema.properties && langSchema.properties.properties && langSchema.properties.properties.$ref) {
      langSchema.properties.properties.$ref = `project_core_schema_${lang}.json`;
    }

    // Write temporary file with language-specific reference
    const tempFile = path.join(schemaDir, `temp_feature_project_schema_${lang}.json`);
    fs.writeFileSync(tempFile, JSON.stringify(langSchema, null, 2));

    // Flatten and save
    const output = path.join(outDir, `feature_project_schema_${lang}.json`);
    await flatten(tempFile, output);

    // Clean up temp file
    fs.unlinkSync(tempFile);
  }
}
