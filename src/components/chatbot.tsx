'use client';

import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { MessageCircle, Send, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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

    // Serializar todo el historial (sin el saludo inicial)
    const conversationHistory = [...messages.slice(1), userMessage]
      .map((msg) => `${msg.sender === 'user' ? 'Usuario' : 'Atenea'}: ${msg.text}`)
      .join('\n');

    setMessages((prev) => [...prev, userMessage]);
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

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
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
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Container */}
            <div 
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto max-h-96 p-4 space-y-4 bg-gradient-to-b from-slate-50 to-white scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-slate-100"
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-primary to-accent text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center border-4 border-white hover:shadow-3xl transition-all duration-300"
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
