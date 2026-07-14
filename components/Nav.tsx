"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

const WHATSAPP_NUMBER = "5511988857473";
const WHATSAPP_MESSAGE =
  "Olá! Quero saber se tenho direito ao Minha Casa Minha Vida com a Hinode Imóveis.";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const links = [
  { href: "#sobre", label: "Sobre nós" },
  { href: "#processo", label: "Como funciona" },
  { href: "#imoveis", label: "Imóveis" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 whitespace-nowrap bg-ink px-4 py-2.5 text-center text-[0.7rem] font-semibold text-cream sm:text-sm">
        Parcelas a partir de{" "}
        <span className="text-accent">R$ 599/mês</span>{" "}
        <span className="hidden sm:inline">
          pelo Minha Casa Minha Vida — simulação 100% gratuita
        </span>
      </div>
      <header className="fixed inset-x-0 top-10 z-50 flex justify-center px-4 pt-3 sm:top-11 sm:pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`relative flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "glass shadow-[0_8px_40px_-14px_rgba(28,25,18,0.25)]"
            : "bg-transparent"
        }`}
      >
        <a
          href="#top"
          aria-label="Hinode Imóveis"
          className="max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2"
        >
          <Logo />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.95rem] font-semibold text-ink/65 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5 max-lg:ml-auto">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-cream shadow-[0_10px_26px_-10px_rgba(181,80,47,0.7)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Fale conosco
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink lg:hidden"
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass absolute inset-x-4 top-20 rounded-2xl p-4 shadow-xl lg:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-ink/75 hover:bg-ink/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-center text-base font-semibold text-cream"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Fale conosco
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
