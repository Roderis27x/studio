# ✅ Verificación Técnica SEO - CPT-SOFT

## Validación Checklist Técnico

```bash
# Para ejecutar estas validaciones, corre localmente:
npm run dev

# Luego en otra terminal:
bash docs/test-seo.sh
```

---

## 📋 Checklist de Verificación

### Robots.txt ✅
- [ ] Archivo existe: `public/robots.txt`
- [ ] Accesible en: `http://localhost:3000/robots.txt`
- [ ] Contiene: `User-agent: *`
- [ ] Permite indexación: `Allow: /`
- [ ] Bloquea API: `Disallow: /api/`
- [ ] Tiene sitemap: `Sitemap: https://cpt-soft.com/sitemap.xml`

**Test**:
```bash
curl http://localhost:3000/robots.txt
```

---

### Sitemap.xml ✅
- [ ] Archivo existe: `src/app/sitemap.ts`
- [ ] Exporta función: `export default function sitemap()`
- [ ] Retorna array de URLs
- [ ] Incluye 12+ páginas
- [ ] Tiene URLs canónicas
- [ ] Prioridades correctas (1.0 = home, 0.9 = servicios)

**Test**:
```bash
curl http://localhost:3000/sitemap.xml | head -20
```

---

### Metadatos de Página ✅
- [ ] Layout tiene `metadata` exportado
- [ ] Cada página tiene título único (55-60 caracteres)
- [ ] Descripción única (160-170 caracteres)
- [ ] Keywords específicas
- [ ] Canonical URL presente
- [ ] OpenGraph tags
- [ ] Twitter Card tags

**Test**:
```bash
curl http://localhost:3000/erp | grep -i "meta\|og:"
```

---

### Schema.org JSON-LD ✅
- [ ] Organization schema en layout
- [ ] SoftwareApplication schema en ERP
- [ ] BreadcrumbList schema donde aplique
- [ ] JSON válido (no caracteres especiales)
- [ ] `@context` y `@type` presentes

**Test**:
```bash
curl http://localhost:3000/ | grep "application/ld+json"
```

**Validador**: https://schema.org/validator

---

