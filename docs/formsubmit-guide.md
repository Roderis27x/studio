# Guía Rápida: FormSubmit en CPT-SOFT

## ¿Qué es FormSubmit?

FormSubmit es un servicio gratuito que convierte formularios HTML en emails. **No necesitas API keys, backend, ni configuración complicada.**

## ✅ Ventajas

- 🆓 **100% Gratuito** - Sin límites
- 🚀 **Sin registro** - Solo tu email
- 📎 **Adjuntos** - Soporta archivos
- 🛡️ **Anti-spam** - Protección incluida
- 🎨 **Personalizable** - Muchas opciones

## 🔧 Configuración Actual

### Formulario de Contacto
**Ubicación:** `src/app/contacto/page.tsx`
```tsx
<form action="https://formsubmit.co/info@cpt-soft.com" method="POST">
```

### Formulario de Carreras
**Ubicación:** `src/app/carreras/page.tsx`
```tsx
<form 
  action="https://formsubmit.co/info@cpt-soft.com" 
  method="POST"
  encType="multipart/form-data"
>
```

## 📧 Primera Vez (Activación)

1. Alguien envía el formulario
2. FormSubmit te envía un email de confirmación
3. Haz clic en el enlace
4. ¡Listo! Los siguientes emails llegarán automáticamente

## 🎯 Cambiar el Email de Destino

Si quieres usar otro email:

1. Busca `action="https://formsubmit.co/info@cpt-soft.com"` en los archivos
2. Cámbialo por `action="https://formsubmit.co/tu-email@ejemplo.com"`
3. La primera vez que se use, confirma el nuevo email

## 🔐 Seguridad Incluida

### Campo Honeypot (Anti-bots)
```html
<input type="text" name="_honey" style={{display: 'none'}} />
```
Los bots llenan este campo y son bloqueados automáticamente.

### Sin CAPTCHA
```html
<input type="hidden" name="_captcha" value="false" />
```
Mejor experiencia de usuario, protección incluida.

## 🎨 Opciones Avanzadas

### Página de Gracias Personalizada
```html
<input type="hidden" name="_next" value="https://cpt-soft.com/gracias" />
```

### Cambiar Asunto del Email
```html
<input type="hidden" name="_subject" value="Nuevo mensaje personalizado" />
```

### Email de Confirmación Automático
```html
<input type="hidden" name="_autoresponse" value="¡Gracias! Te responderemos pronto." />
```

### Template HTML vs Tabla
```html
<!-- Formato tabla (actual) -->
<input type="hidden" name="_template" value="table" />

<!-- Formato caja -->
<input type="hidden" name="_template" value="box" />
```

## 📋 Campos que se Envían

### Contacto
- **Nombre** → Aparece en el email
- **Email** → Para responder
- **Asunto** → Título del mensaje
- **Mensaje** → Contenido

### Carreras
- **Nombre** → Candidato
- **Email** → Para contactar
- **Teléfono** → Contacto directo
- **Mensaje** → Carta de presentación
- **CV** → Archivo adjunto (PDF/DOC/DOCX)

## 🚨 Solución de Problemas

### No llegan los emails
1. ✅ Confirma el email la primera vez
2. 📂 Revisa spam/promociones
3. ✉️ Verifica el email en el código

### El CV no se adjunta
1. Verifica `encType="multipart/form-data"`
2. Campo debe tener `name="cv"`
3. Máximo 5MB

### Errores de validación
Los formularios usan `react-hook-form` + `zod` para validación en el frontend antes de enviar.

## 📊 ¿Cuántos emails puedo enviar?

**Ilimitados.** FormSubmit no tiene límites en el plan gratuito.

## 🔗 Más Información

- Sitio oficial: [https://formsubmit.co/](https://formsubmit.co/)
- Documentación completa: [https://formsubmit.co/documentation](https://formsubmit.co/documentation)

## 💡 Tips

1. **Prueba primero**: Envía un formulario de prueba y confirma el email
2. **Revisa spam**: La primera vez puede llegar a spam
3. **Guarda emails**: FormSubmit no guarda historial, los emails van a tu bandeja
4. **Backup**: Considera guardar contactos en una hoja de cálculo o CRM

## ✨ Resumen

- ✅ Configuración: **2 minutos**
- ✅ Costo: **$0**
- ✅ Mantenimiento: **Ninguno**
- ✅ Límites: **Ninguno**
- ✅ Complejidad: **Mínima**

¡Listo para recibir mensajes! 🎉
