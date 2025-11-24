import { Resend } from 'resend';
import { CarrerasEmail } from '@/emails/emails/carreras-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const nombre = formData.get('nombre') as string;
    const email = formData.get('email') as string;
    const telefono = formData.get('telefono') as string;
    const mensaje = formData.get('mensaje') as string;
    const cv = formData.get('cv') as File;

    // Validaciones básicas
    if (!nombre || !email || !telefono || !cv) {
      return Response.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Validar tipo de archivo
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(cv.type)) {
      return Response.json(
        { error: 'El CV debe ser PDF o DOC/DOCX' },
        { status: 400 }
      );
    }

    // Validar tamaño (max 5MB)
    if (cv.size > 5 * 1024 * 1024) {
      return Response.json(
        { error: 'El archivo no debe superar 5MB' },
        { status: 400 }
      );
    }

    // Convertir CV a Buffer
    const cvBuffer = await cv.arrayBuffer();

    const data = await resend.emails.send({
      from: 'CPT-SOFT <onboarding@resend.dev>',
      to: ['info@cpt-soft.com', 'ventas@cpt-soft.com'],
      subject: `Nueva aplicación de carrera: ${nombre}`,
      react: CarrerasEmail({
        nombre,
        email,
        telefono,
        mensaje,
        cvFileName: cv.name,
      }),
      attachments: [
        {
          filename: cv.name,
          content: Buffer.from(cvBuffer),
        },
      ],
      replyTo: email,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Error en API de carreras:', error);
    return Response.json(
      { error: 'Error al enviar la aplicación' },
      { status: 500 }
    );
  }
}
