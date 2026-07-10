"use client";

import { useState } from "react";
import { CheckCircle2, Home } from "lucide-react";
import { Reveal } from "./Reveal";

const WHATSAPP_NUMBER = "5511999999999";

export default function MidOffer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${name || "___"}. Vi a simulação de R$399/mês e quero saber se tenho direito ao Minha Casa Minha Vida. Meu WhatsApp: ${
      phone || "___"
    }`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="px-4 py-6 sm:px-6">
      <Reveal>
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-ink/10 bg-white px-8 py-12 shadow-[0_30px_70px_-40px_rgba(18,22,44,0.35)] sm:px-14 sm:py-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand">
                <Home className="h-3.5 w-3.5" />
                Minha Casa Minha Vida
              </span>
              <h2 className="font-display mt-5 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
                Casa própria a partir de{" "}
                <span className="highlight-mark">R$ 399</span> por mês
              </h2>
              <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-ink/60 sm:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                Você já pode ter esse direito e ainda não sabe. Descubra agora
                mesmo, sem custo e sem compromisso.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-3 rounded-2xl bg-cream-soft p-3"
            >
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                placeholder="Seu nome"
                className="w-full rounded-xl bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                required
                placeholder="Seu WhatsApp com DDD"
                className="w-full rounded-xl bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-brand px-5 py-3.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
              >
                Quero ser atendido
              </button>
              <p className="px-1 pb-1 pt-1 text-center text-xs leading-relaxed text-ink/40">
                O Minha Casa Minha Vida foi feito para beneficiar milhões de
                famílias brasileiras. Talvez você seja uma delas.
              </p>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
