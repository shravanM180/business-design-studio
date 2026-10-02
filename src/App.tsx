import type { ReactNode } from 'react';
import {
  ArrowRight,
  BarChart3,
  BadgeCheck,
  Bell,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  CircleUserRound,
  Download,
  FileText,
  Globe,
  LayoutDashboard,
  Mail,
  MapPin,
  Palette,
  Phone,
  Presentation,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  Wand2,
} from 'lucide-react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Funnel,
  FunnelChart,
  LabelList,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import type { CompanyPreset } from '../data/companyPresets';
import {
  dashboardMetrics,
  funnelData,
  regionData,
  revenueData,
  companyPresets,
} from '../data/companyPresets';
import type { PosterTemplate } from '../data/posterTemplates';
import { aiPromptSuggestions, posterTemplates } from '../data/posterTemplates';

const palette = ['#0f172a', '#2563eb', '#14b8a6', '#f97316', '#10b981', '#8b5cf6'];

const useCases = [
  'Corporate communications',
  'Marketing campaigns',
  'HR hiring announcements',
  'Executive reporting',
  'Product launches',
  'Investor updates',
];

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  action?: ReactNode;
};

function SectionHeader({ eyebrow, title, action }: SectionHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
      </div>
      {action}
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof FileText;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

export function FeatureGrid() {
  const cards = [
    { icon: FileText, title: 'Poster Templates', text: 'Corporate, social, HR, finance and campaign-ready templates.' },
    { icon: LayoutDashboard, title: 'Dashboard Templates', text: 'KPIs, financials, growth reporting and executive views.' },
    { icon: Palette, title: 'Brand Kit', text: 'Color, typography and style systems applied automatically.' },
    { icon: Wand2, title: 'AI Design Generator', text: 'Turn prompts into structured designs and variants.' },
    { icon: Download, title: 'Export', text: 'PNG, JPG, PDF, print and external-ready assets.' },
    { icon: Users, title: 'Use Cases', text: 'Built for every team and every stage of business growth.' },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Platform" title="Everything your business needs" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {cards.map(({ icon, title, text }) => (
          <FeatureCard key={title} icon={icon} title={title} text={text} />
        ))}
      </div>
    </section>
  );
}

type TemplateCardProps = {
  template: PosterTemplate;
  isSelected: boolean;
  onSelect: (template: PosterTemplate) => void;
};

function TemplateCard({ template, isSelected, onSelect }: TemplateCardProps) {
  return (
    <button
      key={template.id}
      type="button"
      onClick={() => onSelect(template)}
      className={`overflow-hidden rounded-3xl border p-0 text-left transition ${
        isSelected ? 'border-slate-900 shadow-soft' : 'border-slate-200 bg-white hover:-translate-y-1'
      }`}
    >
      <div className={`h-28 ${template.accent} relative p-4 text-white`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%)]" />
        <div className="relative flex h-full items-end justify-between text-sm font-medium uppercase tracking-[0.18em]">
          <span>{template.category}</span>
          <Sparkles className="h-4 w-4" />
        </div>
      </div>
      <div className="space-y-3 p-5">
        <div className="text-xl font-semibold text-slate-900">{template.name}</div>
        <p className="text-sm leading-6 text-slate-600">{template.description}</p>
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
          {template.cta} <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </button>
  );
}

