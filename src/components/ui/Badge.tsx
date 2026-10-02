export function Badge({ children, className = '' }: { children: string; className?: string }) {
  return <span className={`inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 ${className}`}>{children}</span>;
}
