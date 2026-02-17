# AGENTS.MD - Developer Guide for AI Agents

This document provides comprehensive guidance for AI agents and developers working on the Project Location Model repository. It covers project structure, development workflows, coding standards, and best practices.

---

## Table of Contents

1. [Project Structure & Modules](#project-structure--modules)
2. [Build, Test, and Development](#build-test-and-development)
3. [Coding Style & Naming](#coding-style--naming)
4. [Testing Guidelines](#testing-guidelines)
5. [Notes & Tips](#notes--tips)

---

## Project Structure & Modules

### Repository Overview

The **Project Location Model** repository contains the data collection standard and validation tools for georeferenced project locations used by KfW Development Bank. The repository is split into two main components:

```
project_location_model/
├── .github/workflows/          # CI/CD pipelines
│   ├── builddeploy.yaml       # Build and deploy docs + validator
│   ├── runtests.yml           # Run frontend tests
│   └── npm-audit.yml          # Security audits
├── model/                      # JSON schemas and documentation
│   ├── schema/                # JSON schema definitions
│   ├── excels/                # Example Excel templates
│   └── model-docs/            # mdBook documentation source
│       ├── src/               # Markdown documentation
│       └── book/              # Generated documentation (gitignored)
├── frontend/                   # React/TypeScript validator app
│   ├── src/                   # Source code
│   │   ├── components/        # React components
│   │   ├── services/          # Business logic & utilities
│   │   │   ├── httpclient/   # HTTP client for schemas
│   │   │   └── util/         # Validators, converters, utils
│   │   └── tests/            # Jest test files
│   ├── public/               # Static assets
│   │   └── flatschema/       # Flattened schemas (generated)
│   └── deployment-scripts/   # Build scripts
├── poetry.lock               # Python dependencies lock
├── pyproject.toml            # Python project configuration
├── generate_schema_docs.py   # Schema doc generator script
├── build-docs.sh             # Local documentation build script
└── README.md                 # User-facing documentation
```

### Key Modules

#### 1. **Model Schemas** (`model/schema/`)

JSON Schema definitions for project location data:
- `project_core_schema_en.json` / `project_core_schema_fr.json` - Core project schemas (multilingual)
- `feature_project_schema.json` - Feature-based project schema

#### 2. **Frontend Validator** (`frontend/`)

**Technology Stack:**
- **Framework**: React 18.3+ with TypeScript
- **Build Tool**: Vite 5.3+
- **Validation**: AJV (Another JSON Schema Validator)
- **UI**: Material-UI (MUI) 6+
- **Mapping**: Leaflet with React-Leaflet
- **Testing**: Jest 30+ with Testing Library
- **File Processing**: XLSX, PapaParse (CSV), File-Saver

**Key Components:**
- `FileValidator.tsx` - Main validation interface
- `Validator.ts` - Core validation logic using AJV
- `Utils.ts` - Conversion and formatting utilities

#### 3. **Documentation System**

- **Format**: mdBook (Rust-based markdown documentation)
- **Schema Docs Generator**: Python script using `json-schema-for-humans`
- **Output**: Static HTML documentation with embedded validator

---

## Build, Test, and Development

### Prerequisites

**For Python/Documentation:**
- Python 3.10+
- Poetry (Python package manager)
- mdBook (documentation builder)

**For Frontend/Validator:**
- Node.js 18+ (recommend 22)
- npm 9+ or yarn

### Installation

#### 1. Clone Repository

```bash
git clone https://github.com/mapme-initiative/project_location_model
cd project_location_model
```

#### 2. Python Environment Setup

```bash
# Install Poetry (if not already installed)
curl -sSL https://install.python-poetry.org | python3 -

# Install Python dependencies
poetry install --no-root
```

#### 3. Install mdBook

```bash
# Ubuntu/Debian
sudo snap install mdbook

# macOS
brew install mdbook

# Or download from: https://github.com/rust-lang/mdBook/releases
```

#### 4. Frontend Setup

```bash
cd frontend
npm install
```

### Development Workflows

#### **Frontend Development (Validator App)**

```bash
cd frontend

# Start development server with HMR
npm run dev
# App runs at http://localhost:5173

# Run linter
npm run lint

# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Build for production
npm run build

# Preview production build
npm run preview
```

#### **Documentation Development**

```bash
# Generate schema documentation from JSON schemas
poetry run python generate_schema_docs.py

# Build documentation locally
./build-docs.sh

# Serve documentation with live reload
cd model/model-docs
mdbook serve --open
# Docs served at http://localhost:3000
```

#### **Full Build (Documentation + Validator)**

The complete build pipeline (mirrors CI/CD):

```bash
# 1. Generate schema docs
poetry run python generate_schema_docs.py

# 2. Build mdBook documentation
cd model/model-docs
mdbook build
cd ../..

# 3. Build frontend validator (schemas are copied automatically)
cd frontend
npm run build
cd ..

# 4. Integrate validator into documentation
mkdir -p model/model-docs/book/project-location-validator
cp -R frontend/dist/* model/model-docs/book/project-location-validator/
```

### CI/CD Pipeline

**GitHub Actions Workflows:**

1. **`builddeploy.yaml`** (on push to `main`):
   - Generate schema documentation
   - Build mdBook docs
   - Build frontend validator
   - Integrate validator into docs
   - Deploy to GitHub Pages

2. **`runtests.yml`** (on PR to `main`):
   - Run Jest tests
   - Generate coverage report
   - Comment coverage on PR

3. **`npm-audit.yml`**:
   - Security audit of npm dependencies

---

## Coding Style & Naming

### General Principles

- **Clarity over cleverness**: Write code that is easy to understand
- **Functional programming**: Prefer pure functions and immutability
- **Type safety**: Leverage TypeScript's type system fully
- **Single responsibility**: Each function/component should do one thing well

### TypeScript/React

#### **File Naming**

- **Components**: PascalCase with `.tsx` extension
  - `FileValidator.tsx`
  - `ValidationResults.tsx`
  
- **Utilities/Services**: camelCase with `.ts` extension
  - `validator.ts`
  - `utils.ts`

- **Tests**: Same name as source with `.test.ts(x)` suffix
  - `Validator.test.ts`
  - `Utils.test.ts`

#### **Code Style**

```typescript
// Good: Descriptive names, type annotations
interface ValidationResult {
    isValid: boolean;
    errors: ValidationError[];
    warnings: string[];
}

function validateProjectLocation(
    location: ProjectLocation,
    schema: JSONSchema
): ValidationResult {
    // Implementation
}

// Good: Functional approach, clear logic
const validLocations = locations
    .filter(loc => loc.geometry !== null)
    .map(transformLocation)
    .filter(isValidLocation);

// Avoid: Unclear names, missing types
function check(data: any): any {
    // ...
}
```

#### **React Components**

```typescript
// Good: Functional component with proper typing
interface FileValidatorProps {
    language: 'en' | 'fr';
    onValidationComplete: (results: ValidationResult[]) => void;
}

export const FileValidator: React.FC<FileValidatorProps> = ({
    language,
    onValidationComplete
}) => {
    const [isValidating, setIsValidating] = useState<boolean>(false);
    
    // Component logic
    
    return (
        <div className="file-validator">
            {/* JSX */}
        </div>
    );
};
```

#### **Naming Conventions**

| Element | Convention | Example |
|---------|-----------|---------|
| React Component | PascalCase | `FileValidator`, `ValidationTable` |
| Function | camelCase | `validateSchema`, `parseExcelFile` |
| Variable | camelCase | `isValid`, `errorCount`, `projectData` |
| Constant | UPPER_SNAKE_CASE | `MAX_FILE_SIZE`, `DEFAULT_LANGUAGE` |
| Type/Interface | PascalCase | `ValidationResult`, `ProjectLocation` |
| Enum | PascalCase (values UPPER_SNAKE_CASE) | `ValidationStatus.INVALID` |

### Python

#### **Style Guide**

Follow PEP 8 with these specifics:

```python
# Good: Clear function names, type hints
from pathlib import Path
from typing import List, Dict

def generate_schema_docs(
    schema_dir: Path,
    output_dir: Path
) -> List[Path]:
    """Generate markdown documentation from JSON schemas.
    
    Args:
        schema_dir: Directory containing JSON schema files
        output_dir: Directory for generated markdown files
        
    Returns:
        List of generated file paths
    """
    # Implementation
    pass

# Good: Descriptive variable names
schema_files = list(schema_dir.glob("*.json"))
output_files: List[Path] = []

for schema_file in schema_files:
    output_file = output_dir / f"{schema_file.stem}.md"
    # Process...
```

### JSON Schema

#### **Naming Conventions**

- **File names**: `snake_case_with_language.json`
  - `project_core_schema_en.json`
  - `sector_schema_fr.json`
  
- **Property names**: `snake_case`
  ```json
  {
    "project_name": "string",
    "location_type": "string",
    "geographic_coordinates": {...}
  }
  ```

- **Schema titles**: Human-readable with proper capitalization
  ```json
  {
    "title": "Project Location Schema (English)",
    "$id": "https://mapme-initiative.github.io/project_location_model/project_core_schema_en.json"
  }
  ```

---

## Testing Guidelines

### Frontend Testing (Jest + Testing Library)

#### **Test File Structure**

```typescript
import { describe, expect, it } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import { MyComponent } from "../MyComponent";

describe("MyComponent", () => {
    describe("initialization", () => {
        it("should render with default props", () => {
            // Test implementation
        });
    });
    
    describe("user interactions", () => {
        it("should handle file upload", async () => {
            // Test implementation
        });
    });
});
```

#### **Testing Best Practices**

1. **Use descriptive test names**
   ```typescript
   // Good
   it("should display validation errors when file format is invalid", () => {});
   
   // Avoid
   it("test validation", () => {});
   ```

2. **Test user behavior, not implementation**
   ```typescript
   // Good: Test what user sees
   expect(screen.getByText("File is valid")).toBeInTheDocument();
   
   // Avoid: Test internal state
   expect(component.state.isValid).toBe(true);
   ```

3. **Mock external dependencies when needed**
   ```typescript
   // Example: Mock external services
   jest.mock("../../services/externalService", () => ({
       ExternalService: MockExternalService
   }));
   ```

4. **Test edge cases**
   - Empty files
   - Invalid formats
   - Large datasets
   - Network failures
   - Invalid coordinates

#### **Coverage Requirements**

#### **Running Tests**

```bash
cd frontend

# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- Validator.test.ts

# Update snapshots
npm test -- -u
```

### Manual Testing Checklist

Before submitting a PR:

- [ ] Test with example Excel files from `model/excels/`
- [ ] Test with invalid data (missing fields, wrong types)
- [ ] Test file upload/download functionality
- [ ] Test in both English and French (if applicable)
- [ ] Verify error messages are clear and helpful
- [ ] Test on different browsers (Chrome, Firefox, Safari)

---

## Notes & Tips

### Development Best Practices

#### **2. Adding New Validation Rules**

1. Update JSON schema with new constraints
2. Add test cases for new rules
3. Update documentation with examples
4. Provide clear error messages in schema descriptions

#### **3. Performance Optimization**

- **Large file handling**: Process files in chunks for files > 1MB
- **Memoization**: Cache validation results for repeated operations
- **Lazy loading**: Load schemas on-demand
- **Web Workers**: Consider for heavy computations (if needed)

#### **4. Multilingual Support**

When adding new text:

```typescript
// Good: Prepare for i18n
const messages = {
    en: {
        validation_error: "Validation failed",
        invalid_coordinates: "Invalid coordinates"
    },
    fr: {
        validation_error: "Échec de la validation",
        invalid_coordinates: "Coordonnées invalides"
    }
};

// Use in component
const errorMsg = messages[language].validation_error;
```

### Common Issues & Solutions

#### **Issue: Schema validation fails locally but passes in CI**

**Solution**: Ensure schema files are committed and accessible
```bash
git add model/schema/*.json
git commit -m "chore: update schemas"
```

#### **Issue: Frontend build fails with "Cannot find module"**

**Solution**: Clear node_modules and reinstall
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

#### **Issue: mdBook build fails**

**Solution**: Verify mdBook installation and version
```bash
mdbook --version
# Should be 0.4.0 or higher
```

#### **Issue: Tests fail with "Schema not found"**

**Solution**: Ensure schema files are in the correct location (`frontend/public/schemas/`) and accessible during tests

### Useful Commands Reference

```bash
# Python/Documentation
poetry install                          # Install Python dependencies
poetry run python generate_schema_docs.py  # Generate schema docs
./build-docs.sh                        # Full documentation build
cd model/model-docs && mdbook serve    # Serve docs locally

# Frontend
cd frontend
npm install                            # Install dependencies
npm run dev                            # Start dev server
npm test                              # Run tests
npm run lint                          # Run linter
npm run build                         # Production build (copies schemas automatically)
npm run preview                       # Preview production build
```

### Debugging Tips

1. **Frontend debugging**:
   - Use browser DevTools
   - Enable React DevTools extension
   - Check Network tab for schema loading issues
   - Use `console.log` strategically (remove before commit)

2. **Schema validation debugging**:
   - Use online JSON Schema validators
   - Test schemas with sample data
   - Check AJV error messages carefully

3. **Build issues**:
   - Check Node.js/npm versions
   - Clear build caches
   - Review CI logs for specific error messages

### Resources

- **JSON Schema**: https://json-schema.org/
- **AJV Documentation**: https://ajv.js.org/
- **React Testing Library**: https://testing-library.com/react
- **mdBook Guide**: https://rust-lang.github.io/mdBook/
- **Conventional Commits**: https://www.conventionalcommits.org/

### Getting Help

1. **Check existing issues**: Search GitHub issues for similar problems
2. **Create detailed issue**: Include error messages, steps to reproduce, environment info
3. **Ask questions**: Use GitHub Discussions for questions
4. **Contribute**: Submit PRs for improvements or bug fixes

---

## Summary

This guide provides AI agents and developers with comprehensive information to:

- Understand the project structure and architecture
- Set up development environments correctly
- Follow coding standards and best practices
- Write effective tests with good coverage
- Debug common issues efficiently

For user-facing documentation, refer to [README.md](README.md) and the [live documentation](https://mapme-initiative.github.io/project_location_model/).
