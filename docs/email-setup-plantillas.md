# Email Setup - Plantillas Personalizadas

Este proyecto usa **FormSubmit** con **plantillas HTML personalizadas** basadas en tus diseños de React Email.

## ✨ Características

✅ **Plantillas profesionales** - Basadas en tus componentes de React Email  
✅ **HTML optimizado** - Estilos CSS integrados en los emails  
✅ **Responsive** - Se ve bien en cualquier cliente (Gmail, Outlook, Apple Mail, etc.)  
✅ **Información clara** - Campos bien organizados y legibles  
✅ **Botones de acción** - Links para responder fácilmente  
✅ **Información de contacto** - Footer con datos de CPT-SOFT  
✅ **Adjuntos** - Soporte para archivos (CVs en formulario de carreras)  

## 📁 Archivos Clave

### 1. Plantillas HTML (`src/lib/email-templates.ts`)

Contiene dos funciones principales:

```typescript
// Para formulario de contacto
export const contactoEmailTemplate = (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): string => { ... }

// Para formulario de carreras
export const carrerasEmailTemplate = (data: {
  nombre: string;
  email: string;
  telefono: string;
  mensaje?: string;
  cvFileName: string;
}): string => { ... }
```

Estas funciones generan HTML personalizado basado en los datos del formulario.

### 2. Formulario de Contacto (`src/app/contacto/page.tsx`)

**Flujo:**
1. Usuario llena: Nombre, Email, Asunto, Mensaje
2. `onSubmit()` se ejecuta
3. Genera HTML personalizado con `contactoEmailTemplate()`
4. Inserta HTML en campo oculto `#email-html`
5. Envía a FormSubmit.co

**Configuración:**
```tsx
<form 
  action="https://formsubmit.co/info@cpt-soft.com" 
  method="POST"
>
  <input type="hidden" name="_template" value="html" />
  <input type="hidden" name="_captcha" value="false" />
  <textarea id="email-html" name="html" style={{display: 'none'}}></textarea>
  {/* Campos del formulario... */}
</form>
```

### 3. Formulario de Carreras (`src/app/carreras/page.tsx`)

**Flujo:**
1. Usuario llena: Nombre, Email, Teléfono, Mensaje (opcional), CV
2. Validación de archivo (tipo y tamaño ≤ 5MB)
3. `handleSubmit()` genera HTML personalizado
4. Inserta HTML en campo oculto
5. Envía a FormSubmit con CV adjunto

**Configuración:**
```tsx
<form 
  action="https://formsubmit.co/info@cpt-soft.com" 
  method="POST"
  encType="multipart/form-data"
>
  <input type="hidden" name="_template" value="html" />
  <textarea id="email-html" name="html" style={{display: 'none'}}></textarea>
  {/* CV, Nombre, Email, etc... */}
</form>
```

## 🎨 Diseño de las Plantillas

### Plantilla de Contacto

```
┌─────────────────────────────────┐
│         LOGO CPT-SOFT           │
│                                 │
│ Nuevo Mensaje de Contacto       │
│                                 │
│ ┌────────────────────────────┐  │
│ │ Información del Contacto   │  │
│ │                            │  │
│ │ Nombre: [nombre]           │  │
│ │ Email: [email]             │  │
│ │ Asunto: [asunto]           │  │
│ └────────────────────────────┘  │
│                                 │
│ ┌────────────────────────────┐  │
│ │ Mensaje:                   │  │
│ │ [contenido del mensaje]    │  │
│ └────────────────────────────┘  │
│                                 │
│   [Botón: Responder por Email]  │
│                                 │
│ ─────────────────────────────── │
│                                 │
│ Footer con contactos CPT-SOFT   │
└─────────────────────────────────┘
```

### Plantilla de Carreras

```
┌─────────────────────────────────┐
│         LOGO CPT-SOFT           │
│                                 │
│ Nueva Aplicación de Carrera     │
│                                 │
│ ┌────────────────────────────┐  │
│ │ [Nombre del Candidato]     │  │
│ │                            │  │
│ │ Email: [email]             │  │
│ │ Teléfono: [teléfono]       │  │
│ │ CV Adjunto: 📄 [archivo]   │  │
│ └────────────────────────────┘  │
│                                 │
│ ┌────────────────────────────┐  │
│ │ Carta de Presentación:     │  │
│ │ [contenido del mensaje]    │  │
│ └────────────────────────────┘  │
│                                 │
│ ┌────────────────────────────┐  │
│ │ ✅ Próximos pasos:         │  │
│ │ 1. Revisar CV adjunto      │  │
│ │ 2. Evaluar perfil          │  │
│ │ 3. Contactar para entrevista│ │
│ └────────────────────────────┘  │
│                                 │
│ [Botón: Contactar Candidato]    │
│                                 │
│ ─────────────────────────────── │
│ Footer con datos CPT-SOFT       │
└─────────────────────────────────┘
```

