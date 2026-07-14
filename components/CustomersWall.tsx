"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const photos = [
  "/customer-1.jpg",
  "/customer-2.jpg",
  "/customer-3.jpg",
  "/customer-4.jpg",
  "/customer-5.jpg",
  "/customer-6.jpg",
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
    <section className="bg-ink py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
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
          <div
            className="relative mx-auto overflow-hidden rounded-[1.75rem] shadow-[0_30px_70px_-24px_rgba(0,0,0,0.6)]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative h-[340px] w-full bg-ink-soft sm:h-[520px]">
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
                    sizes="(max-width: 640px) 100vw, 720px"
                    className="scale-110 object-cover opacity-50 blur-2xl"
                  />
                  <Image
                    src={photos[index]}
                    alt="Cliente Hinode Imóveis realizou seu sonho da casa própria"
                    fill
                    sizes="(max-width: 640px) 100vw, 720px"
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
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink shadow-lg transition-transform hover:scale-105"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Próxima foto"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink shadow-lg transition-transform hover:scale-105"
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
