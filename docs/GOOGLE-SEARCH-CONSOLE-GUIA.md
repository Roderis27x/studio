# 🔍 Google Search Console - Guía Paso a Paso

## ¿Por qué Google Search Console?

Es la **herramienta oficial de Google** para decirle a Google cómo indexar tu sitio, ver errores, y consolidar autoridad del dominio viejo al nuevo.

---

## PASO 1: Crear Propiedad para Dominio Nuevo

### 1.1 Acceder a GSC
- Ve a: https://search.google.com/search-console
- Inicia sesión con tu cuenta Google

### 1.2 Crear propiedad
1. Haz clic en **"Agregar propiedad"** (esquina superior izquierda)
2. Elige **"URL"** (no "Propiedad de dominio")
3. Ingresa: `https://cpt-soft.com` (tu dominio real)
4. Haz clic en **"Continuar"**

### 1.3 Verificar propiedad (Elige UNA opción)

#### Opción A: HTML (Rápido)
1. Descarga el archivo HTML
2. Cópialo a `public/` de tu proyecto
3. Deploy y espera 5 minutos
4. Click en **"Verificar"**

#### Opción B: DNS (Permanente - Recomendado)
1. Copia el registro DNS que te muestra
2. Ve a tu proveedor de dominio (GoDaddy, Namecheap, etc.)
3. Agrega el registro TXT
4. Espera 24-48 horas
5. Click en **"Verificar"**

#### Opción C: Google Analytics
Si ya tienes GA4 instalado:
1. Click en **"Verificar con Google Analytics"**
2. GSC automáticamente te verifica

---

## PASO 2: Migrar del Dominio Viejo

### 2.1 Agregar propiedad vieja (si no existe)
1. Repite PASO 1 con: `https://cpt-soft-pagina-demo.vercel.app`
2. Verifica igual que antes

### 2.2 Cambiar dirección
1. En la propiedad VIEJA:
   - Ve a **Configuración** (rueda dentada, abajo a la izquierda)
   - Haz clic en **"Cambiar dirección"**
   - Selecciona la propiedad NUEVA

2. Google te pedirá confirmación
3. Aparecerá un banner: *"Cambio de dirección iniciado"*

### 2.3 ¿Qué sucede?
- ✅ Google **consolida automáticamente** toda la autoridad
- ✅ Los URLs antiguos aparecerán en la nueva propiedad
- ✅ Los Rankings se transfieren
- ⏱️ Toma 3-6 meses completamente

---

## PASO 3: Agregar Sitemap

### 3.1 En la propiedad NUEVA
1. Ve a **Sitemaps** (menú izquierdo)
2. Ingresa en el campo: `sitemap.xml`
3. Click en **"Enviar"**

### 3.2 Verificar
1. Verás estado: ✓ "Éxito" o ⏳ "En proceso"
2. Click en sitemap.xml para ver detalles
3. Debe mostrar: **"Páginas indexadas"**

---

## PASO 4: Solicitar Indexación

### 4.1 Indexar la página principal
1. Ve a **Inspección de URL** (barra de búsqueda, arriba)
2. Pega: `https://cpt-soft.com`
3. Presiona Enter

### 4.2 Si muestra "No indexada"
1. Click en **"Solicitar indexación"** (botón azul)
2. Google la rastreará en 24-48 horas

### 4.3 Indexar otras páginas
Repite para:
- `/erp`
- `/crm`
- `/planilla`
- `/contacto`
- Etc.

---

## PASO 5: Monitorear Indexación

### 5.1 Cobertura
1. Ve a **Cobertura** (menú izquierda)
2. Verás:
   - 🟢 **Válida**: Indexada correctamente
   - 🟡 **Con advertencias**: Indexada, pero con problemas menores
   - 🔴 **Errores**: No indexada
   - ⚪ **Excluida**: No se indexa (por robots.txt o noindex)

### 5.2 Mejorar cobertura
Si ves errores:
1. Haz clic en el error
2. Verás qué URLs tienen problemas
3. Click en URL para ver detalles
4. **"Validar"** después de arreglar

---

## PASO 6: Analizar Rendimiento

### 6.1 Ver posiciones
1. Ve a **Rendimiento** (menú izquierda)
2. Verás:
   - **Clics**: Cuántas veces hicieron clic en tu sitio
   - **Impresiones**: Cuántas veces apareces
   - **CTR**: Porcentaje que hizo clic
   - **Posición**: Promedio de ranking

### 6.2 Filtrar por tipo
- Página (URL específica)
- País (si, apareces en El Salvador vs Panamá)
- Dispositivo (Mobile vs Desktop)
- Fecha (últimas 28 días, últimos 3 meses, etc.)

