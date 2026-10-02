import { useMemo, useState } from 'react';
import { Bell, Sparkles } from 'lucide-react';

import {
  AIStudioSection,
  BrandSetup,
  DashboardSection,
  ExportSection,
  FeatureGrid,
  HeroSection,
  TemplateSection,
  UseCasesSection,
} from './components/StudioSections';
import { companyPresets } from './data/companyPresets';
import { aiPromptSuggestions, posterTemplates } from './data/posterTemplates';

function App() {
  const [selectedPreset, setSelectedPreset] = useState(companyPresets[0]);
  const [selectedTemplate, setSelectedTemplate] = useState(posterTemplates[0]);
  const [prompt, setPrompt] = useState(aiPromptSuggestions[0]);

  const designVariations = useMemo(
    () => [
      {
        title: 'Minimal Corporate',
        description: 'Clean hierarchy for executive announcements and board communication.',
      },
      {
        title: 'Modern Business',
        description: 'Contemporary layout for growth brands and product marketing.',
      },
      {
        title: 'Premium Finance',
        description: 'Trust-led design for finance and institutional reporting.',
      },
      {
        title: 'Bold Marketing',
        description: 'High-visibility creative for campaigns, launches, and promotions.',
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-brand-background text-brand-text">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white shadow-soft">
              B
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Business</div>
              <div className="text-lg font-semibold text-slate-900">Design Studio</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#templates" className="transition hover:text-slate-900">Templates</a>
            <a href="#dashboard" className="transition hover:text-slate-900">Dashboard</a>
            <a href="#brand" className="transition hover:text-slate-900">Brand Kit</a>
            <a href="#ai" className="transition hover:text-slate-900">AI Studio</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-slate-200 bg-white p-2.5 text-slate-600 md:inline-flex">
              <Bell className="h-4 w-4" />
            </button>
            <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-slate-800">
              Create Poster
            </button>
          </div>
        </div>
      </header>

      <main>
        <HeroSection selectedPreset={selectedPreset} />
        <FeatureGrid />
        <BrandSetup selectedPreset={selectedPreset} setSelectedPreset={setSelectedPreset} />
        <TemplateSection selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
        <AIStudioSection
          prompt={prompt}
          setPrompt={setPrompt}
          selectedTemplate={selectedTemplate}
          designVariations={designVariations}
        />
        <DashboardSection />
        <ExportSection />
        <UseCasesSection selectedPreset={selectedPreset} />
      </main>
    </div>
  );
}

export default App;

// Tiny visual accent for compatibility with the custom brand palette.
const _ = Sparkles;

