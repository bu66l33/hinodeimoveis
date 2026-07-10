import { Building2, Users, Wallet, Award } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { icon: Users, value: "500+", label: "famílias atendidas" },
  { icon: Wallet, value: "R$ 55 mil", label: "de subsídio disponível" },
  { icon: Building2, value: "12", label: "empreendimentos parceiros" },
  { icon: Award, value: "9 anos", label: "de experiência no setor" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-ink/8 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-10 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-ink/8 sm:py-12">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} y={16}>
            <div className="flex flex-col items-center gap-2 text-center sm:px-6">
              <s.icon className="h-5 w-5 text-brand" strokeWidth={1.8} />
              <p className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                {s.value}
              </p>
              <p className="text-xs font-medium text-ink/50">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
