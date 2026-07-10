"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;
const WHATSAPP_NUMBER = "5511999999999";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);

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
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-ink/65">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Minha Casa Minha Vida &middot; Simulação 100% gratuita
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display mt-6 max-w-xl text-[2.7rem] font-extrabold leading-[1.06] tracking-tight text-ink sm:text-[3.5rem]">
              Sua casa própria custa{" "}
              <span className="highlight-mark">menos</span> do que você
              imagina
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/60 sm:text-lg">
              Parcelas a partir de R$ 399 por mês e subsídio de até R$ 55 mil
              do governo federal. Fale com nossa equipe e descubra sua faixa
              em 5 minutos, sem sair de casa.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <form
              onSubmit={onSubmit}
              className="mt-9 flex max-w-xl flex-col gap-3 rounded-2xl border border-ink/10 bg-white p-3 shadow-[0_20px_50px_-24px_rgba(28,25,18,0.25)] sm:flex-row sm:items-center sm:gap-2 sm:p-2 sm:pl-5"
            >
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                placeholder="Seu nome"
                className="w-full min-w-0 flex-[0.85] bg-transparent px-2 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:outline-none sm:border-r sm:border-ink/10 sm:px-3"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                required
                placeholder="Seu WhatsApp"
                className="w-full min-w-0 flex-1 bg-transparent px-2 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:outline-none sm:px-3"
              />
              <button
                type="submit"
                className="group flex w-full shrink-0 items-center justify-center gap-1.5 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Quero ser atendido
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-ink/55">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-brand" />
                Atendimento 100% gratuito
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-accent-dark text-accent-dark" />
                4.9/5 em mais de 500 famílias
              </span>
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative"
        >
          <motion.div
            style={{ y }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(28,25,18,0.4)]"
          >
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop"
              alt="Família em sua nova casa própria"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 44vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
          </motion.div>

          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-ink/10 bg-white px-6 py-4 shadow-[0_20px_50px_-20px_rgba(28,25,18,0.3)] sm:-bottom-8 sm:-left-8">
            <p className="font-display text-3xl font-extrabold text-ink">
              R$ 399<span className="text-base font-medium text-ink/50">/mês</span>
            </p>
            <p className="mt-0.5 text-xs font-medium text-ink/50">
              parcelas que cabem no seu bolso
            </p>
          </div>

          <div className="absolute -top-5 right-4 rounded-full border border-ink/10 bg-cream px-4 py-2 text-xs font-semibold text-ink/70 shadow-sm sm:right-8">
            + 500 famílias atendidas
          </div>
        </motion.div>
      </div>
    </section>
  );
}
