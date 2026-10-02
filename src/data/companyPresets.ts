export type CompanyPreset = {
  name: string;
  industry: string;
  tagline: string;
  primaryColor: string;
  secondaryColor: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  gradient: string;
};

export const companyPresets: CompanyPreset[] = [
  {
    name: 'ABC Finance Pvt. Ltd.',
    industry: 'Financial Services',
    tagline: 'Smart Money. Better Future.',
    primaryColor: '#0F172A',
    secondaryColor: '#2563EB',
    email: 'hello@abcfinance.com',
    phone: '+91 98765 43210',
    website: 'www.abcfinance.in',
    address: 'Bengaluru, India',
    gradient: 'from-slate-900 via-sky-700 to-blue-500'
  },
  {
    name: 'Nexora IT Solutions',
    industry: 'Technology',
    tagline: 'Build Smarter. Scale Faster.',
    primaryColor: '#111827',
    secondaryColor: '#14B8A6',
    email: 'sales@nexora.tech',
    phone: '+1 (415) 240-1042',
    website: 'www.nexora.tech',
    address: 'San Francisco, USA',
    gradient: 'from-slate-900 via-teal-700 to-cyan-500'
  },
  {
    name: 'Velora Commerce',
    industry: 'E-commerce',
    tagline: 'Curated For Every Moment.',
    primaryColor: '#111827',
    secondaryColor: '#F97316',
    email: 'hello@velora.store',
    phone: '+91 99887 66554',
    website: 'www.velora.store',
    address: 'Mumbai, India',
    gradient: 'from-orange-500 via-amber-500 to-yellow-400'
  },
  {
    name: 'CareNest Health',
    industry: 'Healthcare',
    tagline: 'Health That Moves With You.',
    primaryColor: '#0F172A',
    secondaryColor: '#10B981',
    email: 'support@carenest.health',
    phone: '+44 020 7946 0241',
    website: 'www.carenest.health',
    address: 'London, UK',
    gradient: 'from-emerald-700 via-teal-600 to-green-400'
  }
];

export type DashboardMetric = {
  label: string;
  value: string;
  previous: string;
  change: string;
  trend: 'up' | 'down';
};

export const dashboardMetrics: DashboardMetric[] = [
  { label: 'Revenue', value: '₹48.6L', previous: '₹41.2L', change: '+18.0%', trend: 'up' },
  { label: 'Profit', value: '₹12.4L', previous: '₹10.1L', change: '+22.7%', trend: 'up' },
  { label: 'Expenses', value: '₹36.2L', previous: '₹34.0L', change: '+6.5%', trend: 'up' },
  { label: 'Sales', value: '₹84.9L', previous: '₹72.5L', change: '+17.2%', trend: 'up' },
  { label: 'Customers', value: '12,845', previous: '11,244', change: '+14.2%', trend: 'up' },
  { label: 'Conversion', value: '7.8%', previous: '6.4%', change: '+1.4%', trend: 'up' },
  { label: 'Growth', value: '18.6%', previous: '15.1%', change: '+3.5%', trend: 'up' },
  { label: 'Employees', value: '342', previous: '310', change: '+10.3%', trend: 'up' }
];

export const revenueData = [
  { name: 'Jan', revenue: 22, expenses: 15 },
  { name: 'Feb', revenue: 30, expenses: 19 },
  { name: 'Mar', revenue: 28, expenses: 18 },
  { name: 'Apr', revenue: 36, expenses: 21 },
  { name: 'May', revenue: 41, expenses: 25 },
  { name: 'Jun', revenue: 48, expenses: 28 },
  { name: 'Jul', revenue: 54, expenses: 31 }
];

export const regionData = [
  { name: 'North', value: 35 },
  { name: 'South', value: 25 },
  { name: 'West', value: 22 },
  { name: 'East', value: 18 }
];

export const funnelData = [
  { stage: 'Visits', value: 100 },
  { stage: 'Leads', value: 72 },
  { stage: 'Qualified', value: 48 },
  { stage: 'Demo', value: 24 },
  { stage: 'Sales', value: 12 }
];
