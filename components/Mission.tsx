"use client";

import Image from "next/image";
import { CheckCircle2, Heart, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

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
          <Reveal className="flex justify-center lg:justify-start">
            <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[1.75rem] shadow-[0_30px_70px_-28px_rgba(18,22,44,0.45)]">
              <Image
                src="/team-office.jpg"
                alt="Equipe Hinode Imóveis no escritório"
                fill
                sizes="(max-width: 1024px) 100vw, 512px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              Nossa missão é você morar bem
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/60">
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
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light">
                  <p.icon className="h-7 w-7 text-brand" strokeWidth={2.3} />
                </span>
                <p className="mt-4 text-base font-bold text-ink">{p.title}</p>
                <p className="mt-2 text-base leading-relaxed text-ink/60">
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
