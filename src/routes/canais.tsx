import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/PageHeader";
import storeImg from "@/assets/perfumery-store.jpg";

export const Route = createFileRoute("/canais")({
  head: () => ({
    meta: [
      { title: "Canais de Venda — Perfumes em Portugal" },
      { name: "description", content: "Principais canais de venda de perfumes em Portugal: lojas físicas, online e perfumarias especializadas." },
    ],
  }),
  component: CanaisPage,
});

const CANAIS = [
  {
    titulo: "Lojas físicas",
    texto:
      "Hipermercados, farmácias e parafarmácias continuam a ser pontos importantes de venda, sobretudo para perfumes mais acessíveis e de marcas próprias. Permitem ao consumidor experimentar a fragrância antes de comprar.",
  },
  {
    titulo: "Lojas online",
    texto:
      "O canal digital cresceu fortemente nos últimos anos. Sites como Notino, Perfumes 24h, Druni e os e-commerce das próprias marcas permitem comparar preços, ler avaliações e aproveitar promoções exclusivas.",
  },
  {
    titulo: "Perfumarias especializadas",
    texto:
      "Cadeias como Sephora, Perfumes & Companhia, Wells, Douglas e Equivalenza dominam o segmento de perfumaria especializada. Oferecem variedade, aconselhamento personalizado e programas de fidelização.",
  },
];

function CanaisPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Página 7"
        title="Canais de Venda"
        subtitle="Onde o consumidor português encontra e compra os seus perfumes."
      />

      <img
        src={storeImg}
        alt="Interior de uma perfumaria com prateleiras de fragrâncias"
        width={1536}
        height={1024}
        loading="lazy"
        className="mt-12 rounded-xl w-full object-cover aspect-[16/7]"
      />

      <div className="mt-10 grid md:grid-cols-3 gap-5">
        {CANAIS.map((c, i) => (
          <article key={c.titulo} className="rounded-lg border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-wider text-accent font-medium">0{i + 1}</p>
            <h3 className="mt-3 font-serif text-xl font-semibold">{c.titulo}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.texto}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}