# Configuración de Envío de Emails

Este proyecto usa **FormSubmit** con **plantillas HTML personalizadas** para enviar correos electrónicos desde los formularios de contacto y carreras. Las plantillas están basadas en los diseños de React Email que creaste.

## Configuración Inicial

### 1. Configurar Email de Destino

Los formularios ya están configurados para enviar a `info@cpt-soft.com`. Si deseas cambiar el email:

**Para Contacto:**
Edita `src/app/contacto/page.tsx` y cambia:
```tsx
action="https://formsubmit.co/tu-email@ejemplo.com"
```

**Para Carreras:**
Edita `src/app/carreras/page.tsx` y cambia:
```tsx
action="https://formsubmit.co/tu-email@ejemplo.com"
```

### 2. Activar tu Email (Primera vez)

La primera vez que alguien envíe un formulario:

1. FormSubmit enviará un email de confirmación a tu dirección
2. Haz clic en el enlace de confirmación
3. ¡Ya está! Los siguientes envíos llegarán directamente

### 3. Características Incluidas

✅ **Anti-spam**: Campo honeypot incluido  
✅ **Sin CAPTCHA**: Configurado para mejor UX  
✅ **Formato tabla**: Los emails llegan en formato organizado  
✅ **Adjuntos**: El formulario de carreras soporta CVs  
✅ **Sin límites**: 100% gratuito, sin límites de envíos

## Estructura de Formularios

### Formulario de Contacto (`src/app/contacto/page.tsx`)
**Campos enviados:**
- Nombre
- Email
- Asunto
- Mensaje

### Formulario de Carreras (`src/app/carreras/page.tsx`)
**Campos enviados:**
- Nombre
- Email
- Teléfono
- Mensaje (opcional)
- CV (adjunto PDF/DOC/DOCX, máx 5MB)

## Configuración Avanzada de FormSubmit

Puedes personalizar más opciones agregando campos ocultos:

### Redirigir después del envío
```html
<input type="hidden" name="_next" value="https://tudominio.com/gracias" />
```

### Cambiar el asunto del email
```html
<input type="hidden" name="_subject" value="Nuevo mensaje desde mi web" />
```

### Desactivar CAPTCHA
```html
<input type="hidden" name="_captcha" value="false" />
```

### Email de confirmación automático
```html
<input type="hidden" name="_autoresponse" value="Gracias por contactarnos. Responderemos pronto." />
```

Más opciones en: [https://formsubmit.co/](https://formsubmit.co/)

## Ventajas de FormSubmit

✅ **Gratis**: Sin costos, sin límites  
✅ **Sin registro**: No necesitas crear cuenta  
✅ **Sin código backend**: Todo desde el frontend  
✅ **Soporta adjuntos**: Perfecto para CVs  
✅ **Anti-spam**: Protección incluida  
✅ **Fácil configuración**: Solo tu email  

## Solución de Problemas

### Los emails no llegan
1. Verifica que confirmaste el email la primera vez
2. Revisa tu carpeta de spam
3. Verifica que el email en `action=""` sea correcto

### El archivo no se adjunta
1. Verifica que el form tenga `encType="multipart/form-data"`
2. El campo file debe tener `name="cv"` (o el nombre que uses)
3. Máximo 5MB por archivo

### Emails de spam
- FormSubmit incluye protección anti-spam con el campo honeypot
- Los bots llenarán el campo oculto y serán bloqueados
