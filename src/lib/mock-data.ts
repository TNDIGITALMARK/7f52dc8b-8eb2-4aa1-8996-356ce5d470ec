export interface Job {
  id: string;
  title: string;
  description: string;
  employerId: string;
  employerName: string;
  employerAvatar: string;
  hourlyRate: number;
  distance: string;
  duration?: string;
  category: string;
  location: string;
  skills: string[];
  status: 'open' | 'in_progress' | 'completed';
  createdAt: Date;
}

export interface Worker {
  id: string;
  name: string;
  age: number;
  avatar: string;
  bio: string;
  skills: string[];
  rating: number;
  completedJobs: number;
  email: string;
  phone: string;
}

export interface Employer {
  id: string;
  name: string;
  avatar: string;
  address: string;
  rating: number;
  jobsPosted: number;
  verified: boolean;
}

// Mock Jobs
export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Lawn Mowing',
    description: 'Need someone to mow my front and back lawn. About 1 hour of work.',
    employerId: 'emp1',
    employerName: 'Sarah M.',
    employerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    hourlyRate: 15,
    distance: '0.8 miles',
    duration: '~1 hour',
    category: 'Gardening',
    location: 'Brooklyn, NY',
    skills: ['Lawn Care', 'Gardening'],
    status: 'open',
    createdAt: new Date('2025-10-20'),
  },
  {
    id: '2',
    title: 'Garage Cleanout',
    description: 'Help organize and clean out my garage. Heavy lifting involved.',
    employerId: 'emp1',
    employerName: 'Sarah M.',
    employerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    hourlyRate: 15,
    distance: '0.8 miles',
    duration: '~3 hours',
    category: 'Cleaning',
    location: 'Brooklyn, NY',
    skills: ['Organizing', 'Cleaning'],
    status: 'open',
    createdAt: new Date('2025-10-21'),
  },
  {
    id: '3',
    title: 'House Painting',
    description: 'Looking for help painting interior walls. Experience preferred.',
    employerId: 'emp2',
    employerName: 'Mike R.',
    employerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    hourlyRate: 15,
    distance: '1.2 miles',
    duration: '~4 hours',
    category: 'Painting',
    location: 'Brooklyn, NY',
    skills: ['Painting', 'Detail Work'],
    status: 'open',
    createdAt: new Date('2025-10-22'),
  },
  {
    id: '4',
    title: 'Fence Painting',
    description: 'Need help painting backyard fence. Paint and supplies provided.',
    employerId: 'emp2',
    employerName: 'Mike R.',
    employerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    hourlyRate: 18,
    distance: '1.2 miles',
    duration: '~2 hours',
    category: 'Painting',
    location: 'Brooklyn, NY',
    skills: ['Painting'],
    status: 'open',
    createdAt: new Date('2025-10-22'),
  },
  {
    id: '5',
    title: 'Leaf Removal',
    description: 'Fall cleanup - rake and bag leaves from front and back yard.',
    employerId: 'emp3',
    employerName: 'Johnson Family',
    employerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Johnson',
    hourlyRate: 12,
    distance: '0.5 miles',
    duration: '~2 hours',
    category: 'Gardening',
    location: 'Brooklyn, NY',
    skills: ['Gardening', 'Yard Work'],
    status: 'open',
    createdAt: new Date('2025-10-23'),
  },
  {
    id: '6',
    title: 'Moving Help',
    description: 'Need help moving boxes and furniture to storage unit.',
    employerId: 'emp4',
    employerName: 'David K.',
    employerAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    hourlyRate: 20,
    distance: '1.5 miles',
    duration: '~3 hours',
    category: 'Moving',
    location: 'Brooklyn, NY',
    skills: ['Heavy Lifting', 'Moving'],
    status: 'open',
    createdAt: new Date('2025-10-23'),
  },
];

// Mock Workers
export const mockWorkers: Worker[] = [
  {
    id: 'w1',
    name: 'Alex Thompson',
    age: 19,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    bio: 'College student looking for flexible work. Strong and reliable!',
    skills: ['Lawn Care', 'Moving Help', 'General Labor'],
    rating: 4.8,
    completedJobs: 23,
    email: 'alex@email.com',
    phone: '555-0123',
  },
  {
    id: 'w2',
    name: 'Jessica Martinez',
    age: 20,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica',
    bio: 'Detail-oriented worker with experience in cleaning and organizing.',
    skills: ['House Cleaning', 'Pet Sitting', 'Organizing'],
    rating: 4.9,
    completedJobs: 35,
    email: 'jessica@email.com',
    phone: '555-0124',
  },
  {
    id: 'w3',
    name: 'Marcus Johnson',
    age: 18,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    bio: 'Gap year student. Handy with tools and outdoor work.',
    skills: ['Handyman Help', 'Snow Removal', 'Painting'],
    rating: 4.7,
    completedJobs: 18,
    email: 'marcus@email.com',
    phone: '555-0125',
  },
];

// Mock Employers
export const mockEmployers: Employer[] = [
  {
    id: 'emp1',
    name: 'Sarah Mitchell',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    address: '123 Oak Street, Brooklyn, NY',
    rating: 4.9,
    jobsPosted: 12,
    verified: true,
  },
  {
    id: 'emp2',
    name: 'Mike Rodriguez',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    address: '456 Maple Avenue, Brooklyn, NY',
    rating: 4.8,
    jobsPosted: 8,
    verified: true,
  },
  {
    id: 'emp3',
    name: 'Johnson Family',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Johnson',
    address: '789 Pine Road, Brooklyn, NY',
    rating: 5.0,
    jobsPosted: 15,
    verified: true,
  },
];

export const jobCategories = [
  { id: 'gardening', label: 'Gardening', count: 8 },
  { id: 'cleaning', label: 'Cleaning', count: 12 },
  { id: 'painting', label: 'Painting', count: 6 },
  { id: 'moving', label: 'Moving', count: 4 },
];
