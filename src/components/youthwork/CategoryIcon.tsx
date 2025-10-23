'use client';

import { LucideIcon } from 'lucide-react';

interface CategoryIconProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

export function CategoryIcon({ icon: Icon, label, onClick }: CategoryIconProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-3 group cursor-pointer"
    >
      <div className="category-icon-wrapper">
        <Icon className="w-8 h-8 text-primary" strokeWidth={2} />
      </div>
      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
        {label}
      </span>
    </button>
  );
}
