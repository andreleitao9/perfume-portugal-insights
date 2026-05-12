import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/PageHeader";

export const Route = createFileRoute("/docentes")({
  head: () => ({
    meta: [
      { title: "Docentes — Mercado de Perfumes em Portugal" },
      { name: "description", content: "Docentes responsáveis pelo trabalho." },
    ],
  }),
  component: DocentesPage,
});

function DocentesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Página 10"
        title="Docentes"
        subtitle="Professores responsáveis pela orientação do trabalho."
      />

      <div className="mt-14 mx-auto max-w-2xl space-y-4">
        <Teacher name="[Nome do/a Professor/a]" subject="Tecnologias de Informação" />
        {/* Adicionar mais docentes se aplicável */}
      </div>

      <p className="mt-12 text-center text-sm text-muted-foreground">
        Trabalho realizado no ano letivo 2025/2026.
      </p>
    </PageShell>
  );
}

function Teacher({ name, subject }: { name: string; subject: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 flex items-center gap-5">
      <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center font-serif text-xl text-accent">
        {name.replace(/[\[\]]/g, "").charAt(0) || "D"}
      </div>
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{subject}</p>
      </div>
    </div>
  );
}