"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const photos = [
  "/customer-1.jpg",
  "/customer-2.jpg",
  "/customer-3.jpg",
  "/customer-4.jpg",
];

export default function CustomersWall() {
  return (
    <section className="bg-ink py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Histórias reais
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight text-cream sm:text-4xl">
            Mais de 5.000 famílias já realizaram seu sonho com a Hinode
          </h2>
          <p className="mt-5 text-base font-medium leading-relaxed text-cream/70 sm:text-lg">
            Você está próximo de conquistar o seu também, faça uma simulação
            grátis agora mesmo!
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {photos.map((src) => (
              <div
                key={src}
                className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-cream/10 sm:h-28 sm:w-28"
              >
                <Image
                  src={src}
                  alt="Cliente Hinode Imóveis realizou seu sonho da casa própria"
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-bold text-ink shadow-[0_20px_50px_-15px_rgba(246,214,103,0.6)] transition-transform hover:-translate-y-0.5"
          >
            Fazer minha simulação grátis
            <ArrowRight className="h-5 w-5" strokeWidth={2.4} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
