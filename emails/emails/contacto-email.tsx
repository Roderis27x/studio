import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';

/**
 * Deseamos expresar nuestra satisfacción con el servicio brindado por CPT-SOFT como proveedor de
 * nuestro sistema ERP. Su plataforma nos ha permitido mejorar la organización interna y llevar un control más claro y eficiente de nuestras operaciones diarias.
 * También valoramos el acompañamiento que hemos recibido en el proceso de implementación y uso del sistema. Cuando hemos necesitado apoyo, hemos contado con orientación adecuada para resolver las situaciones que se han presentado.
 */

interface ContactoEmailProps {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

export const ContactoEmail = ({
    name = 'Juan Pérez',
    email = 'juan.perez@example.com',
    subject = 'Consulta sobre implementación de ERP',
    message = 'Buenos días, me gustaría conocer más sobre sus soluciones ERP y cómo pueden ayudar a mi empresa a optimizar sus procesos de gestión. Actualmente manejamos inventario, facturación y recursos humanos de forma separada y buscamos una solución integrada.',
}: ContactoEmailProps) => {
    const previewText = `Nuevo mensaje de ${name}: ${subject}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="mx-auto my-auto bg-white px-2 font-sans">
                    <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
                        {/* Logo */}
                        <Section className="mt-[32px]">
                            <Img
                                src={`${baseUrl}/static/cpt-soft-logo.svg`}
                                width="160"
                                height="25"
                                alt="CPT-SOFT"
                                className="mx-auto my-0"
                            />
                        </Section>

                        {/* Título */}
                        <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
                            Nuevo <strong>Mensaje de Contacto</strong>
                        </Heading>

                        {/* Intro */}
                        <Text className="text-[14px] leading-[24px] text-black">
                            Has recibido un nuevo mensaje desde el formulario de contacto de tu sitio web.
                        </Text>

                        {/* Información del Contacto */}
                        <Section className="my-[32px] rounded-md border border-solid border-[#eaeaea] p-[20px]">
                            <Text className="m-0 mb-[16px] text-[16px] font-semibold text-black">
                                Información del Contacto
                            </Text>

                            <Text className="m-0 mb-[8px] text-[12px] font-semibold uppercase tracking-wide text-[#666666]">
                                Nombre
                            </Text>
                            <Text className="m-0 mb-[16px] text-[14px] text-black">
                                {name}
                            </Text>

                            <Text className="m-0 mb-[8px] text-[12px] font-semibold uppercase tracking-wide text-[#666666]">
                                Email
                            </Text>
                            <Text className="m-0 mb-[16px]">
                                <Link
                                    href={`mailto:${email}`}
                                    className="text-[14px] text-blue-600 no-underline"
                                >
                                    {email}
                                </Link>
                            </Text>

                            <Text className="m-0 mb-[8px] text-[12px] font-semibold uppercase tracking-wide text-[#666666]">
                                Asunto
                            </Text>
                            <Text className="m-0 text-[14px] text-black">
                                {subject}
                            </Text>
                        </Section>

                        {/* Mensaje */}
                        <Section className="my-[32px]">
                            <Text className="m-0 mb-[12px] text-[12px] font-semibold uppercase tracking-wide text-[#666666]">
                                Mensaje
                            </Text>
                            <Text className="m-0 whitespace-pre-wrap rounded-md border border-solid border-[#eaeaea] bg-[#f6f6f6] p-[16px] text-[14px] leading-[24px] text-black">
                                {message}
                            </Text>
                        </Section>

                        {/* Botón CTA */}
                        <Section className="mb-[32px] mt-[32px] text-center">
                            <Button
                                className="rounded bg-[#000000] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
                                href={`mailto:${email}?subject=Re: ${subject}`}
                            >
                                Responder por Email
                            </Button>
                        </Section>

                        <Text className="text-[14px] leading-[24px] text-black">
                            o copia y pega este email en tu cliente de correo:{' '}
                            <Link href={`mailto:${email}`} className="text-blue-600 no-underline">
                                {email}
                            </Link>
                        </Text>

                        {/* Divider */}
                        <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />

                        {/* Footer */}
                        <Text className="text-[12px] leading-[24px] text-[#666666]">
                            Este mensaje fue enviado desde el formulario de contacto de{' '}
                            <span className="text-black">CPT-SOFT</span>. Si necesitas más información,
                            puedes contactarnos en{' '}
                            <Link href="mailto:info@cpt-soft.com" className="text-blue-600 no-underline">
                                info@cpt-soft.com
                            </Link>{' '}
                            o llamar al{' '}
                            <span className="text-black">+507 399-2613</span>.
                        </Text>

                        <Text className="text-[12px] leading-[24px] text-[#666666]">
                            <strong className="text-black">CPT-SOFT</strong>
                            <br />
                            Calle Samuel Lewis, Panama Business Center, Piso 16
                            <br />
                            Panamá
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

ContactoEmail.PreviewProps = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    subject: 'Consulta sobre implementación de ERP',
    message: 'Buenos días, me gustaría conocer más sobre sus soluciones ERP y cómo pueden ayudar a mi empresa a optimizar sus procesos de gestión. Actualmente manejamos inventario, facturación y recursos humanos de forma separada y buscamos una solución integrada. ¿Podrían agendar una reunión para discutir nuestras necesidades?',
} as ContactoEmailProps;

export default ContactoEmail;
