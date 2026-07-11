"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const WHATSAPP_NUMBER = "5511999999999";

export default function Hero() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${name || "___"}. Quero descobrir se tenho direito ao Minha Casa Minha Vida. Meu WhatsApp: ${
      phone || "___"
    }`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"
              alt="Família em sua nova casa própria"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/80 to-ink/95" />
          </div>

          <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center sm:px-14 sm:py-24">
            <Reveal>
              <span className="inline-flex items-center gap-3 rounded-full bg-cream px-4 py-2.5 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5)]">
                <Image
                  src="/mcmv-logo.png"
                  alt="Minha Casa Minha Vida"
                  width={556}
                  height={176}
                  className="h-8 w-auto sm:h-10"
                />
                <span className="h-5 w-px bg-ink/15" />
                <span className="text-xs font-bold tracking-wide text-ink sm:text-sm">
                  Simulação 100% gratuita
                </span>
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-display mt-7 max-w-2xl text-[2.4rem] font-extrabold leading-[1.08] tracking-tight text-cream sm:text-6xl">
                Sua casa própria custa{" "}
                <span className="highlight-mark">menos</span> do que você
                imagina
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-7 inline-flex flex-col items-center gap-0.5 rounded-[1.75rem] bg-accent px-9 py-4 shadow-[0_25px_60px_-15px_rgba(246,214,103,0.9)] ring-4 ring-cream/30 sm:px-11 sm:py-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-ink/60 sm:text-xs">
                  A partir de
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-extrabold leading-none text-ink sm:text-5xl">
                    R$ 599
                  </span>
                  <span className="text-base font-bold text-ink/70 sm:text-lg">
                    /mês
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-cream sm:text-lg">
                Parcelas que cabem no seu bolso e subsídio de até R$ 55 mil do
                governo federal. Fale com nossa equipe e descubra sua faixa em
                5 minutos, sem sair de casa.
              </p>
            </Reveal>

            <Reveal delay={0.28} className="mt-9 w-full">
              <form
                onSubmit={onSubmit}
                className="mx-auto flex w-full max-w-2xl flex-col gap-3 rounded-[1.75rem] bg-cream p-3 shadow-[0_30px_70px_-24px_rgba(0,0,0,0.55)] sm:flex-row sm:items-center sm:gap-2 sm:rounded-full sm:p-2.5 sm:pl-7"
              >
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                  placeholder="Seu nome"
                  className="w-full min-w-0 flex-[0.85] bg-transparent px-3 py-4 text-base text-ink placeholder:text-ink/35 focus:outline-none sm:border-r sm:border-ink/10 sm:px-4 sm:text-lg"
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  required
                  placeholder="Seu WhatsApp"
                  className="w-full min-w-0 flex-1 bg-transparent px-3 py-4 text-base text-ink placeholder:text-ink/35 focus:outline-none sm:px-4 sm:text-lg"
                />
                <button
                  type="submit"
                  className="group flex w-full shrink-0 items-center justify-center gap-1.5 rounded-2xl bg-brand px-7 py-4 text-base font-semibold text-cream transition-transform hover:-translate-y-0.5 sm:w-auto sm:rounded-full"
                >
                  Quero ser atendido
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    strokeWidth={2.4}
                  />
                </button>
              </form>
            </Reveal>

            <Reveal delay={0.36}>
              <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-9">
                <span className="flex items-center gap-2 text-sm font-semibold text-cream">
                  <ShieldCheck className="h-5 w-5 text-accent" strokeWidth={2.3} />
                  Atendimento 100% gratuito
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-bold text-ink ring-2 ring-ink">
                      MC
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-xs font-bold text-cream ring-2 ring-ink">
                      JS
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-xs font-bold text-ink ring-2 ring-ink">
                      RA
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-soft text-xs font-bold text-cream ring-2 ring-ink">
                      +
                    </span>
                  </div>
                  <p className="text-left text-sm font-semibold leading-snug text-cream">
                    <span className="font-extrabold text-accent">+5.000 famílias</span>{" "}
                    realizaram seu sonho conosco
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
