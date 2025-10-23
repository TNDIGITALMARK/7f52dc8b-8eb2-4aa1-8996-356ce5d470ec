'use client';

import { Header } from '@/components/youthwork/Header';
import { Footer } from '@/components/youthwork/Footer';
import { MessageCircle } from 'lucide-react';

export default function MessagesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container-youthwork max-w-4xl">
          <div className="text-center">
            <MessageCircle className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-3xl font-bold mb-4">Messages</h1>
            <p className="text-muted-foreground mb-8">
              Connect with employers and workers directly
            </p>
            <div className="card-youthwork hover:shadow-card text-center py-12">
              <p className="text-lg text-muted-foreground">
                No messages yet. Apply to jobs to start conversations!
              </p>
              <button className="btn-primary mt-6">
                Browse Jobs
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