### 6.3 Mejorar CTR
- Haz títulos más atractivos
- Escribe descripciones convincentes
- Agrega emojis o símbolos si es relevante

---

## PASO 7: Resolver Problemas Comunes

### Problema: "Descubierta pero no indexada"
**Causa**: Google la vio pero no la incluyó
**Solución**:
1. Espera 1-2 semanas
2. Si persiste, click en **"Solicitar indexación"**
3. Verifica que robots.txt lo permita

### Problema: "Redirigida"
**Causa**: Hay un redireccionamiento 301/302
**Solución**:
- Es normal durante migración
- Espera a que Google lo consolide
- Verifica que sea 301 (permanente), no 302

### Problema: "Página con errores"
**Causa**: Problemas técnicos
**Solución**:
1. Click en el error
2. Usa **"Validador de markup estructurado"**
3. Corrección en código

### Problema: "No aparezco en búsqueda"
**Posibles causas**:
1. ❌ Sitio no indexado (revisa Cobertura)
2. ❌ Palabra clave muy competitiva
3. ❌ Falta de backlinks
4. ❌ Contenido muy corto
5. ❌ Core Web Vitals bajos

---

## PASO 8: Monitorear Diariamente

### Configurar Notificaciones
1. Ve a **Configuración** (rueda dentada)
2. **Notificaciones preferidas**
3. Activa:
   - ✅ Problemas de cobertura críticos
   - ✅ Cambios en seguridad
   - ✅ Nuevas oportunidades de datos estructurados

### Revisar Semanalmente
- Rendimiento (clics, impresiones, CTR)
- Cobertura (nuevos errores)
- Inspección de URLs críticas

### Revisar Mensualmente
- Palabras clave con mejor rendimiento
- Competencia en búsquedas
- Oportunidades de mejora

---

## PASO 9: Solicitar Eliminación del Sitio Viejo

### 9.1 En la propiedad VIEJA
1. Ve a **Eliminaciones** (menú izquierda)
2. Click en **"Eliminar URLs"** (botón azul)
3. Elige:
   - **Temporalmente** (30 días, para migración)
   - **Permanentemente** (elimina todo)

### 9.2 Selecciona URLs
- ✅ Recomendado: Todos (usar patrón `*`)
- O selecciona solo las principales

### 9.3 Esperar
- Google quitará en 24-48 horas de búsquedas
- Pero indexación completa toma 3-6 meses

---

## CHECKLIST FINAL

- [ ] ✅ Propiedad nueva creada y verificada
- [ ] ✅ Cambio de dirección completado
- [ ] ✅ Sitemap enviado
- [ ] ✅ Página principal indexada
- [ ] ✅ Otras páginas indexadas
- [ ] ✅ Cobertura > 90% (verde)
- [ ] ✅ Rendimiento con datos (esperá 2 semanas)
- [ ] ✅ Notificaciones configuradas
- [ ] ✅ Sitio viejo en eliminación

---

## 📊 Resultados Esperados

### Semana 1
- Apenas datos en Rendimiento
- Cobertura mostrando todas las páginas

### Semana 2-3
- Primeros clics aparecen
- CTR comenzará a subir
- Posiciones promedio: 50-100

### Mes 1
- Posiciones promedio: 20-50
- Clics consistentes
- CTR: 1-2%

### Mes 3
- Posiciones promedio: 10-30
- CTR: 3-5%
- Tráfico: 100-300 usuarios/mes

### Mes 6
- Posiciones promedio: 5-20
- CTR: 5-10%
- Tráfico: 300-800 usuarios/mes

---

## 🎓 Recursos Adicionales

- **Ayuda GSC**: https://support.google.com/webmasters
- **Core Web Vitals**: https://web.dev/vitals
- **Mobile Friendly Test**: https://search.google.com/test/mobile-friendly
- **Structured Data Test**: https://search.google.com/test/rich-results

---

## 💡 Pro Tips

1. **Verifica robots.txt regularmente**
   - Google puede no indexar si robots.txt lo bloquea
   - Ve a **Cobertura > Excluida** para ver qué se bloquea

2. **Usa URL Inspection para URLs problemáticas**
   - No esperes a que Google las encuentre
   - Inspecciona manualmente y solicita indexación

3. **Monitorea Core Web Vitals**
   - Ve a **Experimentos > Core Web Vitals**
   - Google prioriza sitios rápidos

4. **Crea contenido regularmente**
   - 1 blog post/mes = +20-30% tráfico
   - Más URLs = más oportunidades

5. **Construye backlinks**
   - 1 backlink de autoridad > 10 de baja calidad
   - Guest posts en blogs relevantes ayudan mucho

---

¡Ya tienes todo lo que necesitas! El próximo paso es empezar. 🚀
