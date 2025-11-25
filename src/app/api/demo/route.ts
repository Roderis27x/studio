import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactoEmail } from '@/emails/emails/contacto-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nombre, correo, empresa, celular } = body;

        // Validaciones básicas
        if (!nombre || !correo || !celular) {
            return Response.json(
                { error: 'Faltan campos requeridos' },
                { status: 400 }
            );
        }

        const emailHtml = await render(ContactoEmail({
            name: nombre,
            company: empresa || 'No especificada',
            phone: celular,
            email: correo,
            subject: 'Solicitud de Demo desde Chatbot',
            message: 'El usuario solicitó una demo a través del asistente virtual.',
        }));

        const data = await resend.emails.send({
            from: 'CPT-SOFT <onboarding@resend.dev>',
            to: ['cpt-crm@cpt-soft.com'],
            subject: `Solicitud de Demo: ${nombre}`,
            html: emailHtml,
            replyTo: correo,
        });

        return Response.json({ success: true, data });
    } catch (error) {
        console.error('Error en API de demo:', error);
        return Response.json(
            { error: 'Error al enviar el email' },
            { status: 500 }
        );
    }
}
