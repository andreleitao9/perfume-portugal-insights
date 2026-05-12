import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/PageHeader";

export const Route = createFileRoute("/consumidor")({
  head: () => ({
    meta: [
      { title: "Perfil do Consumidor Português — Perfumes" },
      { name: "description", content: "Análise do comportamento do consumidor português de perfumes." },
    ],
  }),
  component: ConsumidorPage,
});

function ConsumidorPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Página 6"
        title="Perfil do Consumidor Português"
        subtitle="Como compra, quanto gasta e o que valoriza o consumidor de perfumes em Portugal."
      />

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        <Card title="Faixa etária"
          text="O consumo de perfumes é transversal, mas concentra-se sobretudo entre os 18 e os 55 anos. Os jovens-adultos (18 a 30 anos) tendem a experimentar mais marcas e a deixar-se influenciar por redes sociais e influenciadores. O público adulto privilegia a fidelidade a fragrâncias específicas." />
        <Card title="Preço e qualidade"
          text="O consumidor português é exigente: procura boa qualidade, mas valoriza fortemente a relação qualidade-preço. Em compras de luxo, predomina a oferta como motivo principal; no consumo pessoal regular, ganham peso as marcas mais acessíveis e os perfumes inspirados." />
        <Card title="Importância das promoções"
          text="As promoções têm um peso decisivo. Períodos como o Natal, o Black Friday e os saldos de janeiro são fundamentais nas vendas de perfumaria. Os cartões de fidelização (Wells, Perfumes & Companhia, Sephora) influenciam a escolha do canal de compra." />
        <Card title="Consumo masculino vs. feminino"
          text="Tradicionalmente, o consumo feminino é mais elevado em frequência e variedade. No entanto, o segmento masculino tem crescido de forma consistente, com mais homens a investir em fragrâncias de gama alta e a renovar perfume com maior regularidade." />
      </div>
    </PageShell>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="font-serif text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{text}</p>
    </div>
  );
}