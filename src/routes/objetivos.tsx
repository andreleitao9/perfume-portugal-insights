import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/PageHeader";

export const Route = createFileRoute("/objetivos")({
  head: () => ({
    meta: [
      { title: "Objetivos — Mercado de Perfumes em Portugal" },
      { name: "description", content: "Objetivos do trabalho sobre o mercado de perfumes em Portugal." },
    ],
  }),
  component: ObjetivosPage,
});

const OBJETIVOS = [
  {
    n: "01",
    titulo: "Analisar o mercado de perfumes em Portugal",
    texto: "Perceber a dimensão do setor, o seu peso económico e a sua evolução nos últimos anos.",
  },
  {
    n: "02",
    titulo: "Identificar as marcas mais populares",
    texto: "Distinguir entre marcas internacionais de luxo e marcas mais acessíveis presentes no mercado nacional.",
  },
  {
    n: "03",
    titulo: "Compreender o comportamento do consumidor",
    texto: "Estudar quem compra perfume em Portugal, com que frequência e quais as motivações de compra.",
  },
  {
    n: "04",
    titulo: "Estudar as tendências atuais do setor",
    texto: "Identificar mudanças importantes, como a sustentabilidade, o cruelty-free e o crescimento das compras online.",
  },
  {
    n: "05",
    titulo: "Reunir informação de forma organizada",
    texto: "Apresentar os conteúdos num site claro, estruturado e adequado a uma avaliação escolar.",
  },
];

function ObjetivosPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Página 3"
        title="Objetivos"
        subtitle="O que queremos atingir com este trabalho."
      />
      <ul className="mt-14 space-y-4">
        {OBJETIVOS.map((o) => (
          <li
            key={o.n}
            className="flex gap-6 rounded-lg border border-border bg-card p-6 hover:border-accent transition-colors"
          >
            <span className="font-serif text-2xl text-accent shrink-0">{o.n}</span>
            <div>
              <h3 className="font-semibold text-foreground">{o.titulo}</h3>
              <p className="mt-1 text-muted-foreground leading-relaxed">{o.texto}</p>
            </div>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}