export function HeroSection({ selectedPreset }: { selectedPreset: CompanyPreset }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            <Sparkles className="h-3.5 w-3.5" />
            Corporate Design Platform
          </div>
          <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Create Professional Business Designs in Minutes.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            Generate corporate posters, marketing creatives, and powerful business dashboards using your company&apos;s brand identity.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-soft transition hover:bg-slate-800">
              Create Poster <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
              Build Dashboard <LayoutDashboard className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-600" /> Premium UI</div>
            <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-600" /> Reusable Templates</div>
            <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-600" /> Brand-aware exports</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-6 h-32 w-32 rounded-full bg-blue-200/70 blur-3xl" />
          <div className="absolute -right-2 bottom-8 h-32 w-32 rounded-full bg-violet-200/70 blur-3xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-soft">
            <div className={`rounded-[24px] bg-gradient-to-br ${selectedPreset.gradient} p-5 text-white`}>
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 font-bold">A</div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-sky-100">{selectedPreset.name}</div>
                    <div className="text-lg font-semibold">Q4 Business Update</div>
                  </div>
                </div>
                <div className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em]">
                  Q4 Update
                </div>
              </div>

              <h2 className="max-w-sm text-3xl font-black leading-tight">{selectedPreset.tagline}</h2>
              <p className="mt-4 max-w-sm text-sm text-sky-100">
                Stronger client outcomes powered by technology, trust and a clear financial roadmap.
              </p>

              <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-sky-100">Revenue</div>
                  <div className="mt-1 text-2xl font-bold">₹48.6L</div>
                </div>
                <div className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-semibold text-emerald-200">
                  +18.0%
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <button className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900">Explore</button>
                <button className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white">Export</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BrandSetup({
  selectedPreset,
  setSelectedPreset,
}: {
  selectedPreset: CompanyPreset;
  setSelectedPreset: (preset: CompanyPreset) => void;
}) {
  return (
    <section id="brand" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Brand setup</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Company identity made easy</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Company name</label>
              <input value={selectedPreset.name} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none" readOnly />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Industry</label>
              <input value={selectedPreset.industry} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none" readOnly />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="text-sm font-medium text-slate-700">Tagline</label>
              <input value={selectedPreset.tagline} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none" readOnly />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Website</label>
              <input value={selectedPreset.website} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none" readOnly />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input value={selectedPreset.email} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none" readOnly />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Phone</label>
              <input value={selectedPreset.phone} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none" readOnly />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Address</label>
              <input value={selectedPreset.address} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none" readOnly />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Brand colors</label>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
                <span className="h-6 w-6 rounded-md" style={{ backgroundColor: selectedPreset.primaryColor }} />
                <span className="h-6 w-6 rounded-md" style={{ backgroundColor: selectedPreset.secondaryColor }} />
                <span className="text-sm text-slate-600">Primary + Secondary</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white" style={{ background: `linear-gradient(135deg, ${selectedPreset.primaryColor}, ${selectedPreset.secondaryColor})` }}>
                B
              </div>
              <div>
                <div className="text-sm text-slate-500">Preset</div>
                <div className="font-semibold text-slate-900">{selectedPreset.name}</div>
              </div>
            </div>
            <button className="rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700">Apply</button>
          </div>

          <div className="space-y-3">
            {companyPresets.map((preset) => (
              <button
                key={preset.name}
                type="button"
                onClick={() => setSelectedPreset(preset)}
                className={`flex w-full items-center justify-between rounded-2xl border px-3 py-3 text-left transition ${selectedPreset.name === preset.name ? 'border-slate-900 bg-slate-50' : 'border-slate-200 bg-white hover:bg-slate-50'}`}
              >
                <div>
                  <div className="font-medium text-slate-900">{preset.name}</div>
                  <div className="text-xs text-slate-500">{preset.industry}</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-4 w-4 rounded-full" style={{ backgroundColor: preset.primaryColor }} />
                  <span className="h-4 w-4 rounded-full" style={{ backgroundColor: preset.secondaryColor }} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TemplateSection({
  selectedTemplate,
  setSelectedTemplate,
}: {
  selectedTemplate: PosterTemplate;
  setSelectedTemplate: (template: PosterTemplate) => void;
}) {
  return (
    <section id="templates" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Poster templates"
        title="Designed for every business moment"
        action={<button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">View all</button>}
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posterTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            isSelected={selectedTemplate.id === template.id}
            onSelect={setSelectedTemplate}
          />
        ))}
      </div>
    </section>
  );
}

export function AIStudioSection({
  prompt,
  setPrompt,
  selectedTemplate,
  designVariations,
}: {
  prompt: string;
  setPrompt: (value: string) => void;
  selectedTemplate: PosterTemplate;
  designVariations: Array<{ title: string; description: string }>;
}) {
  return (
    <section id="ai" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
        <SectionHeader
          eyebrow="AI design generator"
          title="Turn a prompt into polished poster concepts"
          action={
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white">
              Generate Variations <Wand2 className="h-4 w-4" />
            </button>
          }
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">Prompt</label>
            <textarea
              rows={5}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 outline-none focus:border-blue-500"
            />
            <div className="flex flex-wrap gap-2">
              {aiPromptSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setPrompt(suggestion)}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 transition hover:bg-slate-50"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-500">Suggested layout</div>
                <div className="text-xl font-semibold text-slate-900">{selectedTemplate.name}</div>
              </div>
              <div className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">Ready</div>
            </div>

            <div className="grid gap-3">
              {['Headline', 'Subtitle', 'Main content', 'CTA', 'Company information', 'Suggested visual', 'Brand colors', 'Layout'].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5">
                  <span className="text-sm text-slate-700">{item}</span>
                  <span className="text-xs font-medium text-slate-500">Included</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {designVariations.map((variation) => (
            <div key={variation.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-4 h-36 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-600 to-indigo-500 p-4 text-white">
                <div className="flex h-full items-end justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-blue-100">Design</div>
                    <div className="mt-2 text-xl font-bold">{variation.title}</div>
                  </div>
                  <TrendingUp className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{variation.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{variation.description}</p>
              <button className="mt-4 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">Select design</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DashboardSection() {
  return (
    <section id="dashboard" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Dashboard builder"
        title="Business performance at a glance"
        action={
          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700">
            Export dashboard <Download className="h-4 w-4" />
          </button>
        }
      />

      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
        <div className="flex flex-col border-b border-slate-200 bg-white px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">A</div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">ABC Finance</div>
              <div className="text-lg font-semibold text-slate-900">Executive Dashboard</div>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3 lg:mt-0">
            <button className="rounded-full border border-slate-200 p-2.5 text-slate-600"><Search className="h-4 w-4" /></button>
            <button className="rounded-full border border-slate-200 p-2.5 text-slate-600"><Bell className="h-4 w-4" /></button>
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
              <CircleUserRound className="h-6 w-6 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">A. Gupta</span>
              <ChevronDown className="h-4 w-4 text-slate-500" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[220px_1fr]">
          <aside className="border-b border-slate-200 bg-slate-100 p-4 lg:border-b-0 lg:border-r">
            <nav className="space-y-2 text-sm text-slate-700">
              {['Overview', 'Sales', 'Finance', 'Marketing', 'HR', 'Operations', 'Customers', 'Reports', 'Settings'].map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 ${index === 0 ? 'bg-slate-900 text-white' : 'hover:bg-white'}`}
                >
                  <span>{item}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ))}
            </nav>
          </aside>

          <div className="p-5">
            <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm text-slate-500">Overview</div>
                <div className="text-2xl font-bold text-slate-900">Growth snapshot</div>
              </div>
              <div className="flex gap-2">
                <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">This month</button>
                <button className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-medium text-white">Export</button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {dashboardMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{metric.label}</span>
                    <span className={`rounded-full px-2 py-1 text-[10px] font-semibold ${metric.change.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                      {metric.change}
                    </span>
                  </div>
                  <div className="mt-4 text-3xl font-bold text-slate-900">{metric.value}</div>
                  <div className="mt-2 text-xs text-slate-500">Prev: {metric.previous}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-5 xl:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Revenue vs Expenses</div>
                    <div className="text-xl font-semibold text-slate-900">₹1.26Cr</div>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">+12.4%</span>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#2563eb" stopOpacity={0.04} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="name" tickLine={false} axisLine={false} />
                      <YAxis tickLine={false} axisLine={false} />
                      <Tooltip />
                      <Area type="monotone" dataKey="revenue" stroke="#2563eb" fill="url(#revenueFill)" strokeWidth={3} />
                      <Area type="monotone" dataKey="expenses" stroke="#0f172a" fillOpacity={0} strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Monthly Sales</div>
                    <div className="text-xl font-semibold text-slate-900">₹42.8L</div>
                  </div>
                  <span className="rounded-full bg-sky-100 px-2 py-1 text-xs font-semibold text-sky-700">+8.2%</span>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="name" tickLine={false} axisLine={false} />
                      <YAxis tickLine={false} axisLine={false} />
                      <Tooltip />
                      <Bar dataKey="revenue" fill="#0f172a" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="expenses" fill="#60a5fa" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-5 xl:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="mb-3 text-sm text-slate-500">Customer Growth</div>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="name" tickLine={false} axisLine={false} />
                      <YAxis tickLine={false} axisLine={false} />
                      <Tooltip />
                      <Line type="monotone" dataKey="revenue" stroke="#14b8a6" strokeWidth={3} dot={{ r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="mb-3 text-sm text-slate-500">Sales by Region</div>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={regionData} outerRadius={65} dataKey="value" nameKey="name" innerRadius={30} paddingAngle={3}>
                        {regionData.map((entry, index) => (
                          <Cell key={entry.name} fill={palette[index % palette.length]} />
                        ))}
                      </Pie>
                      <Legend />
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="mb-3 text-sm text-slate-500">Conversion Funnel</div>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <FunnelChart>
                      <Tooltip />
                      <Funnel dataKey="value" data={funnelData} isAnimationActive>
                        <LabelList dataKey="stage" position="right" fill="#334155" stroke="none" />
                      </Funnel>
                    </FunnelChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExportSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Export & print</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Export-ready assets</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-4">
        {[
          { title: 'Instagram Post', size: '1080 × 1080', icon: Presentation },
          { title: 'Instagram Story', size: '1080 × 1920', icon: Sparkles },
          { title: 'LinkedIn Post', size: '1200 × 627', icon: BriefcaseBusiness },
          { title: 'Presentation', size: '1920 × 1080', icon: BarChart3 },
        ].map(({ title, size, icon: Icon }) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
              <Icon className="h-5 w-5" />
            </div>
            <div className="text-lg font-semibold text-slate-900">{title}</div>
            <div className="mt-2 text-sm text-slate-500">{size}</div>
            <button className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">Download</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export function UseCasesSection({ selectedPreset }: { selectedPreset: CompanyPreset }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-slate-200 bg-slate-900 p-8 text-white shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Use cases</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Built for modern company teams</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {useCases.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-200">
                  <BadgeCheck className="h-4 w-4 text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Company details</div>
                <div className="text-xl font-semibold">{selectedPreset.name}</div>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-slate-200">
              <div className="flex items-center gap-3"><Globe className="h-4 w-4 text-sky-300" /> {selectedPreset.website}</div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-sky-300" /> {selectedPreset.email}</div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-sky-300" /> {selectedPreset.phone}</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-sky-300" /> {selectedPreset.address}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
