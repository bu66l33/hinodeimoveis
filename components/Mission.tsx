"use client";

import { CheckCircle2, Heart, Zap } from "lucide-react";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";

const points = [
  {
    icon: CheckCircle2,
    title: "Selecionamos os melhores imóveis",
    text: "participantes do Minha Casa Minha Vida, com boa localização, segurança e lazer.",
  },
  {
    icon: Heart,
    title: "Vamos além de qualquer imobiliária",
    text: "para que você consiga aprovação de crédito e parcelas baixas no financiamento.",
  },
  {
    icon: Zap,
    title: "Transparência e agilidade no processo",
    text: "nossa equipe acompanha cada etapa junto aos sistemas da Caixa Econômica Federal.",
  },
];

export default function Mission() {
  return (
    <section className="bg-cream-soft py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Logo full />
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              Nossa missão é você morar bem
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/60">
              Com parcelas baixas e um pouco de planejamento, comprar um
              imóvel se torna um investimento ao alcance de muitos
              brasileiros. O resultado é você dono ou dona de um lar onde sua
              família poderá crescer e ter um patrimônio para deixar pra eles.
              A Hinode Imóveis te acompanha nessa decisão importante da forma
              mais tranquila e segura possível.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={0.1 + i * 0.08}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-[0_16px_40px_-28px_rgba(18,22,44,0.35)]">
                <p.icon className="h-6 w-6 text-brand" strokeWidth={1.8} />
                <p className="mt-4 text-sm font-bold text-ink">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
