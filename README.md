# IATI Project Location Standard

Documentation and data model for collecting georeferenced project locations in international aid and development cooperation, maintained by the [MAPME Community of Practice](https://www.mapme-initiative.org/).

📖 **[Read the docs →](https://mapme-initiative.github.io/IATI-Project-Location-Standard/)**

---

## What this repository contains

```
IATI-Project-Location-Standard/
├── docs/          # Documentation source (Markdown)
├── model/         # JSON schema files (the data model)
├── mkdocs.yml     # Site configuration
└── pyproject.toml
```

- **`docs/`** — Source files for the documentation website. Edit these to update the published site.
- **`model/`** — The actual data model as JSON schemas (`project_core_schema_en.json`, `feature_project_schema.json`). These define the structure for validating submitted location data.

---

## Contributing

### Editing documentation

All documentation lives in `docs/` as plain Markdown files. To propose a change:

1. Fork the repository
2. Edit or add files in `docs/`
3. Open a pull request

To report an issue or suggest an improvement without editing directly, [open an issue](https://github.com/mapme-initiative/IATI-Project-Location-Standard/issues).

### Editing the data model

The JSON schemas in `model/` define the data structure. Changes there should be discussed via an issue first, as they affect downstream validators and template files.

---

## Local development

**Prerequisites:** [uv](https://docs.astral.sh/uv/getting-started/installation/)

```bash
# 1. Clone the repo
git clone https://github.com/mapme-initiative/IATI-Project-Location-Standard.git
cd IATI-Project-Location-Standard

# 2. Install dependencies
uv sync

# 3. Start the live-reload dev server
uv run mkdocs serve
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) — the site reloads automatically when you save a file.

To do a one-off build:

```bash
uv run mkdocs build     # output goes to site/
```

---

## Deployment

The site is automatically built and deployed to GitHub Pages on every push to `main` via the workflow in `.github/workflows/deploy.yml`. No manual steps required.

The workflow uses [mkdocs-material](https://squidfunk.github.io/mkdocs-material/) and requires no secrets or tokens beyond the default `GITHUB_TOKEN`.

---

## License

[GPL-3.0](LICENSE) — MAPME Community of Practice