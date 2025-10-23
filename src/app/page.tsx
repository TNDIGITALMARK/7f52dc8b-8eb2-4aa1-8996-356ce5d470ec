'use client';

import Image from 'next/image';
import { Header } from '@/components/youthwork/Header';
import { Footer } from '@/components/youthwork/Footer';
import { JobCard } from '@/components/youthwork/JobCard';
import { CategoryIcon } from '@/components/youthwork/CategoryIcon';
import { NotificationCard } from '@/components/youthwork/NotificationCard';
import { mockJobs } from '@/lib/mock-data';
import { Flower2, Sparkles, Paintbrush, Armchair } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-hero-gradient py-12 md:py-16 relative overflow-hidden">
        <div className="container-youthwork">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Hero Text */}
            <div className="text-white z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Earn Cash.
                <br />
                Learn Skills. Your
                <br />
                Community Awaits.
              </h1>
              <button className="btn-primary mt-6">
                Get Started
              </button>
            </div>

            {/* Hero Illustration */}
            <div className="relative h-64 md:h-80 flex items-center justify-center">
              <Image
                src="/generated/hero-character.png"
                alt="Young worker with paint roller"
                width={300}
                height={300}
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Notification Card - Positioned absolutely on larger screens */}
        <div className="hidden lg:block absolute top-8 right-8 z-20">
          <NotificationCard
            title="Notification"
            messages={[
              { text: 'New job near you!', type: 'info' },
              { text: 'You got the job', type: 'success' },
            ]}
          />
        </div>
      </section>

      {/* Job Cards Section */}
      <section className="py-12 flex-1">
        <div className="container-youthwork">
          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {mockJobs.slice(0, 3).map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                employerName={job.employerName}
                employerAvatar={job.employerAvatar}
                hourlyRate={job.hourlyRate}
                distance={job.distance}
                duration={job.duration}
                skills={job.skills}
              />
            ))}
          </div>

          {/* Browse by Category Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <CategoryIcon icon={Flower2} label="Gardening" />
              <CategoryIcon icon={Sparkles} label="Cleaning" />
              <CategoryIcon icon={Paintbrush} label="Painting" />
              <CategoryIcon icon={Armchair} label="Moving" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}