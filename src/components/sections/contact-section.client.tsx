'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useChatbot } from '@/context/ChatbotContext';

export function ContactSectionClient() {
  const { openChatbot } = useChatbot();

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button
        onClick={() => openChatbot()}
        size="lg"
        className="bg-white text-primary hover:bg-slate-100 px-8 py-6 text-lg h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Ponerse en Contacto
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
}
