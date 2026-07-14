import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Gabriel Vale",
    quote:
      "Me deram total suporte pra compra do meu imóvel! Recomendo demais.",
    photo: "/testimonial-gabriel.jpg",
  },
  {
    name: "Gabrielle Massafera",
    quote:
      "Empresa muito profissional e dedicada a realizar sonhos dos seus clientes em conquistar o apartamento próprio. Atendimento individualizado e personalizado à necessidade de cada um.",
    photo: "/testimonial-gabrielle.jpg",
  },
  {
    name: "Laisla Esteves Palermo",
    quote:
      "Empresa extremamente competente e séria. Ajudando sempre a conquistar nossos sonhos de moradia própria.",
    photo: "/testimonial-laisla.jpg",
  },
  {
    name: "Heloisa Ferreira",
    quote: "Muito bom atendimento, seriedade no trabalho! Sempre recomendarei.",
    photo: "/testimonial-heloisa.jpg",
  },
  {
    name: "Ednea Cardoso",
    quote: "Profissionalismo, competência e conhecimento do projeto.",
    photo: "/testimonial-ednea.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-cream-soft py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Depoimentos
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Mais de 5.000 famílias conquistaram seu imóvel com a Hinode
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base font-medium text-ink/50">
            Depoimentos reais de quem já conquistou seu imóvel com a gente
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.06} y={20}>
            <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_20px_45px_-30px_rgba(18,22,44,0.35)]">
              <div className="flex items-center gap-3">
                <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 text-base font-semibold text-ink">
                    <span className="truncate">{t.name}</span>
                    <BadgeCheck
                      className="h-4 w-4 shrink-0 text-brand"
                      strokeWidth={2.4}
                    />
                  </p>
                </div>
              </div>

              <p className="mt-4 flex-1 text-base leading-relaxed text-ink/70">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
