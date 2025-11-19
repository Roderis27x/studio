import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactoEmail } from '@/emails/emails/contacto-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, email, subject, message } = body;

    // Validaciones básicas
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    const emailHtml = await render(ContactoEmail({
      name,
      company,
      phone,
      email,
      subject,
      message,
    }));

    const data = await resend.emails.send({
      from: 'CPT-SOFT <onboarding@resend.dev>',
      to: 'rortega@cpt-soft.com',
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: emailHtml,
      replyTo: email,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Error en API de contacto:', error);
    return Response.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    );
  }
}
