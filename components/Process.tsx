"use client";

import { FileCheck2, KeyRound, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

const WHATSAPP_NUMBER = "5511988857473";

const steps = [
  {
    icon: WhatsAppIcon,
    title: "5 minutos de conversa",
    text: "Verificamos se você ou um familiar tem direito ao Minha Casa Minha Vida, sem compromisso.",
  },
  {
    icon: FileCheck2,
    title: "Análise gratuita da sua renda",
    text: "Nossa equipe avalia sua situação sem custo e te mostra exatamente qual apoio você tem direito.",
  },
  {
    icon: KeyRound,
    title: "Conheça seu novo lar",
    text: "De acordo com a sua aprovação, apresentamos as opções disponíveis em São José dos Campos.",
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
            Do primeiro contato à realização do seu sonho
          </h2>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-ink/10 sm:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-light shadow-[0_10px_30px_-16px_rgba(28,25,18,0.35)]">
                  <s.icon className="h-7 w-7 text-brand" strokeWidth={2.3} />
                </div>
                <p className="mt-6 text-sm font-bold text-ink/40">
                  Etapa {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-2 text-xl font-bold text-ink sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-base leading-relaxed text-ink/60">
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
              <p className="mt-1.5 max-w-md text-base leading-relaxed text-cream/60">
                É só aguardar a aprovação do benefício para ter um
                financiamento super acessível — nós cuidamos do resto.
              </p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-base font-semibold text-cream transition-transform hover:-translate-y-0.5"
            >
              Fale conosco
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
