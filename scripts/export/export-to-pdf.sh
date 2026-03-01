#!/bin/bash
# Export Markdown to PDF using Pandoc with custom layout

MD_FILE="print/book/crypto-tarot-book.md"
PDF_FILE="print/book/crypto-tarot-book.pdf"
TEMPLATE="print/book/book-template.tex"

echo "📖 Exporting Crypto Tarot Book to PDF..."

# Check if Pandoc is installed
if ! command -v pandoc &> /dev/null; then
    echo "❌ Pandoc is not installed. Please install it first:"
    echo "   macOS: brew install pandoc"
    echo "   Linux: sudo apt-get install pandoc"
    echo "   Windows: choco install pandoc"
    exit 1
fi

# Check if XeLaTeX is available (for better font support)
if command -v xelatex &> /dev/null; then
    ENGINE="xelatex"
else
    ENGINE="pdflatex"
    echo "⚠️  XeLaTeX not found, using pdflatex (may have font issues)"
fi

# Export to PDF
pandoc "$MD_FILE" \
    -o "$PDF_FILE" \
    --pdf-engine="$ENGINE" \
    --template="$TEMPLATE" \
    --toc \
    --toc-depth=2 \
    -V geometry:margin=2cm \
    -V fontsize=11pt \
    --variable=mainfont:"Times New Roman" \
    --variable=monofont:"Courier New"

if [ $? -eq 0 ]; then
    echo "✅ PDF created successfully: $PDF_FILE"
else
    echo "❌ PDF generation failed. Check the error messages above."
    exit 1
fi

