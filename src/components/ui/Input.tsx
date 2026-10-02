import { type ChangeEvent, type ReactNode } from 'react';

export function Input({ label, ...props }: { label?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block space-y-2">
      {label && <span className="text-sm font-medium text-slate-700">{label}</span>}
      <input
        {...props}
        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:outline-none"
      />
    </label>
  );
}

export function Select({ label, children, ...props }: { label?: string; children: ReactNode } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block space-y-2">
      {label && <span className="text-sm font-medium text-slate-700">{label}</span>}
      <select
        {...props}
        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500"
      >
        {children}
      </select>
    </label>
  );
}
