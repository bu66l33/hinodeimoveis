import { Users, Wallet, Award } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { icon: Users, value: "5.000+", label: "famílias atendidas" },
  { icon: Wallet, value: "R$ 55 mil", label: "de subsídio disponível" },
  { icon: Award, value: "9 anos", label: "de experiência no setor" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-ink/8 bg-white">
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-y-8 px-6 py-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-ink/8 sm:py-12">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} y={16}>
            <div className="flex flex-col items-center gap-2.5 text-center sm:px-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light">
                <s.icon className="h-6 w-6 text-brand" strokeWidth={2.3} />
              </span>
              <p className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                {s.value}
              </p>
              <p className="text-sm font-medium text-ink/50">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
