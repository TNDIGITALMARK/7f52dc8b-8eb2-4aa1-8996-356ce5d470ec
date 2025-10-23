'use client';

import Link from 'next/link';
import { Twitter, MessageCircle, MessageSquare } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark-navy h-[60px] mt-auto">
      <div className="container-youthwork h-full flex items-center justify-between">
        {/* Footer links */}
        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-white/80 hover:text-white transition-colors text-sm"
          >
            About Us
          </Link>
          <Link
            href="/help"
            className="text-white/80 hover:text-white transition-colors text-sm"
          >
            Help Center
          </Link>
          <Link
            href="/privacy"
            className="text-white/80 hover:text-white transition-colors text-sm"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-white/80 hover:text-white transition-colors text-sm"
          >
            Terms
          </Link>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Medium"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Discord"
          >
            <MessageSquare className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
