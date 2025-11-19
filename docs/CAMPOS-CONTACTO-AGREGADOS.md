# ✅ Campos Agregados al Formulario de Contacto

## 📝 Nuevos Campos

Se agregaron 2 campos al formulario de contacto:

### 1. **Nombre de Compañía** (Opcional)
- Campo: `company`
- Nombre en email: `Compañía`
- Placeholder: "Tu Empresa S.A."
- Validación: Mínimo 2 caracteres (opcional)

### 2. **Teléfono** (Opcional)
- Campo: `phone`
- Nombre en email: `Teléfono`
- Placeholder: "+507 1234-5678"
- Tipo: `tel`
- Validación: Mínimo 7 caracteres (opcional)

## 🎯 Cambios Realizados

### Archivo: `src/app/contacto/page.tsx`

1. **Schema de Validación Actualizado:**
```typescript
const formSchema = z.object({
  name: z.string().min(2, { message: "..." }),
  company: z.string().min(2, { message: "..." }).optional().or(z.literal("")),
  phone: z.string().min(7, { message: "..." }).optional().or(z.literal("")),
  email: z.string().email({ message: "..." }),
  subject: z.string().min(5, { message: "..." }),
  message: z.string().min(10, { message: "..." }),
});
```

2. **Default Values:**
```typescript
defaultValues: {
  name: "",
  company: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
},
```

3. **Formulario HTML:**
- Los campos Compañía y Teléfono aparecen en una **grilla de 2 columnas** en desktop
- Se adaptan a **1 columna** en móvil
- Entre Nombre y Email para mejor flujo de datos

4. **Función onSubmit:**
```typescript
const htmlContent = contactoEmailTemplate({
  name: values.name,
  company: values.company,      // ← NUEVO
  phone: values.phone,          // ← NUEVO
  email: values.email,
  subject: values.subject,
  message: values.message,
});
```

### Archivo: `src/lib/email-templates.ts`

1. **Tipo de Datos Actualizado:**
```typescript
export const contactoEmailTemplate = (data: {
  name: string;
  company?: string;    // ← NUEVO
  phone?: string;      // ← NUEVO
  email: string;
  subject: string;
  message: string;
}): string => { ... }
```

2. **Plantilla HTML Actualizada:**
Los nuevos campos se muestran **solo si están presentes**:

```html
<!-- Si existe compañía -->
<div class="info-item">
  <p class="info-label">Compañía</p>
  <p class="info-value">${company}</p>
</div>

<!-- Si existe teléfono -->
<div class="info-item">
  <p class="info-label">Teléfono</p>
  <p class="info-value">
    <a href="tel:${phone}">${phone}</a>
  </p>
</div>
```

## 🖼️ Diseño en Formulario

```
┌─────────────────────────────────────────┐
│ Envíenos un Mensaje                     │
├─────────────────────────────────────────┤
│ Nombre Completo * ________              │
│                                         │
│ Nombre de Compañía  │  Teléfono        │
│ _________________  │  ________________  │
│                                         │
│ Correo Electrónico * __________________│
│                                         │
│ Asunto * ______________________________│
│                                         │
│ Mensaje * ____________________________│
│ _____________________________________│
│                                         │
│ [Enviar Mensaje]                        │
└─────────────────────────────────────────┘
```

## 📧 Diseño en Email

Cuando llegan los datos a FormSubmit, el email muestra:

```
┌────────────────────────────────────────┐
│      Información del Contacto          │
├────────────────────────────────────────┤
│                                        │
│ Nombre                                 │
│ Juan Pérez                             │
│                                        │
│ Compañía                               │
│ Acme Corporation                       │
│                                        │
│ Teléfono                               │
│ +507 1234-5678                         │
│                                        │
│ Email                                  │
│ juan@acme.com                          │
│                                        │
│ Asunto                                 │
│ Consulta sobre ERP                     │
│                                        │
└────────────────────────────────────────┘
```

## ✅ Validaciones

- **Nombre:** Requerido, mín 2 caracteres
- **Compañía:** Opcional, mín 2 caracteres si se completa
- **Teléfono:** Opcional, mín 7 caracteres si se completa
- **Email:** Requerido, debe ser válido
- **Asunto:** Requerido, mín 5 caracteres
- **Mensaje:** Requerido, mín 10 caracteres

## 🧪 Cómo Probar

1. Ve a `/contacto`
2. Llena el formulario con:
   - Nombre: "Juan Pérez"
   - Compañía: "Mi Empresa"
   - Teléfono: "+507 1234-5678"
   - Email: "tu@email.com"
   - Asunto: "Consulta"
   - Mensaje: "Me gustaría conocer más sobre..."
3. Envía
4. Verifica el email para ver los campos nuevos

## 📊 Resumen de Cambios

| Elemento | Antes | Después |
|----------|-------|---------|
| Campos | 4 | 6 |
| Campos requeridos | 4 | 4 |
| Campos opcionales | 0 | 2 |
| Filas en formulario | 4 | 6 |
| Campos en email | 4 | 6 |

## 🎯 Próximos Pasos (Opcional)

- [ ] Agregar más campos (Asunto de interés, Presupuesto, etc.)
- [ ] Crear versión móvil específica
- [ ] Agregar autocompletar con historial
- [ ] Conectar con CRM

¡Los cambios están listos para usar! 🎉
