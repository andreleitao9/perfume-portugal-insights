import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/PageHeader";

export const Route = createFileRoute("/tendencias")({
  component: TendenciasPage,
});

const TENDENCIAS = [
  {
    titulo: "Sustentabilidade",
    texto:
      "As marcas investem em embalagens recicláveis, frascos recarregáveis e produção mais responsável. O consumidor valoriza cada vez mais marcas com práticas ambientais transparentes.",
  },
  {
    titulo: "Produtos vegan e cruelty-free",
    texto:
      "Cresce a procura por fragrâncias que não recorrem a ingredientes de origem animal e que não são testadas em animais. É uma tendência clara entre o público mais jovem.",
  },
  {
    titulo: "Compras online",
    texto:
      "O e-commerce continua a expandir-se, com promoções agressivas, entregas rápidas e amostras gratuitas. As redes sociais e influenciadores têm um papel central nesta evolução.",
  },
  {
    titulo: "Perfumes personalizados",
    texto:
      "Surgem propostas de perfumes feitos à medida ou com gravação personalizada do frasco, criando uma experiência mais exclusiva e diferenciadora para o consumidor.",
  },
];

function TendenciasPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Página 8"
        title="Tendências do Mercado"
        subtitle="As principais transformações que estão a moldar o setor da perfumaria."
      />
      <div className="mt-14 space-y-4">
        {TENDENCIAS.map((t, i) => (
          <article
            key={t.titulo}
            className="grid md:grid-cols-12 gap-6 items-start rounded-lg border border-border bg-card p-6"
          >
            <div className="md:col-span-3 flex items-baseline gap-3">
              <span className="font-serif text-3xl text-accent">0{i + 1}</span>
              <h3 className="font-serif text-xl font-semibold">{t.titulo}</h3>
            </div>
            <p className="md:col-span-9 text-muted-foreground leading-relaxed">{t.texto}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}