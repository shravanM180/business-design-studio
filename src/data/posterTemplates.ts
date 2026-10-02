import { ArrowRight, Download, LayoutTemplate, Palette, Sparkles, TrendingUp, Users } from 'lucide-react';

export type TemplateCategory = 'Corporate' | 'Marketing' | 'HR' | 'Finance' | 'Social';

export type PosterTemplate = {
  id: string;
  name: string;
  category: TemplateCategory;
  description: string;
  accent: string;
  cta: string;
};

export const posterTemplates: PosterTemplate[] = [
  { id: 'corporate-announcement', name: 'Company Announcement', category: 'Corporate', description: 'Announce strategic milestones and leadership updates.', accent: 'bg-slate-900', cta: 'View brief' },
  { id: 'annual-meeting', name: 'Annual Meeting', category: 'Corporate', description: 'Drive trust with executive performance updates.', accent: 'bg-blue-600', cta: 'Set agenda' },
  { id: 'product-launch', name: 'Product Launch', category: 'Marketing', description: 'Introduce new offers with a premium product story.', accent: 'bg-indigo-600', cta: 'Launch now' },
  { id: 'lead-gen-campaign', name: 'Lead Generation', category: 'Marketing', description: 'Capture attention with sharp conversion-focused messaging.', accent: 'bg-orange-500', cta: 'Generate leads' },
  { id: 'hiring-announcement', name: 'Hiring Announcement', category: 'HR', description: 'Showcase culture, hiring goals, and growth opportunities.', accent: 'bg-emerald-600', cta: 'Open roles' },
  { id: 'employee-month', name: 'Employee of the Month', category: 'HR', description: 'Celebrate team wins with appreciation-first storytelling.', accent: 'bg-violet-600', cta: 'Recognize team' },
  { id: 'financial-report', name: 'Financial Report', category: 'Finance', description: 'Simplify insights for board-ready communication.', accent: 'bg-cyan-600', cta: 'Share update' },
  { id: 'market-update', name: 'Market Update', category: 'Finance', description: 'Create confident, research-based financial visuals.', accent: 'bg-sky-600', cta: 'Report analysis' },
  { id: 'instagram-post', name: 'Instagram Post', category: 'Social', description: 'Short-form, visually clean content for brand awareness.', accent: 'bg-pink-500', cta: 'Publish' },
  { id: 'linkedin-post', name: 'LinkedIn Post', category: 'Social', description: 'Professional B2B thought leadership in a polished format.', accent: 'bg-blue-700', cta: 'Share insight' }
];

export const features = [
  { icon: LayoutTemplate, title: 'Poster Templates', description: 'Ready-made corporate, marketing and social templates.' },
  { icon: TrendingUp, title: 'Dashboard Templates', description: 'CV and executive reporting dashboards with KPI logic.' },
  { icon: Palette, title: 'Brand Kit', description: 'Global colors, logos, typography and social identity.' },
  { icon: Sparkles, title: 'AI Design Generator', description: 'Prompt-based creative variations for pitch-perfect posters.' },
  { icon: Download, title: 'Export', description: 'Download as PNG, JPG, PDF or print-ready formats.' },
  { icon: Users, title: 'Use Cases', description: 'Built for finance, HR, sales, and operational teams.' }
];

export const quickActions = [
  'Create Poster',
  'Build Dashboard',
  'View Brand Kit',
  'Export Assets'
];

export const aiPromptSuggestions = [
  'Create a professional recruitment poster for ABC Finance Pvt Ltd. We are hiring an Investment Analyst.',
  'Design a premium product launch banner for our new analytics platform.',
  'Create a modern corporate announcement for Q4 results and market outlook.'
];

export const ctaButton = { label: 'Get Started', icon: ArrowRight };
