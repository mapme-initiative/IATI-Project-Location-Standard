#!/bin/bash
# Local development script for Project Location Model documentation

set -e

echo "🏗️  Building Project Location Model Documentation"
echo ""

# Check if poetry is installed
if ! command -v poetry &> /dev/null; then
    echo "❌ Poetry not found. Please install Poetry first."
    exit 1
fi

# Check if mdbook is installed
if ! command -v mdbook &> /dev/null; then
    echo "❌ mdbook not found. Please install mdbook first."
    echo "   You can install it with: sudo snap install mdbook"
    exit 1
fi

echo "📦 Installing Python dependencies..."
poetry install --no-root

echo ""
echo "📝 Generating schema documentation..."
poetry run python generate_schema_docs.py

echo ""
echo "📖 Building mdbook documentation..."
cd model/model-docs
mdbook build

echo ""
echo "✅ Documentation build complete!"
echo "📁 Output available in: model/model-docs/book/"
echo ""
echo "To serve locally, run:"
echo "   cd model/model-docs && mdbook serve --open"