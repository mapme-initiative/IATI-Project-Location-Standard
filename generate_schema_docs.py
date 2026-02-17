#!/usr/bin/env python3
"""
Generate markdown documentation from JSON schemas using json-schema-for-humans
"""

import os
import json
from pathlib import Path
from json_schema_for_humans.generate import generate_from_filename
from json_schema_for_humans.generation_configuration import GenerationConfiguration


def generate_schema_docs():
    """Generate markdown documentation for all JSON schemas"""
    
    # Paths
    schema_dir = Path("model/schema")
    output_dir = Path("model/model-docs/src/schemas")
    
    # Create output directory
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Configuration for markdown generation
    config = GenerationConfiguration(
        template_name="md",
        show_breadcrumbs=True,
        expand_buttons=True,
        copy_css=False,
        copy_js=False
    )
    
    # Get all JSON schema files
    schema_files = list(schema_dir.glob("*.json"))
    
    print(f"Found {len(schema_files)} schema files to process...")
    
    for schema_file in schema_files:
        print(f"Processing {schema_file.name}...")
        
        # Generate output filename
        output_file = output_dir / f"{schema_file.stem}.md"
        
        try:
            # Load schema to get title
            with open(schema_file, 'r', encoding='utf-8') as f:
                schema_data = json.load(f)
            
            schema_title = schema_data.get('title', schema_file.stem.replace('_', ' ').title())
            
            # Generate documentation
            generate_from_filename(
                str(schema_file),
                str(output_file),
                config=config
            )
            
            # Add a custom header to the generated markdown
            with open(output_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Prepend title and description
            header = f"""# {schema_title}

This document describes the JSON schema for `{schema_file.name}`.

---

"""
            
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(header + content)
                
            print(f"  ✓ Generated {output_file}")
            
        except Exception as e:
            print(f"  ✗ Error processing {schema_file.name}: {e}")
            # Create a simple fallback documentation
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(f"""# {schema_file.stem.replace('_', ' ').title()}

## Schema File: {schema_file.name}

This schema documentation could not be automatically generated. 
Please refer to the original JSON schema file in the `model/schema/` directory.

```json
// Schema location: {schema_file}
```
""")
    
    print(f"Schema documentation generation complete!")


if __name__ == "__main__":
    generate_schema_docs()