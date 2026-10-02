import { type ReactNode } from 'react';

export function Button({ children, variant = 'primary', className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost'; children: ReactNode }) {
  const styles = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800',
    secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100'
  };

  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
