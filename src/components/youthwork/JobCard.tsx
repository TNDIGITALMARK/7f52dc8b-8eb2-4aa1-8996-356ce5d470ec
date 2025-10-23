'use client';

import Image from 'next/image';
import { MapPin, Clock } from 'lucide-react';

interface JobCardProps {
  id: string;
  title: string;
  employerName: string;
  employerAvatar: string;
  hourlyRate: number;
  distance: string;
  duration?: string;
  skills?: string[];
}

export function JobCard({
  title,
  employerName,
  employerAvatar,
  hourlyRate,
  distance,
  duration,
  skills,
}: JobCardProps) {
  return (
    <div className="card-youthwork group cursor-pointer">
      {/* Employer avatar */}
      <div className="flex flex-col items-center mb-4">
        <div className="relative w-20 h-20 mb-3">
          <Image
            src={employerAvatar}
            alt={employerName}
            fill
            className="avatar-youthwork"
          />
        </div>
        <h3 className="font-semibold text-base text-foreground">{employerName}</h3>
      </div>

      {/* Hourly rate - prominent */}
      <div className="text-center mb-3">
        <div className="badge-price">${hourlyRate}/hr</div>
      </div>

      {/* Job title */}
      <h4 className="text-center font-semibold text-sm text-foreground mb-3">
        {title}
      </h4>

      {/* Distance badge */}
      <div className="flex items-center justify-center gap-1 mb-4">
        <MapPin className="w-3 h-3 text-muted-foreground" />
        <span className="badge-distance">{distance}</span>
      </div>

      {/* Duration if provided */}
      {duration && (
        <div className="flex items-center justify-center gap-1 mb-4 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
      )}

      {/* Skills if provided */}
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="badge-distance text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Apply button */}
      <button className="btn-primary w-full">
        Apply
      </button>
    </div>
  );
}
