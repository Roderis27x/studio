'use client';

import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { MessageCircle, Send, X, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { DatePicker } from '@/components/ui/date-picker';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useChatbot } from '@/context/ChatbotContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'demo-confirmation';
  data?: { nombre?: string; correo?: string; empresa?: string; celular?: string; fecha?: string };
}

const Chatbot: React.FC = () => {
  const { isOpen, openChatbot, closeChatbot, toggleChatbot } = useChatbot();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy Atenea, la asistente de CPT-SOFT. ¿Cómo puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Estados para el flujo de demo
  const [demoStep, setDemoStep] = useState<null | number>(null);
  const [demoData, setDemoData] = useState<{ nombre?: string; correo?: string; empresa?: string; celular?: string; fecha?: string }>({});
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const scrollToBottom = () => {
    // Intentar scroll múltiples veces para asegurar que funciona
    const attemptScroll = () => {
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      }
    };

    // Intentar inmediatamente
    attemptScroll();
    
    // Intentar con requestAnimationFrame
    requestAnimationFrame(attemptScroll);
    
    // Intentar con pequeño delay
    setTimeout(attemptScroll, 50);
    setTimeout(attemptScroll, 100);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Ejecutar scroll cuando el chat se abre
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // FLUJO DE SOLICITUD DE DEMO
    // Si estamos en el flujo de demo, pedir datos uno por uno
    if (demoStep !== null) {
      if (demoStep === 0) {
        setDemoData((prev) => ({ ...prev, nombre: inputValue }));
        setDemoStep(1);
        setMessages((prev) => [...prev, {
          id: (Date.now() + 2).toString(),
          text: '¿Cuál es su correo electrónico?',
          sender: 'bot',
          timestamp: new Date(),
        }]);
      } else if (demoStep === 1) {
        // Validar correo
        const correoValido = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(inputValue);
        if (!correoValido) {
          setMessages((prev) => [...prev, {
            id: (Date.now() + 2).toString(),
            text: 'Por favor ingresa un correo electrónico válido.',
            sender: 'bot',
            timestamp: new Date(),
          }]);
          return setInputValue('');
        }
        setDemoData((prev) => ({ ...prev, correo: inputValue }));
        setDemoStep(2);
        setMessages((prev) => [...prev, {
          id: (Date.now() + 3).toString(),
          text: '¿Cuál es el nombre de su empresa?',
          sender: 'bot',
          timestamp: new Date(),
        }]);
      } else if (demoStep === 2) {
        setDemoData((prev) => ({ ...prev, empresa: inputValue }));
        setDemoStep(3);
        setMessages((prev) => [...prev, {
          id: (Date.now() + 4).toString(),
          text: '¿Cuál es su número celular?',
          sender: 'bot',
          timestamp: new Date(),
        }]);
      } else if (demoStep === 3) {
        // Validar número celular (solo dígitos, al menos 8 caracteres)
        const celularValido = /^\d{8,}$/.test(inputValue.replace(/[\s\-\+\(\)]/g, ''));
        if (!celularValido) {
          setMessages((prev) => [...prev, {
            id: (Date.now() + 2).toString(),
            text: 'Por favor ingresa un número celular válido.',
            sender: 'bot',
            timestamp: new Date(),
          }]);
          return setInputValue('');
        }
        setDemoData((prev) => ({ ...prev, celular: inputValue }));
        setDemoStep(4);
        setSelectedDate(undefined);
        setMessages((prev) => [...prev, {
          id: (Date.now() + 5).toString(),
          text: '¿Qué fecha prefiere para la demo?',
          sender: 'bot',
          timestamp: new Date(),
        }]);
      } else if (demoStep === 4) {
        setDemoData((prev) => ({ ...prev, fecha: inputValue }));
        setDemoStep(null);
        setMessages((prev) => [...prev, {
          id: (Date.now() + 6).toString(),
          text: `¡Gracias! Su demo ha sido agendada.\n\nDatos recibidos:\n- Nombre: ${demoData.nombre}\n- Correo: ${demoData.correo}\n- Empresa: ${demoData.empresa}\n- Celular: ${demoData.celular}\n- Fecha: ${inputValue}\n\nPronto nos pondremos en contacto para confirmar la cita.`,
          sender: 'bot',
          timestamp: new Date(),
        }]);
        setDemoData({});
        setSelectedDate(undefined);
      }
      setInputValue('');
      return;
    }

    // Detectar intención de demo
    const demoRegex = /(solicitar demo|quiero una demo|agendar demo|demo|ver demo)/i;
    if (demoRegex.test(inputValue)) {
      setDemoStep(0);
      setMessages((prev) => [...prev, {
        id: (Date.now() + 2).toString(),
        text: '¡Perfecto! Para agendar su demo, ¿puede decirme su nombre?',
        sender: 'bot',
        timestamp: new Date(),
      }]);
      setInputValue('');
      return;
    }

    // Si no es demo, continuar con el flujo normal
    // Serializar todo el historial (sin el saludo inicial)
    const conversationHistory = [...messages.slice(1), userMessage]
      .map((msg) => `${msg.sender === 'user' ? 'Usuario' : 'Atenea'}: ${msg.text}`)
      .join('\n');

    setInputValue('');
    setIsLoading(true);

    // Get bot response from API
    try {
      const botReply = await getBotResponse(conversationHistory);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botReply,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting bot response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Lo siento, hubo un error. Por favor intenta de nuevo.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const getBotResponse = async (userInput: string): Promise<string> => {
    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ history: userInput }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      return data.reply || 'Lo siento, no pude generar una respuesta.';
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      return 'Lo siento, hubo un error al conectar con el servicio. Por favor, intenta de nuevo.';
    }
  };

  const handleDateSelect = (date: Date) => {
    // Formatear fecha en español y hora en 12h
    const dateStr = format(date, 'dd/MM/yyyy', { locale: es });
    const hours24 = date.getHours();
    const hours12 = hours24 % 12 || 12;
    const period = hours24 >= 12 ? 'PM' : 'AM';
    const formattedDate = `${dateStr} - ${hours12.toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')} ${period}`;
    
    setSelectedDate(date);
    setDemoData((prev) => ({ ...prev, fecha: formattedDate }));
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: formattedDate,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    
    // Confirmar cita con mensaje moderno
    setDemoStep(null);
    const confirmationData = {
      nombre: demoData.nombre,
      correo: demoData.correo,
      empresa: demoData.empresa,
      celular: demoData.celular,
      fecha: formattedDate,
    };
    
    setMessages((prev) => [...prev, {
      id: (Date.now() + 1).toString(),
      text: `¡Gracias! Su demo ha sido agendada.`,
      sender: 'bot',
      timestamp: new Date(),
      type: 'demo-confirmation',
      data: confirmationData,
    }]);
    setDemoData({});
    setSelectedDate(undefined);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-28 right-4 left-4 md:left-auto md:bottom-24 md:right-6 md:w-96 h-[80vh] md:h-auto md:max-h-[600px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden pointer-events-auto"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Asistente</h3>
                  <p className="text-xs text-white/80">Disponible 24/7</p>
                </div>
              </div>
              <button
                onClick={() => closeChatbot()}
                className="hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Container */}
            <div 
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-50 to-white scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-slate-100"
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.type === 'demo-confirmation' && message.data ? (
                    // Mensaje de confirmación de demo con Card de shadcn
                    <div className="w-full max-w-sm">
                      <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                        <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg pb-4">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6" />
                            <div>
                              <h3 className="font-bold text-base">¡Demo Agendada!</h3>
                              <p className="text-xs text-white/80">Confirmación de cita</p>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-3 pt-4">
                          {/* Nombre */}
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold flex-shrink-0 mt-1">
                              👤
                            </div>
                            <div className="flex-1">
                              <p className="text-xs text-slate-500 font-medium">Nombre</p>
                              <p className="text-sm font-semibold text-slate-900">{message.data.nombre}</p>
                            </div>
                          </div>

                          {/* Correo */}
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-bold flex-shrink-0 mt-1">
                              ✉
                            </div>
                            <div className="flex-1">
                              <p className="text-xs text-slate-500 font-medium">Correo</p>
                              <p className="text-sm font-semibold text-slate-900">{message.data.correo}</p>
                            </div>
                          </div>

                          {/* Empresa */}
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 text-xs font-bold flex-shrink-0 mt-1">
                              🏢
                            </div>
                            <div className="flex-1">
                              <p className="text-xs text-slate-500 font-medium">Empresa</p>
                              <p className="text-sm font-semibold text-slate-900">{message.data.empresa}</p>
                            </div>
                          </div>

                          {/* Celular */}
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 text-xs font-bold flex-shrink-0 mt-1">
                              📱
                            </div>
                            <div className="flex-1">
                              <p className="text-xs text-slate-500 font-medium">Celular</p>
                              <p className="text-sm font-semibold text-slate-900">{message.data.celular}</p>
                            </div>
                          </div>

                          {/* Fecha y Hora */}
                          <div className="flex items-start gap-3 pt-2 border-t border-green-200">
                            <div className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold flex-shrink-0 mt-1">
                              🕐
                            </div>
                            <div className="flex-1">
                              <p className="text-xs text-slate-500 font-medium">Fecha y Hora</p>
                              <p className="text-sm font-bold text-green-600">{message.data.fecha}</p>
                            </div>
                          </div>
                        </CardContent>

                        <CardFooter className="border-t border-green-200 bg-white pt-3 pb-3 rounded-b-lg">
                          <p className="text-xs text-slate-600 text-center w-full">
                            Pronto te contactaremos para confirmar la cita
                          </p>
                        </CardFooter>
                      </Card>
                    </div>
                  ) : (
                    // Mensaje normal
                    <div
                      className={`max-w-xs px-4 py-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-primary text-white rounded-br-none'
                          : 'bg-slate-100 text-slate-900 rounded-bl-none'
                      } shadow-sm`}
                    >
                      {message.sender === 'bot' ? (
                        <div className="text-sm leading-relaxed">
                          <ReactMarkdown>{message.text}</ReactMarkdown>
                        </div>
                      ) : (
                        <p className="text-sm leading-relaxed">{message.text}</p>
                      )}
                      <span className={`text-xs mt-1 block ${message.sender === 'user' ? 'text-white/70' : 'text-slate-500'}`}>
                        {message.timestamp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-slate-100 text-slate-900 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Escribiendo...</span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-slate-200 p-4 bg-white">
              {demoStep === 4 ? (
                <div className="w-full">
                  <DatePicker 
                    value={selectedDate}
                    onChange={handleDateSelect}
                    placeholder="Selecciona una fecha"
                    disabled={(date) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return date < today;
                    }}
                  />
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Escribe tu mensaje..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isLoading}
                    className="rounded-full border-slate-300"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className="aspect-square w-10 h-10 p-0 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => toggleChatbot()}
        className="bg-gradient-to-r from-primary to-accent text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center border-4 border-white hover:shadow-3xl transition-all duration-300 pointer-events-auto"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default Chatbot;
