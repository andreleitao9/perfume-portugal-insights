import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/PageHeader";
import bottleImg from "@/assets/perfume-bottle.jpg";

export const Route = createFileRoute("/mercado")({
  component: MercadoPage,
});

function MercadoPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Página 4"
        title="O Mercado em Portugal"
        subtitle="Uma visão geral sobre a importância, o crescimento e a segmentação do setor."
      />

      <div className="mt-14 grid md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-3 space-y-6">
          <section>
            <h2 className="font-serif text-2xl font-semibold mb-2">A importância do perfume</h2>
            <p className="text-muted-foreground leading-relaxed">
              Em Portugal, o perfume é considerado um produto de uso pessoal regular e
              também um item de oferta muito procurado, sobretudo em datas como o Natal,
              o Dia dos Namorados, o Dia da Mãe e o Dia do Pai. É um produto associado a
              identidade, autoestima e cuidado pessoal, o que lhe confere uma procura
              estável ao longo do ano.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-semibold mb-2">Crescimento do setor</h2>
            <p className="text-muted-foreground leading-relaxed">
              O setor da perfumaria em Portugal tem mostrado um crescimento sustentado,
              acompanhando a recuperação do consumo após a pandemia e a expansão das
              compras online. As cadeias especializadas continuam a abrir novos espaços
              em centros comerciais e a investir fortemente em campanhas de marketing
              digital.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-semibold mb-2">Luxo vs. comercial</h2>
            <p className="text-muted-foreground leading-relaxed">
              O mercado divide-se essencialmente em dois grandes segmentos: o segmento
              de luxo, com marcas internacionais de prestígio e preços elevados, e o
              segmento comercial, com perfumes mais acessíveis vendidos em hipermercados,
              farmácias e lojas low-cost. Entre estes dois mundos, ganham espaço as
              marcas de perfumaria de nicho e os perfumes inspirados, que oferecem
              alternativas de qualidade a preços mais baixos.
            </p>
          </section>
        </div>
        <aside className="md:col-span-2">
          <img
            src={bottleImg}
            alt="Frasco de perfume com tampa dourada"
            width={1024}
            height={1280}
            loading="lazy"
            className="rounded-lg w-full object-cover aspect-[4/5]"
          />
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Stat n="2" label="grandes segmentos: luxo e comercial" />
            <Stat n="+" label="crescimento contínuo do setor" />
          </div>
        </aside>
      </div>
    </PageShell>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <p className="font-serif text-3xl text-accent">{n}</p>
      <p className="text-xs text-muted-foreground mt-1 leading-snug">{label}</p>
    </div>
  );
}