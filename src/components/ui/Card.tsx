import { type ReactNode } from 'react';

export type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-soft ${className}`}>{children}</div>;
}

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">{subtitle ?? 'Studio'}</div>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
    </div>
  );
}
