"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Afinal, quem é a Hinode Imóveis?",
    a: "Somos uma imobiliária especialista no programa Minha Casa Minha Vida, sediada em São José dos Campos. Ajudamos famílias brasileiras a descobrir seu direito ao benefício e a encontrar o imóvel ideal, com atendimento humano do início ao fim.",
  },
  {
    q: "Como funciona o processo pra comprar um imóvel com a Hinode?",
    a: "Em uma conversa rápida de 5 minutos, verificamos se você tem direito ao benefício. Depois, te ajudamos a reunir a documentação e a escolher entre os empreendimentos disponíveis na sua cidade.",
  },
  {
    q: "Será que eu tenho direito ao Minha Casa Minha Vida?",
    a: "Milhões de brasileiros têm direito e não sabem. O benefício varia de acordo com sua renda familiar e região. Fazemos essa análise gratuitamente e sem compromisso.",
  },
  {
    q: "Como faço pra comprovar minha renda pro financiamento?",
    a: "Nossa equipe te orienta em cada detalhe, incluindo alternativas para quem trabalha por conta própria ou tem renda informal.",
  },
  {
    q: "Preciso pagar alguma coisa pra começar com a Hinode?",
    a: "Não. Toda a simulação, análise de crédito e acompanhamento são 100% gratuitos, do primeiro contato até a entrega das chaves.",
  },
  {
    q: "Quanto tempo demora pra eu pegar as chaves do meu imóvel?",
    a: "Depende da aprovação do benefício e do financiamento junto à Caixa Econômica Federal, mas nossa equipe trabalha para tornar esse processo o mais rápido possível.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Dúvidas frequentes
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Aqui estão algumas dúvidas que você pode ter
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-ink/10 border-t border-ink/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-ink sm:text-lg">
                    {item.q}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light">
                    <Plus
                      className={`h-5 w-5 text-brand transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      strokeWidth={2.6}
                    />
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl text-base leading-relaxed text-ink/60">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
