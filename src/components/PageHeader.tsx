import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
}

export function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.25em] text-accent font-medium mb-4">
          {eyebrow}
        </p>
      )}
      <h1 className="text-4xl md:text-5xl font-semibold text-foreground">{title}</h1>
      {subtitle && (
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">{children}</div>
  );
}