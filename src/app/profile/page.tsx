'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/youthwork/Header';
import { Footer } from '@/components/youthwork/Footer';
import { mockWorkers, mockEmployers, mockJobs } from '@/lib/mock-data';
import { Star, MapPin, Briefcase, CheckCircle, Mail, Phone, User } from 'lucide-react';

type UserType = 'worker' | 'employer';

export default function ProfilePage() {
  const [userType, setUserType] = useState<UserType>('worker');
  const [isEditing, setIsEditing] = useState(false);

  // For demo, using first worker/employer
  const currentWorker = mockWorkers[0];
  const currentEmployer = mockEmployers[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container-youthwork max-w-5xl">
          {/* User Type Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border border-border p-1 bg-white shadow-sm">
              <button
                onClick={() => setUserType('worker')}
                className={`px-6 py-2 rounded-md font-semibold text-sm transition-all ${
                  userType === 'worker'
                    ? 'bg-primary text-white shadow-button'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Worker Profile
              </button>
              <button
                onClick={() => setUserType('employer')}
                className={`px-6 py-2 rounded-md font-semibold text-sm transition-all ${
                  userType === 'employer'
                    ? 'bg-primary text-white shadow-button'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Employer Profile
              </button>
            </div>
          </div>

          {/* Worker Profile */}
          {userType === 'worker' && (
            <div className="space-y-6">
              {/* Profile Header Card */}
              <div className="card-youthwork hover:shadow-card">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar */}
                  <div className="flex flex-col items-center md:items-start">
                    <div className="relative w-32 h-32 mb-4">
                      <Image
                        src={currentWorker.avatar}
                        alt={currentWorker.name}
                        fill
                        className="avatar-youthwork"
                        style={{ width: '128px', height: '128px' }}
                      />
                      {isEditing && (
                        <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-button">
                          <User className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{currentWorker.rating}</span>
                      <span className="text-muted-foreground">
                        ({currentWorker.completedJobs} jobs)
                      </span>
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold mb-2">{currentWorker.name}</h1>
                        <p className="text-muted-foreground mb-1">Age: {currentWorker.age}</p>
                      </div>
                      <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="btn-secondary"
                      >
                        {isEditing ? 'Save' : 'Edit Profile'}
                      </button>
                    </div>

                    <p className="text-foreground mb-4">{currentWorker.bio}</p>

                    {/* Skills */}
                    <div className="mb-4">
                      <h3 className="font-semibold text-sm mb-2">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {currentWorker.skills.map((skill) => (
                          <span
                            key={skill}
                            className="badge-distance bg-accent text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-primary" />
                        <span>{currentWorker.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-primary" />
                        <span>{currentWorker.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* My Applications */}
              <div className="card-youthwork hover:shadow-card">
                <h2 className="text-2xl font-bold mb-6">My Applications</h2>
                <div className="space-y-4">
                  {mockJobs.slice(0, 3).map((job) => (
                    <div
                      key={job.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={job.employerAvatar}
                          alt={job.employerName}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        <div>
                          <h4 className="font-semibold">{job.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {job.employerName} • ${job.hourlyRate}/hr
                          </p>
                        </div>
                      </div>
                      <span className="badge-distance bg-accent text-primary">
                        Pending
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Employer Profile */}
          {userType === 'employer' && (
            <div className="space-y-6">
              {/* Profile Header Card */}
              <div className="card-youthwork hover:shadow-card">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar */}
                  <div className="flex flex-col items-center md:items-start">
                    <div className="relative w-32 h-32 mb-4">
                      <Image
                        src={currentEmployer.avatar}
                        alt={currentEmployer.name}
                        fill
                        className="avatar-youthwork"
                        style={{ width: '128px', height: '128px' }}
                      />
                      {currentEmployer.verified && (
                        <div className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-button">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{currentEmployer.rating}</span>
                      <span className="text-muted-foreground">
                        ({currentEmployer.jobsPosted} jobs posted)
                      </span>
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
                          {currentEmployer.name}
                          {currentEmployer.verified && (
                            <CheckCircle className="w-6 h-6 text-primary" />
                          )}
                        </h1>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>{currentEmployer.address}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="btn-secondary"
                      >
                        {isEditing ? 'Save' : 'Edit Profile'}
                      </button>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <span className="font-semibold">
                          {currentEmployer.jobsPosted} Jobs Posted
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* My Job Posts */}
              <div className="card-youthwork hover:shadow-card">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">My Job Posts</h2>
                  <button className="btn-primary">Post New Job</button>
                </div>
                <div className="space-y-4">
                  {mockJobs.slice(0, 3).map((job) => (
                    <div
                      key={job.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary transition-colors"
                    >
                      <div>
                        <h4 className="font-semibold">{job.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          ${job.hourlyRate}/hr • {job.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="badge-distance bg-secondary/10 text-secondary">
                          3 Applicants
                        </span>
                        <button className="btn-secondary text-xs py-2 px-4">
                          View Applicants
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
