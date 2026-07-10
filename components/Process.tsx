"use client";

import { MessageCircle, FileCheck2, KeyRound, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const WHATSAPP_NUMBER = "5511999999999";

const steps = [
  {
    icon: MessageCircle,
    title: "5 minutos de conversa",
    text: "Verificamos se você ou um familiar tem direito ao Minha Casa Minha Vida, sem compromisso.",
  },
  {
    icon: FileCheck2,
    title: "Envie seus documentos",
    text: "Analisamos sua renda e ajudamos a comprovar a necessidade de apoio na compra do imóvel.",
  },
  {
    icon: KeyRound,
    title: "Escolha seu novo lar",
    text: "Conheça as opções disponíveis do jeito que você precisa, na cidade que você busca.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="bg-cream-soft py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Como funciona
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Um processo simples, do primeiro contato às chaves na mão
          </h2>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-ink/10 sm:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_10px_30px_-16px_rgba(28,25,18,0.35)]">
                  <s.icon className="h-6 w-6 text-brand" strokeWidth={1.8} />
                </div>
                <p className="mt-6 text-xs font-semibold text-ink/35">
                  Etapa {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-2 text-xl font-bold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/55">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl bg-ink px-8 py-9 sm:flex-row sm:items-center sm:px-10">
            <div>
              <p className="font-display text-2xl font-extrabold text-cream">
                Pronto!
              </p>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-cream/60">
                É só aguardar a aprovação do benefício para ter um
                financiamento super acessível — nós cuidamos do resto.
              </p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
            >
              Fale conosco
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
