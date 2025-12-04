# 🚀 Guía de Migraci\u00f3n SEO - CPT-SOFT

## Problema Detectado
Tu sitio antiguo en `cpt-soft-pagina-demo.vercel.app` sigue apareciendo en los resultados de búsqueda de Google, compitiendo con el nuevo dominio `cpt-soft.com`.

---

## Solución: 7 Pasos para Consolidar en Google

### 1. **Cambiar el Dominio en Google Search Console**
- Ve a https://search.google.com/search-console
- Selecciona la propiedad antigua
- Ve a **Configuración > Cambiar dirección**
- Selecciona el nuevo dominio (o crea una propiedad si no existe)
- Google consolidará automáticamente el historial

### 2. **Configurar Redireccionamientos 301**
En `Vercel` (o tu servidor viejo):
```
Redirige TODOS los URLs del dominio antiguo al nuevo:
https://cpt-soft-pagina-demo.vercel.app/* → https://cpt-soft.com/*
```

### 3. **Enviar URLs a Desindexar**
En Google Search Console, ve a:
- **Eliminaciones > Eliminaciones temporales**
- Marca como "No me interesa" los URLs del dominio antiguo
- Google las quitará de los resultados en 3-6 meses

### 4. **Agregar Sitemap al Nuevo Dominio**
- Tu sitemap ya está en: `/src/app/sitemap.ts`
- En Google Search Console (nuevo dominio):
  - Ve a **Sitemaps**
  - Agrega: `https://cpt-soft.com/sitemap.xml`
  - Haz clic en **Enviar**

### 5. **Verificar Canonical URLs**
✅ Ya están configuradas en `seo-helpers.ts`

Verifica que cada página tenga:
```html
<link rel="canonical" href="https://cpt-soft.com/pagina" />
```

### 6. **Verificar robots.txt**
✅ Ya está creado en `public/robots.txt`

### 7. **Monitorear Resultados**
Espera 4-8 semanas para ver los cambios:
- Los resultados del sitio nuevo aumentarán
- Los del sitio viejo disminuirán
- Revisa en Google Search Console periódicamente

---

## 📊 Metadatos Optimizados Agregados

### ✅ Completado:
1. **robots.txt** - Guía a Google sobre qué rastrear
2. **sitemap.xml** - Lista completa de URLs
3. **Canonical URLs** - Evita contenido duplicado
4. **Meta Tags Optimizadas**:
   - Títulos únicos para cada página
   - Descripciones específicas (160-170 caracteres)
   - Keywords relevantes

5. **Schema.org JSON-LD**:
   - Organization (Empresa)
   - SoftwareApplication (Producto)
   - Product (Servicios)
   - LocalBusiness (Ubicación)

6. **OpenGraph y Twitter Cards** - Mejor apariencia en redes sociales

---

## 🎯 Estrategia de Palabras Clave

Tu sitio ahora está optimizado para:

### Generales
- ERP
- Gestión empresarial
- Software empresarial
- Solución integral
- Automatización

### Por Servicio
- **ERP**: Gestión empresarial, inventario, ventas, finanzas
- **CRM**: Gestión de clientes, relaciones comerciales, oportunidades
- **Planilla**: Nómina, recursos humanos, gestión salarial
- **Reportes**: Analytics, business intelligence, dashboards
- **Gestión de Cobros**: Cartera, cuentas por cobrar, cobranza

---

## 🚀 Próximas Mejoras (Recomendadas)

### Fase 2: Contenido
- [ ] Blog con artículos sobre ERP, CRM, automatización
- [ ] Guías y whitepapers descargables
- [ ] Casos de estudio con clientes reales
- [ ] Videos tutoriales

### Fase 3: Velocidad (Core Web Vitals)
- [ ] Optimizar imágenes (WebP, dimensiones correctas)
- [ ] Minificar CSS/JS
- [ ] Lazy loading en todas las imágenes
- [ ] Caché HTTP

### Fase 4: Autoridad
- [ ] Construir backlinks (guest posts, directorios)
- [ ] Local SEO (Google My Business)
- [ ] Social media marketing
- [ ] Email marketing

### Fase 5: Tracking
- [ ] Google Analytics 4 mejorado
- [ ] UTM parameters en CTAs
- [ ] Conversion tracking en formularios
- [ ] Heatmaps y user behavior

---

## 💡 Consejos Rápidos

1. **Actualiza Google My Business** con:
   - Descripción de la empresa
   - Horarios
   - Fotos de calidad
   - Ubicación

2. **Consigue Links de Autoridad**:
   - Directorios empresariales
   - Publicaciones de industria
   - Partenariados

3. **Mantén Contenido Fresco**:
   - Blog posts regulares
   - Actualizaciones de productos
   - Noticias de industria

4. **Monitorea Competencia**:
   - Qué palabras clave usan
   - Dónde publican
   - Sus backlinks

---

## 📞 Próximos Pasos

1. **Hoy**: Implementar cambios en Google Search Console
2. **Esta semana**: Configurar redireccionamientos 301
3. **Próximas 2 semanas**: Monitorear cambios
4. **Próximo mes**: Iniciar blog y contenido

¿Preguntas? Revisa los archivos:
- `src/lib/seo-config.ts` - Configuración centralizada
- `src/lib/seo-helpers.ts` - Funciones de metadatos
- `public/robots.txt` - Directivas para robots
- `src/app/sitemap.ts` - Generador de sitemap
