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

interface CarrerasEmailProps {
    nombre?: string;
    email?: string;
    telefono?: string;
    mensaje?: string;
    cvFileName?: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

export const CarrerasEmail = ({
    nombre = 'María González',
    email = 'maria.gonzalez@example.com',
    telefono = '+507 1234-5678',
    mensaje = 'Soy desarrolladora full-stack con 5 años de experiencia en tecnologías web modernas. Me apasiona crear soluciones innovadoras y me gustaría formar parte de su equipo.',
    cvFileName = 'CV_Maria_González.pdf',
}: CarrerasEmailProps) => {
    const previewText = `Nueva aplicación de carrera: ${nombre}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="mx-auto my-auto bg-white px-2 font-sans">
                    <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
                        {/* Logo */}
                        <Section className="mt-[32px]">
                            <div style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, Helvetica, sans-serif' }}>
                                <span style={{ color: '#1e293b' }}>CPT</span>
                                <span style={{ color: '#64748b' }}>SOFT</span>
                            </div>
                        </Section>

                        {/* Título */}
                        <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
                            Nueva <strong>Aplicación de Carrera</strong>
                        </Heading>

                        {/* Intro */}
                        <Text className="text-[14px] leading-[24px] text-black">
                            Has recibido una nueva aplicación desde la página de Carreras de tu sitio web.
                        </Text>

                        {/* Información del Candidato */}
                        <Section className="my-[32px] rounded-md border border-solid border-[#eaeaea] p-[20px]">
                            <Text className="m-0 mb-[16px] text-[18px] font-semibold text-black">
                                {nombre}
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
                                Teléfono
                            </Text>
                            <Text className="m-0 mb-[16px]">
                                <Link
                                    href={`tel:${telefono}`}
                                    className="text-[14px] text-blue-600 no-underline"
                                >
                                    {telefono}
                                </Link>
                            </Text>

                            <Text className="m-0 mb-[8px] text-[12px] font-semibold uppercase tracking-wide text-[#666666]">
                                CV Adjunto
                            </Text>
                            <Text className="m-0 text-[14px] text-black">
                                📄 {cvFileName}
                            </Text>
                        </Section>

                        {/* Carta de Presentación */}
                        {mensaje && (
                            <Section className="my-[32px]">
                                <Text className="m-0 mb-[12px] text-[12px] font-semibold uppercase tracking-wide text-[#666666]">
                                    Carta de Presentación
                                </Text>
                                <Text className="m-0 whitespace-pre-wrap rounded-md border border-solid border-[#eaeaea] bg-[#f6f6f6] p-[16px] text-[14px] leading-[24px] text-black">
                                    {mensaje}
                                </Text>
                            </Section>
                        )}

                        {/* Próximos Pasos */}
                        <Section className="my-[32px] rounded-md border border-solid border-[#eaeaea] bg-[#fafafa] p-[16px]">
                            <Text className="m-0 mb-[12px] text-[14px] font-semibold text-black">
                                ✅ Próximos pasos
                            </Text>
                            <Text className="m-0 mb-[8px] text-[14px] leading-[24px] text-[#666666]">
                                1. Revisar el CV adjunto
                            </Text>
                            <Text className="m-0 mb-[8px] text-[14px] leading-[24px] text-[#666666]">
                                2. Evaluar el perfil del candidato
                            </Text>
                            <Text className="m-0 text-[14px] leading-[24px] text-[#666666]">
                                3. Contactar para programar entrevista
                            </Text>
                        </Section>

                        {/* Botón CTA */}
                        <Section className="mb-[32px] mt-[32px] text-center">
                            <Button
                                className="rounded bg-[#000000] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
                                href={`mailto:${email}?subject=Re: Aplicación de Carrera en CPT-SOFT`}
                            >
                                Contactar Candidato
                            </Button>
                        </Section>

                        <Text className="text-[14px] leading-[24px] text-black">
                            o copia y pega este email para contactar:{' '}
                            <Link href={`mailto:${email}`} className="text-blue-600 no-underline">
                                {email}
                            </Link>
                        </Text>

                        {/* Divider */}
                        <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />

                        {/* Footer */}
                        <Text className="text-[12px] leading-[24px] text-[#666666]">
                            Esta aplicación fue enviada desde el formulario de Carreras de{' '}
                            <span className="text-black">CPT-SOFT</span>. Para más información sobre el proceso
                            de selección, contacta a{' '}
                            <Link href="mailto:info@cpt-soft.com" className="text-blue-600 no-underline">
                                info@cpt-soft.com
                            </Link>
                            .
                        </Text>

                        <Text className="text-[12px] leading-[24px] text-[#666666]">
                            <strong className="text-black">CPT-SOFT</strong>
                            <br />
                            Calle Samuel Lewis, Panama Business Center, Piso 16
                            <br />
                            Tel: +507 399-2613 / +507 399-2614
                            <br />
                            Panamá
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

CarrerasEmail.PreviewProps = {
    nombre: 'María González',
    email: 'maria.gonzalez@example.com',
    telefono: '+507 1234-5678',
    mensaje: 'Soy desarrolladora full-stack con 5 años de experiencia en tecnologías web modernas. Me apasiona crear soluciones innovadoras y me gustaría formar parte de su equipo. He trabajado con React, Node.js, TypeScript y bases de datos SQL/NoSQL. Estoy buscando nuevos desafíos donde pueda aportar mi experiencia y seguir creciendo profesionalmente.',
    cvFileName: 'CV_Maria_González.pdf',
} as CarrerasEmailProps;

export default CarrerasEmail;
