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
            <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink/90" />
          </div>

          <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center sm:px-14 sm:py-24">
            <Reveal>
              <span className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2.5 ring-1 ring-cream/20 backdrop-blur-md">
                <Image
                  src="/mcmv-logo.png"
                  alt="Minha Casa Minha Vida"
                  width={556}
                  height={176}
                  className="h-8 w-auto sm:h-10"
                />
                <span className="h-5 w-px bg-cream/25" />
                <span className="text-xs font-semibold tracking-wide text-cream/90 sm:text-sm">
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
              <div className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3 shadow-[0_18px_40px_-14px_rgba(246,214,103,0.7)]">
                <span className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                  R$ 599
                </span>
                <span className="text-sm font-bold text-ink/70 sm:text-base">
                  /mês
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
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
                <span className="flex items-center gap-2 text-sm font-medium text-cream/70">
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
                  <p className="text-left text-sm font-medium leading-snug text-cream/80">
                    <span className="font-bold text-cream">+5.000 famílias</span>{" "}
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
