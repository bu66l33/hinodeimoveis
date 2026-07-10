"use client";

import { useState } from "react";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";

export function WorkWithUsLink() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${
      name || "___"
    } e quero trabalhar na Hinode Imóveis. Área de interesse: ${
      area || "não informada"
    }. Meu WhatsApp: ${phone || "___"}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-sm text-cream/60 transition-colors hover:text-cream"
      >
        Trabalhe conosco
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 px-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-lg font-extrabold text-ink">
                  Trabalhe conosco
                </p>
                <p className="mt-1 text-sm text-ink/55">
                  Preencha seus dados e fale direto com nossa equipe pelo
                  WhatsApp.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink/40 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                placeholder="Seu nome"
                className="w-full rounded-xl border border-ink/10 bg-cream-soft px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                required
                placeholder="Seu WhatsApp"
                className="w-full rounded-xl border border-ink/10 bg-cream-soft px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
              <input
                value={area}
                onChange={(e) => setArea(e.target.value)}
                type="text"
                placeholder="Área de interesse (opcional)"
                className="w-full rounded-xl border border-ink/10 bg-cream-soft px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
              <button
                type="submit"
                className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
              >
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
