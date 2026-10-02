import { ArrowUpRight, ChevronDown, Bell, CircleUserRound, Search, Plus, Download, Check, Sparkles } from 'lucide-react';

export type KpiCardProps = {
  label: string;
  value: string;
  previous: string;
  change: string;
  trend: 'up' | 'down';
};

export function KpiCard({ label, value, previous, change, trend }: KpiCardProps) {
  const positive = trend === 'up';

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex items-center justify-between text-slate-500">
        <span className="text-sm font-medium">{label}</span>
        <span className={`rounded-full px-2 py-1 text-xs font-semibold ${positive ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
          {positive ? '▲' : '▼'} {change}
        </span>
      </div>
      <div className="mt-4 text-3xl font-bold tracking-tight text-slate-900">{value}</div>
      <div className="mt-2 text-sm text-slate-500">Previous: {previous}</div>
    </div>
  );
}

export function DashboardShell() {
  const metrics = [
    { label: 'Revenue', value: '₹48.6L', previous: '₹41.2L', change: '18.0%', trend: 'up' as const },
    { label: 'Profit', value: '₹12.4L', previous: '₹10.1L', change: '22.7%', trend: 'up' as const },
    { label: 'Expenses', value: '₹36.2L', previous: '₹34.0L', change: '6.5%', trend: 'up' as const },
    { label: 'Sales', value: '₹84.9L', previous: '₹72.5L', change: '17.2%', trend: 'up' as const },
    { label: 'Customers', value: '12,845', previous: '11,244', change: '14.2%', trend: 'up' as const },
    { label: 'Conversion', value: '7.8%', previous: '6.4%', change: '1.4%', trend: 'up' as const },
    { label: 'Growth', value: '18.6%', previous: '15.1%', change: '3.5%', trend: 'up' as const },
    { label: 'Employees', value: '342', previous: '310', change: '10.3%', trend: 'up' as const }
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-soft">
      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">A</div>
          <div>
            <div className="text-sm text-slate-500">ABC Finance</div>
            <div className="text-base font-semibold text-slate-900">Executive Dashboard</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-slate-200 p-2 text-slate-600" aria-label="Search"><Search className="h-4 w-4" /></button>
          <button className="rounded-full border border-slate-200 p-2 text-slate-600" aria-label="Notifications"><Bell className="h-4 w-4" /></button>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2 py-1.5">
            <CircleUserRound className="h-6 w-6 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">A. Gupta</span>
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr]">
        <aside className="border-r border-slate-200 bg-slate-100 p-4">
          <nav className="space-y-2 text-sm text-slate-700">
            {['Overview', 'Sales', 'Finance', 'Marketing', 'HR', 'Operations', 'Customers', 'Reports', 'Settings'].map((item, index) => (
              <button key={item} className={`flex w-full items-center justify-between rounded-xl px-3 py-2 ${index === 0 ? 'bg-slate-900 text-white' : 'hover:bg-white'}`}>
                <span>{item}</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            ))}
          </nav>
        </aside>

        <main className="p-5">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm text-slate-500">Dashboard Overview</div>
              <h3 className="text-2xl font-bold text-slate-900">Performance snapshot</h3>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">This month</button>
              <button className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-medium text-white">Export dashboard</button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <KpiCard key={metric.label} {...metric} />
            ))}
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">Revenue vs Expenses</div>
                  <div className="text-xl font-semibold text-slate-900">₹1.26Cr</div>
                </div>
                <button className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">+12.4%</button>
              </div>
              <div className="h-48 rounded-xl bg-slate-100" />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">Monthly Sales</div>
                  <div className="text-xl font-semibold text-slate-900">₹42.8L</div>
                </div>
                <button className="rounded-full bg-sky-100 px-2 py-1 text-xs font-semibold text-sky-700">+8.2%</button>
              </div>
              <div className="h-48 rounded-xl bg-slate-100" />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"><Check className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold text-slate-900">Campaign readiness score</div>
                <div className="text-sm text-slate-500">80% complete with strong conversion velocity</div>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white">Launch <Sparkles className="h-4 w-4" /></button>
          </div>
        </main>
      </div>
    </div>
  );
}

export const dummyLogo = 'A';
