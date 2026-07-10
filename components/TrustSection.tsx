"use client";

import Image from "next/image";
import { Landmark, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

export default function TrustSection() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Segurança no financiamento
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            O Minha Casa Minha Vida é garantido pela Caixa Econômica Federal
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/55 sm:text-base">
            A Hinode Imóveis é uma correspondente imobiliária independente que
            te ajuda, sem custo, a acessar o maior programa habitacional do
            Brasil — com financiamento e garantias oficiais diretamente pela
            Caixa.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Reveal delay={0.05}>
            <div className="relative h-full min-h-[19rem] overflow-hidden rounded-[1.5rem] shadow-[0_25px_55px_-30px_rgba(18,22,44,0.4)]">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
                alt="Chaves do novo lar"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm font-semibold leading-relaxed text-cream">
                  Mais uma família Hinode com as chaves do novo lar na mão.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-ink/10 bg-white p-7">
              <Quote
                className="h-7 w-7 text-accent-dark"
                fill="currentColor"
                strokeWidth={0}
              />
              <p className="mt-4 flex-1 text-base font-medium leading-relaxed text-ink">
                &ldquo;Empresa extremamente competente e séria. Ajudando
                sempre a conquistar nossos sonhos de moradia própria.&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-ink">
                  Laisla Esteves Palermo
                </p>
                <p className="text-xs text-ink/45">
                  Depoimento verificado de cliente
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex h-full flex-col items-center justify-center gap-3 rounded-[1.5rem] border border-ink/10 bg-white p-7 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light">
                <Landmark className="h-7 w-7 text-brand" strokeWidth={1.8} />
              </span>
              <p className="font-display text-lg font-extrabold text-ink">
                Caixa Econômica Federal
              </p>
              <p className="text-xs leading-relaxed text-ink/50">
                Financiamento e garantia oficial do programa Minha Casa Minha
                Vida
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
