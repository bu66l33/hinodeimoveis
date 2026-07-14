"use client";

import Image from "next/image";
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
          <p className="mt-5 text-base font-medium leading-relaxed text-ink/60 sm:text-lg">
            A Hinode Imóveis é uma imobiliária especialista que te ajuda, sem
            custo, a acessar o maior programa habitacional do Brasil — com
            financiamento e garantias oficiais diretamente pela Caixa.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Reveal delay={0.05} className="sm:col-span-2">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] bg-ink p-7 shadow-[0_25px_55px_-30px_rgba(18,22,44,0.4)] sm:p-9">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-[90px]" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-brand/30 blur-[90px]" />

              <div className="relative">
                <span className="inline-flex items-center rounded-full bg-cream px-3.5 py-2 shadow-[0_10px_25px_-10px_rgba(0,0,0,0.5)]">
                  <span className="relative h-6 w-32 sm:h-7 sm:w-36">
                    <Image
                      src="/mcmv-logo.png"
                      alt="Minha Casa Minha Vida"
                      fill
                      sizes="150px"
                      className="object-contain object-left"
                    />
                  </span>
                </span>
                <p className="mt-5 max-w-sm text-lg font-semibold leading-snug text-cream sm:text-xl">
                  Com renda a partir de{" "}
                  <span className="text-accent">R$ 3.000</span>, sua família
                  já pode conquistar a casa própria.
                </p>
                <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-cream/60">
                  É mais fácil do que parece: a Hinode Imóveis cuida de toda a
                  aprovação junto à Caixa, sem custo nenhum pra você.
                </p>
              </div>

              <div className="relative mt-8 grid grid-cols-2 gap-4 sm:mt-10">
                <div>
                  <p className="font-display text-2xl font-extrabold text-accent sm:text-3xl">
                    R$ 599
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-cream/55">
                    parcela a partir de/mês
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-extrabold text-accent sm:text-3xl">
                    R$ 55 mil
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-cream/55">
                    subsídio do governo
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
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
