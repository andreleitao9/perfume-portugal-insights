import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-perfumes.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        <div className="flex items-center px-6 md:px-16 py-16">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-6">
              Trabalho de Tecnologias de Informação
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold leading-tight text-foreground">
              Mercado de Perfumes em Portugal
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Um estudo sobre o setor da perfumaria em Portugal — marcas, consumidores,
              canais de venda e tendências atuais.
            </p>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 text-sm">
              <Field label="Disciplina" value="Tecnologias de Informação" />
              <Field label="Ano letivo" value="2025/2026" />
              <Field label="Escola" value="IPAM" />
              <Field label="Grupo" value="[Nome do Grupo]" />
            </dl>

            <div className="mt-8 rounded-lg border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                Elementos do grupo
              </p>
              <ul className="space-y-1.5 text-foreground">
                <li className="flex justify-between gap-4"><span>[Nome completo do aluno 1]</span><span className="text-muted-foreground">nº [00]</span></li>
                <li className="flex justify-between gap-4"><span>[Nome completo do aluno 2]</span><span className="text-muted-foreground">nº [00]</span></li>
                <li className="flex justify-between gap-4"><span>[Nome completo do aluno 3]</span><span className="text-muted-foreground">nº [00]</span></li>
                <li className="flex justify-between gap-4"><span>[Nome completo do aluno 3]</span><span className="text-muted-foreground">nº [00]</span></li>
                <li className="flex justify-between gap-4"><span>[Nome completo do aluno 3]</span><span className="text-muted-foreground">nº [00]</span></li>
                <li className="flex justify-between gap-4"><span>[Nome completo do aluno 3]</span><span className="text-muted-foreground">nº [00]</span></li>

              </ul>
            </div>

            <Link
              to="/tema"
              className="inline-flex items-center gap-2 mt-10 text-sm font-medium text-foreground border-b border-accent pb-1 hover:text-accent transition-colors"
            >
              Começar a leitura →
            </Link>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <img
            src={heroImg}
            alt="Conjunto de frascos de perfume sobre superfície de mármore"
            width={1536}
            height={1024}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-foreground font-medium">{value}</dd>
    </div>
  );
}
