# Project Location Model Documentation

This directory contains the source files and configuration for generating the Project Location Model documentation as a GitHub Pages site.

## Structure

- `src/` - Markdown source files for the documentation
- `src/schemas/` - Generated schema documentation (automatically created)
- `book.toml` - mdbook configuration
- `book/` - Generated HTML documentation (automatically created)

## Local Development

### Prerequisites

- Python 3.8+ with Poetry
- mdbook (installed via snap, cargo, or GitHub releases)

### Setup

1. Install Python dependencies:
   ```bash
   poetry install
   ```

2. Generate schema documentation:
   ```bash
   poetry run python generate_schema_docs.py
   ```

3. Build the documentation:
   ```bash
   mdbook build
   ```

4. Serve locally (optional):
   ```bash
   mdbook serve --open
   ```

### Automatic Generation

The schema documentation in `src/schemas/` is automatically generated from the JSON schema files in `../schema/` using the `json-schema-for-humans` package.

## Deployment

The documentation is automatically built and deployed to GitHub Pages via the GitHub Actions workflow defined in `.github/workflows/builddeploy.yaml`. The workflow:

1. Generates schema documentation from JSON schemas
2. Builds the mdbook documentation
3. Builds the React Project Location validator
4. Combines everything into a single GitHub Pages deployment

The deployed site includes:
- Main documentation at the root
- Project Location validator at `/project-location-validator/`

## Adding New Content

1. Create new `.md` files in the `src/` directory
2. Add them to `src/SUMMARY.md` to include in the navigation
3. Commit and push to trigger automatic deployment

## Schema Documentation

Schema documentation is automatically generated from JSON schema files. If you add new schemas to `../schema/`, they will be automatically included in the next build.