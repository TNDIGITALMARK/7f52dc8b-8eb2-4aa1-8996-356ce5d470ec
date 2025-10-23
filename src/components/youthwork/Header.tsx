'use client';

import Link from 'next/link';
import { User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-dark-navy h-[70px] sticky top-0 z-50">
      <div className="container-youthwork h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <span className="text-white font-bold text-xl">Taskify</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-white/90 hover:text-white transition-colors font-medium text-sm"
          >
            Find Jobs
          </Link>
          <Link
            href="/post-job"
            className="text-white/90 hover:text-white transition-colors font-medium text-sm"
          >
            Post a Job
          </Link>
          <Link
            href="/messages"
            className="text-white/90 hover:text-white transition-colors font-medium text-sm"
          >
            Messages
          </Link>
          <Link
            href="/profile"
            className="text-white/90 hover:text-white transition-colors font-medium text-sm flex items-center gap-2"
          >
            <User className="w-5 h-5" />
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
