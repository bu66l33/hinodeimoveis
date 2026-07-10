"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const WHATSAPP_NUMBER = "5511999999999";

export default function Benefit() {
  return (
    <section id="sobre" className="py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-30px_rgba(28,25,18,0.4)]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
              alt="Equipe Hinode Imóveis"
              width={900}
              height={700}
              className="aspect-[4/3.2] w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/70 to-transparent p-6">
              <p className="text-sm font-medium text-cream">
                Escritório Hinode Imóveis
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            <Sparkles className="h-4 w-4" strokeWidth={2.3} />
            Benefício federal
          </span>
          <h2 className="font-display mt-4 max-w-md text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Subsídio de até R$ 55 mil para comprar seu primeiro imóvel
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/60">
            Cada família recebe do governo um benefício diferente, de acordo
            com sua renda e condição. Nossa equipe te ajuda, sem custo, a
            descobrir em qual faixa você se encaixa e qual imóvel cabe no seu
            orçamento.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-base font-semibold text-cream transition-transform hover:-translate-y-0.5"
          >
            Quero apoio gratuito
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
