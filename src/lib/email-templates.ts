/**
 * Email Templates para FormSubmit
 * Genera HTML personalizado para los emails enviados a través de FormSubmit
 */

export const contactoEmailTemplate = (data: {
  name: string;
  company?: string;
  phone?: string;
  email: string;
  subject: string;
  message: string;
}): string => {
  const { name, company, phone, email, subject, message } = data;

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f6f6f6;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border: 1px solid #eaeaea;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .logo-section {
      text-align: center;
      margin-bottom: 32px;
      padding-top: 16px;
    }
    .logo {
      max-width: 160px;
      height: auto;
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
      margin-top: 30px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 400;
      color: #000000;
    }
    .header strong {
      font-weight: 600;
    }
    .intro-text {
      font-size: 14px;
      line-height: 24px;
      color: #000000;
      margin-bottom: 24px;
    }
    .info-section {
      margin: 32px 0;
      border: 1px solid #eaeaea;
      border-radius: 6px;
      padding: 20px;
      background-color: #ffffff;
    }
    .info-section h2 {
      margin: 0 0 16px 0;
      font-size: 16px;
      font-weight: 600;
      color: #000000;
    }
    .info-item {
      margin-bottom: 16px;
    }
    .info-label {
      margin: 0 0 8px 0;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #666666;
    }
    .info-value {
      margin: 0;
      font-size: 14px;
      color: #000000;
    }
    .info-value a {
      color: #0066cc;
      text-decoration: none;
    }
    .message-section {
      margin: 32px 0;
    }
    .message-label {
      margin: 0 0 12px 0;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #666666;
    }
    .message-content {
      margin: 0;
      white-space: pre-wrap;
      word-wrap: break-word;
      border: 1px solid #eaeaea;
      border-radius: 6px;
      background-color: #f6f6f6;
      padding: 16px;
      font-size: 14px;
      line-height: 24px;
      color: #000000;
    }
    .cta-section {
      margin-bottom: 32px;
      margin-top: 32px;
      text-align: center;
    }
    .cta-button {
      display: inline-block;
      padding: 12px 20px;
      background-color: #000000;
      color: #ffffff;
      text-decoration: none;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
    }
    .cta-button:hover {
      background-color: #333333;
    }
    .reply-text {
      font-size: 14px;
      line-height: 24px;
      color: #000000;
      margin-bottom: 24px;
    }
    .reply-text a {
      color: #0066cc;
      text-decoration: none;
    }
    .divider {
      margin: 26px 0;
      border: none;
      border-top: 1px solid #eaeaea;
      height: 0;
    }
    .footer {
      font-size: 12px;
      line-height: 24px;
      color: #666666;
    }
    .footer-name {
      color: #000000;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Logo -->
    <div class="logo-section">
      <img src="https://via.placeholder.com/160x25/000000/ffffff?text=CPT-SOFT" alt="CPT-SOFT" class="logo" />
    </div>

    <!-- Header -->
    <div class="header">
      <h1>Nuevo <strong>Mensaje de Contacto</strong></h1>
    </div>

    <!-- Intro -->
    <p class="intro-text">
      Has recibido un nuevo mensaje desde el formulario de contacto de tu sitio web.
    </p>

    <!-- Information Section -->
    <div class="info-section">
      <h2>Información del Contacto</h2>
      
      <div class="info-item">
        <p class="info-label">Nombre</p>
        <p class="info-value">${name}</p>
      </div>

      ${company ? `
      <div class="info-item">
        <p class="info-label">Compañía</p>
        <p class="info-value">${company}</p>
      </div>
      ` : ''}

      ${phone ? `
      <div class="info-item">
        <p class="info-label">Teléfono</p>
        <p class="info-value">
          <a href="tel:${phone}">${phone}</a>
        </p>
      </div>
      ` : ''}

      <div class="info-item">
        <p class="info-label">Email</p>
        <p class="info-value">
          <a href="mailto:${email}">${email}</a>
        </p>
      </div>

      <div class="info-item">
        <p class="info-label">Asunto</p>
        <p class="info-value">${subject}</p>
      </div>
    </div>

    <!-- Message -->
    <div class="message-section">
      <p class="message-label">Mensaje</p>
      <p class="message-content">${message}</p>
    </div>

    <!-- CTA Button -->
    <div class="cta-section">
      <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" class="cta-button">
        Responder por Email
      </a>
    </div>

    <p class="reply-text">
      o copia y pega este email en tu cliente de correo: 
      <a href="mailto:${email}">${email}</a>
    </p>

    <!-- Divider -->
    <hr class="divider" />

    <!-- Footer -->
    <p class="footer">
      Este mensaje fue enviado desde el formulario de contacto de 
      <span class="footer-name">CPT-SOFT</span>. Si necesitas más información,
      puedes contactarnos en 
      <a href="mailto:info@cpt-soft.com">info@cpt-soft.com</a>
      o llamar al <span class="footer-name">+507 399-2613</span>.
    </p>

    <p class="footer">
      <strong class="footer-name">CPT-SOFT</strong><br />
      Calle Samuel Lewis, Panama Business Center, Piso 16<br />
      Panamá
    </p>
  </div>
</body>
</html>
  `.trim();
};

export const carrerasEmailTemplate = (data: {
  nombre: string;
  email: string;
  telefono: string;
  mensaje?: string;
  cvFileName: string;
}): string => {
  const { nombre, email, telefono, mensaje, cvFileName } = data;

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f6f6f6;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border: 1px solid #eaeaea;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .logo-section {
      text-align: center;
      margin-bottom: 32px;
      padding-top: 16px;
    }
    .logo {
      max-width: 160px;
      height: auto;
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
      margin-top: 30px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 400;
      color: #000000;
    }
    .header strong {
      font-weight: 600;
    }
    .intro-text {
      font-size: 14px;
      line-height: 24px;
      color: #000000;
      margin-bottom: 24px;
    }
    .candidate-section {
      margin: 32px 0;
      border: 1px solid #eaeaea;
      border-radius: 6px;
      padding: 20px;
      background-color: #ffffff;
    }
    .candidate-name {
      margin: 0 0 16px 0;
      font-size: 18px;
      font-weight: 600;
      color: #000000;
    }
    .info-item {
      margin-bottom: 16px;
    }
    .info-label {
      margin: 0 0 8px 0;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #666666;
    }
    .info-value {
      margin: 0;
      font-size: 14px;
      color: #000000;
    }
    .info-value a {
      color: #0066cc;
      text-decoration: none;
    }
    .cover-letter-section {
      margin: 32px 0;
    }
    .cover-letter-label {
      margin: 0 0 12px 0;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #666666;
    }
    .cover-letter-content {
      margin: 0;
      white-space: pre-wrap;
      word-wrap: break-word;
      border: 1px solid #eaeaea;
      border-radius: 6px;
      background-color: #f6f6f6;
      padding: 16px;
      font-size: 14px;
      line-height: 24px;
      color: #000000;
    }
    .next-steps {
      margin: 32px 0;
      border: 1px solid #eaeaea;
      border-radius: 6px;
      background-color: #fafafa;
      padding: 16px;
    }
    .next-steps-title {
      margin: 0 0 12px 0;
      font-size: 14px;
      font-weight: 600;
      color: #000000;
    }
    .next-steps-item {
      margin: 0 0 8px 0;
      font-size: 14px;
      line-height: 24px;
      color: #666666;
    }
    .cta-section {
      margin-bottom: 32px;
      margin-top: 32px;
      text-align: center;
    }
    .cta-button {
      display: inline-block;
      padding: 12px 20px;
      background-color: #000000;
      color: #ffffff;
      text-decoration: none;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
    }
    .cta-button:hover {
      background-color: #333333;
    }
    .reply-text {
      font-size: 14px;
      line-height: 24px;
      color: #000000;
      margin-bottom: 24px;
    }
    .reply-text a {
      color: #0066cc;
      text-decoration: none;
    }
    .divider {
      margin: 26px 0;
      border: none;
      border-top: 1px solid #eaeaea;
      height: 0;
    }
    .footer {
      font-size: 12px;
      line-height: 24px;
      color: #666666;
    }
    .footer-name {
      color: #000000;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Logo -->
    <div class="logo-section">
      <img src="https://via.placeholder.com/160x25/000000/ffffff?text=CPT-SOFT" alt="CPT-SOFT" class="logo" />
    </div>

    <!-- Header -->
    <div class="header">
      <h1>Nueva <strong>Aplicación de Carrera</strong></h1>
    </div>

    <!-- Intro -->
    <p class="intro-text">
      Has recibido una nueva aplicación desde la página de Carreras de tu sitio web.
    </p>

    <!-- Candidate Information -->
    <div class="candidate-section">
      <p class="candidate-name">${nombre}</p>
      
      <div class="info-item">
        <p class="info-label">Email</p>
        <p class="info-value">
          <a href="mailto:${email}">${email}</a>
        </p>
      </div>

      <div class="info-item">
        <p class="info-label">Teléfono</p>
        <p class="info-value">
          <a href="tel:${telefono}">${telefono}</a>
        </p>
      </div>

      <div class="info-item">
        <p class="info-label">CV Adjunto</p>
        <p class="info-value">📄 ${cvFileName}</p>
      </div>
    </div>

    <!-- Cover Letter -->
    ${mensaje ? `
    <div class="cover-letter-section">
      <p class="cover-letter-label">Carta de Presentación</p>
      <p class="cover-letter-content">${mensaje}</p>
    </div>
    ` : ''}

    <!-- Next Steps -->
    <div class="next-steps">
      <p class="next-steps-title">✅ Próximos pasos</p>
      <p class="next-steps-item">1. Revisar el CV adjunto</p>
      <p class="next-steps-item">2. Evaluar el perfil del candidato</p>
      <p class="next-steps-item">3. Contactar para programar entrevista</p>
    </div>

    <!-- CTA Button -->
    <div class="cta-section">
      <a href="mailto:${email}?subject=Re: Aplicación de Carrera en CPT-SOFT" class="cta-button">
        Contactar Candidato
      </a>
    </div>

    <p class="reply-text">
      o copia y pega este email para contactar: 
      <a href="mailto:${email}">${email}</a>
    </p>

    <!-- Divider -->
    <hr class="divider" />

    <!-- Footer -->
    <p class="footer">
      Esta aplicación fue enviada desde el formulario de Carreras de 
      <span class="footer-name">CPT-SOFT</span>. Para más información sobre el proceso
      de selección, contacta a 
      <a href="mailto:info@cpt-soft.com">info@cpt-soft.com</a>.
    </p>

    <p class="footer">
      <strong class="footer-name">CPT-SOFT</strong><br />
      Calle Samuel Lewis, Panama Business Center, Piso 16<br />
      Tel: +507 399-2613 / +507 399-2614<br />
      Panamá
    </p>
  </div>
</body>
</html>
  `.trim();
};