## 🔧 Primeros Pasos

### 1. Primera Vez - Activar Email

1. Ve a `/contacto` o `/carreras`
2. Llena el formulario de prueba
3. Envía
4. FormSubmit te enviará un email de confirmación a `info@cpt-soft.com`
5. Haz clic en el enlace de confirmación
6. ¡Listo! Los siguientes emails llegarán directamente

### 2. Cambiar Email de Destino

Si quieres usar otro email:

**En contacto:**
```tsx
// src/app/contacto/page.tsx
<form action="https://formsubmit.co/tu-email@ejemplo.com" method="POST">
```

**En carreras:**
```tsx
// src/app/carreras/page.tsx
<form action="https://formsubmit.co/tu-email@ejemplo.com" method="POST">
```

Luego confirma el nuevo email la primera vez.

### 3. Personalizar Plantillas

Las plantillas se generan en tiempo real. Para modificarlas:

1. Abre `src/lib/email-templates.ts`
2. Edita la función `contactoEmailTemplate()` o `carrerasEmailTemplate()`
3. Cambia colores, estilos, contenido, etc.
4. Los cambios se aplicarán en el siguiente envío

## 🎯 Configuración Avanzada

### Agregar página de gracias

En `src/app/contacto/page.tsx`:
```tsx
<input type="hidden" name="_next" value="https://cpt-soft.com/gracias" />
```

### Agregar auto-respuesta al usuario

```tsx
<input type="hidden" name="_autoresponse" value="Gracias por tu contacto. Pronto nos comunicaremos contigo." />
```

### Cambiar asunto del email

```tsx
<input type="hidden" name="_subject" value="Tu asunto personalizado" />
```

## 📊 Comparación: Plantillas HTML vs React Email

| Aspecto | Plantillas HTML | React Email |
|---------|----------------|------------|
| **Performance** | ⚡ Muy rápido (no requiere servidor) | 🚀 Rápido (requiere servidor) |
| **Complejidad** | ✅ Simple (strings HTML) | 🔧 Compleja (componentes React) |
| **Mantenimiento** | ✅ Fácil (edit strings) | 🔧 Código React |
| **Versionado** | ✅ Simple | 🔧 Complex |
| **Generación** | Client-side | Server-side |
| **Costo** | Gratis | Resend (plan pago) |

**Para este proyecto:** Plantillas HTML es la mejor opción porque:
- No necesitamos servidor
- FormSubmit maneja el envío
- Mejor performance
- Más simple de mantener
- Totalmente gratis

## 🚨 Solución de Problemas

### Los emails no llegan
1. ✅ Confirma el email en el link de FormSubmit
2. 📂 Revisa spam/promociones
3. ✉️ Verifica el email en el `action=""` del form

### El HTML no aparece personalizado
1. Verifica que `_template` = `html` (no `table`)
2. Verifica que el campo `name="html"` esté presente
3. Revisa la consola del navegador por errores

### El CV no se adjunta
1. Verifica `encType="multipart/form-data"` en el form
2. El campo file debe tener `name="cv"`
3. Máximo 5MB

### Validación de archivos
- Tipos permitidos: PDF, DOC, DOCX
- El formulario valida antes de enviar

## 📝 Campos del Formulario

### Contacto
- **name="Nombre"** → Nombre del contacto
- **name="Email"** → Email del contacto (respuesta aquí)
- **name="Asunto"** → Tema del mensaje
- **name="Mensaje"** → Contenido del mensaje

### Carreras
- **name="Nombre"** → Nombre del candidato
- **name="Email"** → Email del candidato
- **name="Teléfono"** → Teléfono de contacto
- **name="Mensaje"** → Carta de presentación (opcional)
- **name="cv"** → Archivo PDF/DOC/DOCX (máx 5MB)

## 🔗 Referencias

- **FormSubmit:** https://formsubmit.co/
- **Documentación:** https://formsubmit.co/documentation
- **Email HTML Best Practices:** https://www.litmus.com/

## ✅ Checklist

- [ ] Envié un test desde `/contacto` y confirmé el email
- [ ] Envié un test desde `/carreras` con un CV de prueba
- [ ] Cambié el email de destino (opcional)
- [ ] Personalicé las plantillas HTML (opcional)
- [ ] Agregué página de gracias (opcional)

¡Listo! Tus formularios ahora envían emails profesionales con plantillas personalizadas. 🎉
