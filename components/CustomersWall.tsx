"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const WHATSAPP_NUMBER = "5511988857473";
const WHATSAPP_MESSAGE =
  "Olá! Quero fazer minha simulação gratuita do Minha Casa Minha Vida com a Hinode Imóveis.";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const photos = [
  "/customer-1.jpg",
  "/customer-2.jpg",
  "/customer-3.jpg",
  "/customer-4.jpg",
  "/customer-5.jpg",
  "/customer-6.jpg",
];

const stats = [
  { value: "+5.000", label: "famílias atendidas" },
  { value: "100%", label: "gratuito e sem compromisso" },
  { value: "5 min", label: "para sua primeira resposta" },
];

export default function CustomersWall() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % photos.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + photos.length) % photos.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-brand/30 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-accent/20 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <Quote className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
              Histórias reais
            </span>
            <h2 className="font-display mt-5 text-3xl font-extrabold leading-tight tracking-tight text-cream sm:text-4xl">
              Mais de 5.000 famílias já conquistaram o sonho da casa própria
              com a Hinode Imóveis.
            </h2>
            <p className="mt-5 max-w-md text-base font-medium leading-relaxed text-cream/70 sm:text-lg">
              Agora é a sua vez! Faça uma simulação gratuita e descubra as
              melhores condições para conquistar o seu imóvel.
            </p>

            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-5">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-extrabold text-accent sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-0.5 max-w-[9rem] text-xs font-semibold leading-snug text-cream/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-bold text-ink shadow-[0_20px_50px_-15px_rgba(246,214,103,0.6)] transition-transform hover:-translate-y-0.5"
            >
              Fazer minha simulação grátis
              <ArrowRight
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                strokeWidth={2.4}
              />
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 -z-10 rotate-2 rounded-[2rem] bg-gradient-to-br from-brand/40 to-accent/30 blur-sm" />

              <div
                className="relative overflow-hidden rounded-[1.75rem] ring-1 ring-cream/10 shadow-[0_30px_70px_-24px_rgba(0,0,0,0.6)]"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div className="relative h-[340px] w-full bg-ink-soft sm:h-[420px]">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={photos[index]}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={photos[index]}
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes="(max-width: 640px) 100vw, 480px"
                        className="scale-110 object-cover opacity-50 blur-2xl"
                      />
                      <Image
                        src={photos[index]}
                        alt="Cliente Hinode Imóveis realizou seu sonho da casa própria"
                        fill
                        sizes="(max-width: 640px) 100vw, 480px"
                        className="object-contain"
                        priority={index === 0}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <button
                  type="button"
                  onClick={prev}
                  aria-label="Foto anterior"
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink shadow-lg backdrop-blur transition-transform hover:scale-105"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Próxima foto"
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink shadow-lg backdrop-blur transition-transform hover:scale-105"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
                </button>

                <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
                  {photos.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Ir para foto ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        i === index ? "w-6 bg-accent" : "w-2 bg-cream/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 flex items-center gap-2.5 rounded-2xl bg-cream px-4 py-3 shadow-[0_20px_45px_-18px_rgba(0,0,0,0.5)] sm:-left-8">
                <div className="flex -space-x-0.5 text-accent-dark">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-xs font-bold text-ink">
                  Clientes satisfeitos
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
