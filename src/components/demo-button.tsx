'use client';

import { useChatbot } from '@/context/ChatbotContext';
import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface DemoButttonProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'secondary';
  className?: string;
}

export function DemoButton({ children, size = 'lg', variant = 'default', className }: DemoButttonProps) {
  const { openChatbot } = useChatbot();

  return (
    <Button
      onClick={() => openChatbot()}
      size={size}
      variant={variant}
      className={className}
    >
      {children}
    </Button>
  );
}