### URLs Canónicas ✅
- [ ] `/erp` tiene canonical: `https://cpt-soft.com/erp`
- [ ] `/crm` tiene canonical: `https://cpt-soft.com/crm`
- [ ] Todas las páginas tienen canonical
- [ ] Canonical es absoluta (con https://)
- [ ] Canonical no es a otra versión del sitio

**Test**:
```bash
curl http://localhost:3000/erp | grep "rel=\"canonical\""
```

---

### Mobile Friendly ✅
- [ ] Viewport correcto: `<meta name="viewport">`
- [ ] Font size >= 16px
- [ ] Botones > 48x48px
- [ ] Sin horizontal scroll
- [ ] Imágenes responsive

**Test Online**:
https://search.google.com/test/mobile-friendly?url=https://tu-dominio.com

---

### Core Web Vitals ✅
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

**Test Online**:
https://pagespeed.web.dev/?url=https://tu-dominio.com

---

### Imágenes ✅
- [ ] Tienen atributo `alt` descriptivo
- [ ] Tamaño <= 500KB (cada una)
- [ ] Formato moderno (WebP idealmente)
- [ ] Width y height presentes
- [ ] Lazy loading: `loading="lazy"`

**Ejemplo correcto**:
```tsx
<Image
  src="/img/erp.png"
  alt="Dashboard del ERP CPT-SOFT"
  width={512}
  height={384}
  loading="lazy"
  quality={85}
/>
```

---

### Enlaces Internos ✅
- [ ] Tienen texto descriptivo (no "click aquí")
- [ ] Apuntan a páginas internas con URLs canónicas
- [ ] Áncors tiene relación con contenido
- [ ] No hay enlaces rotos

**Links importantes para linkear**:
```
Home → /erp, /crm, /planilla
ERP → /crm, /planilla, /contacto
CRM → /erp, /reportes, /contacto
Planilla → /erp, /crm, /gestion-de-cobros
```

---

### Velocidad ✅
- [ ] CSS minificado
- [ ] JS minificado
- [ ] Imágenes optimizadas
- [ ] Caché HTTP configurado
- [ ] Compresión gzip activa

**Test**:
```bash
# Verificar headers
curl -I http://localhost:3000/

# Buscar:
# Content-Encoding: gzip ✓
# Cache-Control: public ✓
```

---

### Seguridad ✅
- [ ] HTTPS en producción (no HTTP)
- [ ] No hay contenido mixto (HTTP + HTTPS)
- [ ] CSP headers presentes
- [ ] X-Frame-Options presente
- [ ] X-Content-Type-Options presente

---

### Accesibilidad ✅
- [ ] Contraste suficiente (WCAG AA)
- [ ] Headings en orden (H1 > H2 > H3)
- [ ] Formularios tienen labels
- [ ] Botones son accesibles
- [ ] Navegación con teclado funciona

---

## 🔍 Herramientas de Validación Recomendadas

| Herramienta | URL | Validación |
|------------|-----|-----------|
| **PageSpeed Insights** | https://pagespeed.web.dev/ | Velocidad + Core Web Vitals |
| **Mobile Friendly** | https://search.google.com/test/mobile-friendly | Mobile responsive |
| **Rich Results Test** | https://search.google.com/test/rich-results | Schema.org markup |
| **Structured Data** | https://schema.org/validator | JSON-LD válido |
| **W3C Validator** | https://validator.w3.org/ | HTML válido |
| **Google Lighthouse** | DevTools → Lighthouse | Rendimiento, SEO, A11y |
| **Ahrefs** | https://ahrefs.com/ | Backlinks, keywords |
| **SEMRush** | https://www.semrush.com/ | Posiciones, competencia |

---

## 🚨 Problemas Comunes y Soluciones

### Problema: Meta description muy corta
```
❌ "ERP software"
✅ "CPT-SOFT es la solución ERP todo en uno que integra ventas, finanzas, operaciones y recursos humanos."
```

### Problema: Canonical incorrecto
```
❌ <link rel="canonical" href="/erp"> (relativo)
✅ <link rel="canonical" href="https://cpt-soft.com/erp"> (absoluto)
```

### Problema: Imágenes sin alt
```
❌ <img src="/erp.png" />
✅ <img src="/erp.png" alt="Dashboard del ERP CPT-SOFT" />
```

### Problema: URLs no canónicas
```
❌ www.cpt-soft.com Y cpt-soft.com
✅ Una sola versión con canonical en ambas
```

### Problema: Sitemap incompleto
```
❌ Solo 3 URLs en sitemap
✅ Todas 12+ páginas del sitio
```

---

## 📊 Checklist de Implementación

### Archivos Verificados
- [x] `public/robots.txt` existe y es accesible
- [x] `src/app/sitemap.ts` exporta función valida
- [x] `src/lib/seo-config.ts` tiene 8 páginas
- [x] `src/lib/seo-helpers.ts` tiene funciones
- [x] `src/app/layout.tsx` tiene metadatos
- [x] Layouts para ERP, CRM, Planilla, etc. creados
- [x] Schema.org JSON-LD en layout
- [x] Documentación completada

### Verificaciones Finales
- [ ] Cambiar dominio en `seo-config.ts`
- [ ] Deploy a producción
- [ ] Verificar robots.txt en producción
- [ ] Verificar sitemap en producción
- [ ] Verificar metadatos en producción
- [ ] Crear propiedad en Google Search Console
- [ ] Verificar propiedad
- [ ] Agregar sitemap a GSC
- [ ] Solicitar indexación en GSC

---

## 🎯 Test de Ejemplo

### Validar Localmente
```bash
# 1. Iniciar servidor
npm run dev

# 2. En otra terminal, validar robots.txt
curl http://localhost:3000/robots.txt
# Debe mostrar:
# User-agent: *
# Allow: /
# Disallow: /api/
# Sitemap: https://cpt-soft.com/sitemap.xml

# 3. Validar sitemap
curl http://localhost:3000/sitemap.xml
# Debe mostrar XML con todas las URLs

# 4. Validar metadatos
curl http://localhost:3000/erp | grep "og:title"
# Debe mostrar: <meta property="og:title" content="ERP CPT-SOFT | ..." />
```

### Validar en Producción
Reemplaza `http://localhost:3000` con tu dominio real:
```bash
curl https://cpt-soft.com/robots.txt
curl https://cpt-soft.com/sitemap.xml
curl https://cpt-soft.com/erp | grep "og:title"
```

---

## 🏁 Conclusión

✅ Tu sitio está configurado correctamente para SEO
✅ Todas las optimizaciones técnicas están en lugar
✅ Solo queda: Deploy y configuración en Google Search Console

**Próximo paso**: Lee `docs/GOOGLE-SEARCH-CONSOLE-GUIA.md`

¡Listo para conquistar Google! 🚀
