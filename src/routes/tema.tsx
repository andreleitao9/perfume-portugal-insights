import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/PageHeader";

export const Route = createFileRoute("/tema")({
  head: () => ({
    meta: [
      { title: "Tema e Finalidade — Mercado de Perfumes em Portugal" },
      { name: "description", content: "Apresentação do tema e finalidade do trabalho sobre o mercado de perfumes em Portugal." },
    ],
  }),
  component: TemaPage,
});

function TemaPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Página 2"
        title="Tema e Finalidade"
        subtitle="Enquadramento do trabalho e razões que justificam a escolha do tema."
      />
      <div className="mt-14 grid md:grid-cols-2 gap-10">
        <article className="prose-section">
          <h2 className="text-2xl font-semibold mb-3">Porque escolhemos este tema?</h2>
          <p className="text-muted-foreground leading-relaxed">
            O perfume faz parte do dia a dia de muitos portugueses e está ligado à imagem
            pessoal, ao bem-estar e até à forma como nos relacionamos com os outros. É um
            produto presente em quase todas as casas, com um peso económico relevante e
            uma ligação forte ao mundo da moda e do marketing. Por ser um setor próximo
            do consumidor e com forte componente de comunicação, pareceu-nos um excelente
            ponto de partida para aplicar conceitos da nossa formação em Marketing.
          </p>
        </article>
        <article className="prose-section">
          <h2 className="text-2xl font-semibold mb-3">O que pretendemos estudar?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Pretendemos analisar o mercado de perfumes em Portugal de forma simples e
            organizada: perceber a sua dimensão e crescimento, identificar as marcas mais
            procuradas, estudar o perfil do consumidor português e os canais que utiliza
            para comprar, e ainda observar as principais tendências atuais, como a
            sustentabilidade e o crescimento das compras online.
          </p>
        </article>
      </div>

      <div className="mt-12 rounded-xl border border-border bg-secondary/50 p-8">
        <h3 className="font-serif text-xl font-semibold mb-3">Finalidade do trabalho</h3>
        <p className="text-muted-foreground leading-relaxed">
          Reunir, num só documento digital, informação clara sobre o setor da perfumaria
          em Portugal, permitindo que qualquer leitor compreenda a sua importância, os
          seus protagonistas e a sua evolução. O trabalho serve também como exercício
          prático de organização de conteúdos, estruturação de informação e construção
          de um site simples no âmbito da disciplina de Tecnologias de Informação.
        </p>
      </div>
    </PageShell>
  );
}