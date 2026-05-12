import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/PageHeader";

export const Route = createFileRoute("/conclusao")({
  head: () => ({
    meta: [
      { title: "Conclusão — Mercado de Perfumes em Portugal" },
      { name: "description", content: "Conclusões finais do trabalho sobre o mercado de perfumes em Portugal." },
    ],
  }),
  component: ConclusaoPage,
});

function ConclusaoPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Página 9"
        title="Conclusão"
        subtitle="Síntese final das principais ideias retiradas deste trabalho."
      />

      <div className="mt-14 space-y-6 text-muted-foreground leading-relaxed">
        <p>
          Ao longo deste trabalho foi possível perceber que o mercado de perfumes em
          Portugal é um setor dinâmico, com peso económico relevante e em crescimento
          contínuo. O perfume mantém-se como um produto importante no consumo dos
          portugueses, tanto para uso pessoal como para oferta.
        </p>
        <p>
          O mercado divide-se claramente entre o segmento de luxo, dominado por marcas
          internacionais de prestígio, e o segmento mais acessível, onde se destacam as
          cadeias de perfumes inspirados, as grandes superfícies e a venda direta. Em
          ambos, o consumidor português mostra-se atento à qualidade, à imagem da marca
          e, sobretudo, ao preço e às promoções.
        </p>
        <p>
          Os canais de venda diversificaram-se: às tradicionais perfumarias e
          hipermercados juntou-se uma forte presença online, que veio alterar a forma
          como se compara, escolhe e compra perfume. Em paralelo, ganharam força
          tendências como a sustentabilidade, os produtos vegan e cruelty-free e a
          personalização, refletindo um consumidor mais consciente e exigente.
        </p>
        <p>
          Em síntese, o setor da perfumaria em Portugal é um exemplo claro de como o
          marketing, o comportamento do consumidor e as novas tecnologias se cruzam para
          dar forma a um mercado em constante transformação.
        </p>
      </div>

      <Link
        to="/docentes"
        className="inline-flex items-center gap-2 mt-12 text-sm font-medium text-foreground border-b border-accent pb-1 hover:text-accent transition-colors"
      >
        Ver docentes →
      </Link>
    </PageShell>
  );
}