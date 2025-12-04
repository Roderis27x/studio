#!/bin/bash
# Script de validación SEO para CPT-SOFT
# Uso: bash docs/test-seo.sh

echo "🔍 Validando configuración SEO..."
echo ""

# Variables
DOMAIN="https://cpt-soft.com" # Cambiar por tu dominio real
LOCAL="http://localhost:3000"

# Función para validar URLs
validate_url() {
    echo "📌 Validando: $1"
    curl -s -o /dev/null -w "Status: %{http_code}\n" "$1"
}

echo "=== VALIDACIONES LOCALES (http://localhost:3000) ==="
echo ""

echo "✓ Robots.txt:"
curl -s "$LOCAL/robots.txt" | head -5
echo ""

echo "✓ Sitemap:"
curl -s "$LOCAL/sitemap.xml" | head -10
echo ""

echo "✓ Metadata en Inicio:"
curl -s "$LOCAL/" | grep -i "og:title\|og:description\|meta name=\"description\"" | head -5
echo ""

echo "✓ Metadata en /erp:"
curl -s "$LOCAL/erp" | grep -i "og:title\|og:description\|meta name=\"description\"" | head -5
echo ""

echo "=== VALIDACIONES PRODUCCIÓN (Tu dominio) ==="
echo ""

echo "Cuando hayas desplegado, ejecuta:"
echo "  validate_url '$DOMAIN/robots.txt'"
echo "  validate_url '$DOMAIN/sitemap.xml'"
echo ""

echo "=== HERRAMIENTAS ONLINE ==="
echo ""
echo "1. Google Search Console: https://search.google.com/search-console"
echo "2. PageSpeed: https://pagespeed.web.dev/?url=$DOMAIN"
echo "3. Schema Testing: https://schema.org/validator"
echo "4. Mobile Friendly: https://search.google.com/test/mobile-friendly?url=$DOMAIN"
echo ""

echo "✅ Validación completada!"
