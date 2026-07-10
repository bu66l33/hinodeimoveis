"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const WHATSAPP_NUMBER = "5511999999999";

export default function FinalCTA() {
  return (
    <section id="contato" className="px-4 py-6 sm:px-6">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="absolute inset-0 opacity-[0.14]">
            <Image
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1600&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-cream/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Fale agora com a Hinode Imóveis
            </span>
            <h2 className="font-display mx-auto mt-6 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-cream sm:text-5xl">
              Talvez você seja a próxima família a realizar esse sonho
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream/60 sm:text-base">
              Fale agora com nossa equipe e descubra, sem custo, se você tem
              direito ao Minha Casa Minha Vida.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-cream shadow-[0_20px_50px_-16px_rgba(181,80,47,0.7)] transition-transform hover:-translate-y-0.5"
            >
              Quero minha simulação gratuita
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
