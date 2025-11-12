import { NextRequest, NextResponse } from 'next/server';
import { formatKnowledgeBase } from '@/lib/knowledge-base';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent';

export async function POST(request: NextRequest) {
  try {
    const { history } = await request.json();

    if (!history) {
      return NextResponse.json(
        { error: 'History is required' },
        { status: 400 }
      );
    }

    if (!GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY not configured');
      return NextResponse.json(
        { error: 'API Key not configured' },
        { status: 500 }
      );
    }

  console.log('Sending history to Gemini:', history);

    const knowledgeBaseContent = formatKnowledgeBase();

    // Detectar si hay conversación previa (contar mensajes de usuario)
    const userMessageCount = (history.match(/Usuario:/g) || []).length;
    const hasHistory = userMessageCount > 1;

    const systemPrompt = `Eres Atenea, la asistente de CPT-SOFT. Tu rol es ayudar a los usuarios a resolver dudas ÚNICAMENTE sobre los productos y servicios de CPT-SOFT.

TIENES ACCESO A TODA LA INFORMACIÓN SOBRE CPT-SOFT:

${knowledgeBaseContent}

INSTRUCCIONES IMPORTANTES:
- Solo responde preguntas relacionadas con CPT-SOFT, sus productos y servicios
- Usa la información de arriba para proporcionar respuestas precisas y detalladas
- Si te preguntan sobre otros temas, di amablemente que tu expertise es en CPT-SOFT
- Si un usuario pregunta algo que no está en la base de conocimiento, sugiere que contacten al equipo de ventas o soliciten una demo
- Sé amable, profesional y en español
- Proporciona respuestas claras y concisas
- Si el usuario pregunta por precios, ofrécele solicitar una demo para un presupuesto personalizado
${hasHistory ? '\n- NO repitas saludos. Continúa la conversación de forma natural, directa y sin presentaciones repetidas.\n- Sé conciso, responde solo lo que se pregunta.\n- Actúa como una persona natural, no como un chatbot.' : '\n- Si esta es la primera interacción, saluda brevemente y de forma amable.'}

CONVERSACIÓN ACTUAL:
${history}`;    // Reintentos para manejar errores temporales (503, 429, etc)
    const maxRetries = 3;
    let lastError: any = null;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [
                  {
                    text: systemPrompt,
                  },
                ],
              },
            ],
            generationConfig: {
              maxOutputTokens: 1024,
              temperature: 0.7,
              topP: 0.8,
              topK: 40,
            },
            safetySettings: [
              {
                category: 'HARM_CATEGORY_HATE_SPEECH',
                threshold: 'BLOCK_NONE',
              },
              {
                category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
                threshold: 'BLOCK_NONE',
              },
              {
                category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
                threshold: 'BLOCK_NONE',
              },
              {
                category: 'HARM_CATEGORY_HARASSMENT',
                threshold: 'BLOCK_NONE',
              },
            ],
          }),
        });

        console.log('Gemini API Response Status:', response.status);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Gemini API Error Status:', response.status);
          console.error('Gemini API Error Response:', errorText);

          // Si es error temporal (503, 429), reintentar
          if ((response.status === 503 || response.status === 429) && attempt < maxRetries - 1) {
            const delayMs = Math.pow(2, attempt) * 1000; // Espera exponencial: 1s, 2s, 4s
            console.log(`Reintentando en ${delayMs}ms... (intento ${attempt + 1}/${maxRetries})`);
            await new Promise(resolve => setTimeout(resolve, delayMs));
            continue;
          }

          // Parsear error
          try {
            const errorData = JSON.parse(errorText);
            return NextResponse.json(
              { error: errorData?.error?.message || 'Failed to get response from Gemini' },
              { status: response.status }
            );
          } catch {
            return NextResponse.json(
              { error: `Gemini API Error: ${errorText}` },
              { status: response.status }
            );
          }
        }

        const data = await response.json();
        console.log('Gemini API Response:', JSON.stringify(data).substring(0, 200));

        const reply =
          data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          data?.candidates?.[0]?.text ||
          'Lo siento, no pude generar una respuesta.';

        return NextResponse.json({ reply });
      } catch (error) {
        lastError = error;
        if (attempt < maxRetries - 1) {
          const delayMs = Math.pow(2, attempt) * 1000;
          console.log(`Error en intento ${attempt + 1}, reintentando en ${delayMs}ms...`);
          await new Promise(resolve => setTimeout(resolve, delayMs));
        }
      }
    }

    // Si llegamos aquí, todos los reintentos fallaron
    console.error('All retry attempts failed:', lastError);
    return NextResponse.json(
      { error: 'El servicio está temporalmente indisponible. Por favor intenta más tarde.' },
      { status: 503 }
    );
  } catch (error) {
    console.error('Chatbot API Error:', error);
    return NextResponse.json(
      { error: `Error: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}
