'use client';

import { useState } from 'react';
import { Header } from '@/components/youthwork/Header';
import { Footer } from '@/components/youthwork/Footer';
import { Upload, DollarSign, Clock, MapPin } from 'lucide-react';

export default function PostJobPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    hourlyRate: '',
    estimatedHours: '',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job posted:', formData);
    alert('Job posted successfully! (This is a demo)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container-youthwork max-w-3xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Post a Job</h1>
            <p className="text-lg text-muted-foreground">
              Find reliable young workers in your neighborhood
            </p>
          </div>

          {/* Job Posting Form */}
          <div className="card-youthwork hover:shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Job Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-semibold mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Lawn Mowing, Garage Cleanout"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-semibold mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="gardening">Gardening</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="painting">Painting</option>
                  <option value="moving">Moving & Heavy Lifting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-semibold mb-2">
                  Job Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the work that needs to be done..."
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                />
              </div>

              {/* Grid for Rate and Hours */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Hourly Rate */}
                <div>
                  <label htmlFor="hourlyRate" className="block text-sm font-semibold mb-2">
                    <DollarSign className="inline w-4 h-4 mb-1" />
                    {' '}Hourly Rate *
                  </label>
                  <input
                    type="number"
                    id="hourlyRate"
                    name="hourlyRate"
                    value={formData.hourlyRate}
                    onChange={handleChange}
                    placeholder="15"
                    min="10"
                    max="50"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Minimum $10/hour
                  </p>
                </div>

                {/* Estimated Hours */}
                <div>
                  <label htmlFor="estimatedHours" className="block text-sm font-semibold mb-2">
                    <Clock className="inline w-4 h-4 mb-1" />
                    {' '}Estimated Hours *
                  </label>
                  <input
                    type="number"
                    id="estimatedHours"
                    name="estimatedHours"
                    value={formData.estimatedHours}
                    onChange={handleChange}
                    placeholder="2"
                    min="1"
                    max="8"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    How long will this take?
                  </p>
                </div>
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-semibold mb-2">
                  <MapPin className="inline w-4 h-4 mb-1" />
                  {' '}Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Brooklyn, NY"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  <Upload className="inline w-4 h-4 mb-1" />
                  {' '}Add Photos (Optional)
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PNG, JPG up to 10MB
                  </p>
                </div>
              </div>

              {/* Safety Guidelines */}
              <div className="bg-accent/30 rounded-lg p-6">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-primary">ℹ️</span>
                  Community Guidelines
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Be clear and specific about the work required</li>
                  <li>• Provide accurate time estimates</li>
                  <li>• Ensure the work is appropriate for young workers</li>
                  <li>• Meet workers in safe, well-lit locations</li>
                </ul>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="button"
                  className="btn-secondary flex-1"
                  onClick={() => window.history.back()}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary flex-1">
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
