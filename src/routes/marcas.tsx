import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/PageHeader";

export const Route = createFileRoute("/marcas")({
  component: MarcasPage,
});

const INTERNACIONAIS = [
  { nome: "Chanel", desc: "Casa francesa de luxo, conhecida pelo icónico Nº 5 e por fragrâncias femininas e masculinas de grande prestígio." },
  { nome: "Dior", desc: "Marca de luxo francesa com perfumes muito populares em Portugal, como Sauvage e Miss Dior." },
  { nome: "Yves Saint Laurent", desc: "Conhecida por fragrâncias modernas e ousadas, como Libre e Y, com forte presença em campanhas de marketing." },
  { nome: "Carolina Herrera", desc: "Marca com fragrâncias muito procuradas pelo público jovem-adulto, como Good Girl e o icónico 212." },
  { nome: "Paco Rabanne", desc: "Casa associada a perfumes masculinos populares como o 1 Million e o Invictus." },
  { nome: "Hugo Boss", desc: "Forte presença no segmento masculino, com fragrâncias vendidas tanto em perfumarias como em grandes superfícies." },
];

const ACESSIVEIS = [
  { nome: "Equivalenza", desc: "Cadeia de perfumes inspirados de origem espanhola, com forte expansão em Portugal e preços acessíveis." },
  { nome: "Yves Rocher", desc: "Marca francesa centrada na cosmética natural, com perfumaria a preços moderados." },
  { nome: "Adolfo Dominguez", desc: "Marca espanhola com fragrâncias clássicas, frequentemente em promoção em perfumarias." },
  { nome: "Avon / Oriflame", desc: "Vendas por catálogo e venda direta, muito presentes no quotidiano português a preços baixos." },
  { nome: "Marcas próprias (Mercadona, Continente, Pingo Doce)", desc: "Linhas de perfumes vendidas em grandes superfícies, populares pela boa relação qualidade-preço." },
];

function MarcasPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Página 5"
        title="Marcas Mais Populares"
        subtitle="Uma seleção das marcas mais reconhecidas pelo consumidor português."
      />

      <Section title="Marcas Internacionais de Prestígio" items={INTERNACIONAIS} />
      <Section title="Marcas Mais Acessíveis" items={ACESSIVEIS} />
    </PageShell>
  );
}

function Section({ title, items }: { title: string; items: { nome: string; desc: string }[] }) {
  return (
    <section className="mt-14">
      <h2 className="font-serif text-2xl font-semibold mb-6">{title}</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((b) => (
          <article key={b.nome} className="rounded-lg border border-border bg-card p-5 hover:border-accent transition-colors">
            <h3 className="font-semibold text-foreground">{b.nome}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}