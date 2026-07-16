"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

export default function TrustSection() {
  return (
    <section id="mcmv" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Segurança no financiamento
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            O Minha Casa Minha Vida é garantido pela Caixa Econômica Federal
          </h2>
          <p className="mt-5 text-base font-medium leading-relaxed text-ink/60 sm:text-lg">
            A Hinode Imóveis é uma imobiliária especialista que te ajuda, sem
            custo, a acessar o maior programa habitacional do Brasil — com
            financiamento e garantias oficiais diretamente pela Caixa.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="flex h-full flex-col items-center justify-center gap-5 rounded-[1.5rem] border border-ink/10 bg-white p-6 text-center">
              <div className="relative h-10 w-full max-w-[150px] sm:h-11 sm:max-w-[170px]">
                <Image
                  src="/mcmv-logo.png"
                  alt="Minha Casa Minha Vida"
                  fill
                  sizes="170px"
                  className="object-contain"
                />
              </div>
              <p className="text-sm leading-relaxed text-ink/50">
                O maior programa habitacional do Brasil, com subsídio de até
                R$ 55 mil e parcelas a partir de R$ 599 por mês
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col items-center justify-center gap-5 rounded-[1.5rem] border border-ink/10 bg-white p-6 text-center">
              <div className="relative h-10 w-full max-w-[120px] sm:h-11 sm:max-w-[135px]">
                <Image
                  src="/caixa-logo.png"
                  alt="Caixa Econômica Federal"
                  fill
                  sizes="135px"
                  className="object-contain"
                />
              </div>
              <p className="text-sm leading-relaxed text-ink/50">
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
