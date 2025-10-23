'use client';

import { Check, ThumbsUp } from 'lucide-react';

interface NotificationCardProps {
  title?: string;
  messages: {
    text: string;
    type: 'info' | 'success';
  }[];
}

export function NotificationCard({
  title = 'Notification',
  messages,
}: NotificationCardProps) {
  return (
    <div className="notification-card">
      <h4 className="font-semibold text-base mb-4 text-foreground">{title}</h4>
      <div className="space-y-3">
        {messages.map((message, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`flex-shrink-0 ${message.type === 'success' ? 'text-primary' : 'text-primary'}`}>
              {message.type === 'success' ? (
                <Check className="w-5 h-5" />
              ) : (
                <Check className="w-5 h-5" />
              )}
            </div>
            <p className="text-sm text-foreground">{message.text}</p>
          </div>
        ))}
        <div className="mt-4 pt-4 border-t border-border">
          <button className="flex items-center justify-center gap-2 text-primary hover:text-primary-dark transition-colors mx-auto">
            <ThumbsUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
