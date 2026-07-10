"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const WHATSAPP_NUMBER = "5511999999999";

const properties = [
  {
    city: "São José do Rio Preto",
    name: "Residencial Bosque Real",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1000&auto=format&fit=crop",
  },
  {
    city: "Votorantim",
    name: "Condomínio Único",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    city: "Araraquara",
    name: "Vila das Palmeiras",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000&auto=format&fit=crop",
  },
  {
    city: "Bauru",
    name: "Jardins do Vale",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1000&auto=format&fit=crop",
  },
  {
    city: "Sorocaba",
    name: "Recanto das Flores",
    image:
      "https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=1000&auto=format&fit=crop",
  },
  {
    city: "Marília",
    name: "Vila Bela Vista",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function Properties() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="imoveis" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal className="max-w-lg">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              Empreendimentos
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              Condomínios com segurança para sua família
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/55 sm:text-base">
              Confira os imóveis na planta associados ao Minha Casa Minha
              Vida em diversas cidades do estado.
            </p>
          </Reveal>

          <div className="flex shrink-0 gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/12 text-ink/60 transition-colors hover:bg-ink/5"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Próximo"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/12 text-ink/60 transition-colors hover:bg-ink/5"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <Reveal delay={0.12}>
        <div
          ref={trackRef}
          className="hide-scrollbar mt-12 flex gap-5 overflow-x-auto px-6 pb-2 [scroll-snap-type:x_mandatory] sm:px-[calc((100vw-72rem)/2+1.5rem)]"
        >
          {properties.map((p) => (
            <div
              key={p.name}
              className="group relative h-[22rem] w-[17rem] shrink-0 overflow-hidden rounded-[1.5rem] shadow-[0_20px_50px_-24px_rgba(28,25,18,0.35)] [scroll-snap-align:start]"
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="280px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="flex items-center gap-1.5 text-xs font-medium text-cream/70">
                  <MapPin className="h-3.5 w-3.5" />
                  {p.city}
                </p>
                <p className="font-display mt-1 text-lg font-bold text-cream">
                  {p.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mx-auto mt-10 max-w-6xl px-6">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
        >
          Quero visitar um decorado
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
