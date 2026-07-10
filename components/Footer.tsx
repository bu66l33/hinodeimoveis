import { Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";
import { WorkWithUsLink } from "./WorkWithUsLink";

const columns = [
  {
    title: "Empresa",
    links: ["Sobre nós", "Trabalhe conosco", "Contato"],
  },
  {
    title: "Imóveis",
    links: ["Empreendimentos", "Minha Casa Minha Vida", "Simulação gratuita"],
  },
  {
    title: "Suporte",
    links: ["Central de ajuda", "Portal do cliente", "Política de privacidade"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 border-b border-cream/10 pb-14 sm:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo light full />
            <p className="mt-5 max-w-xs text-base leading-relaxed text-cream/50">
              Ajudamos famílias brasileiras a conquistar a casa própria
              através do Minha Casa Minha Vida, com atendimento humano e
              gratuito do início ao fim.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Rede social"
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-cream/20 text-cream/70 transition-colors hover:bg-cream/10 hover:text-cream"
                >
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/40">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) =>
                  l === "Trabalhe conosco" ? (
                    <li key={l}>
                      <WorkWithUsLink />
                    </li>
                  ) : (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-base text-cream/60 transition-colors hover:text-cream"
                      >
                        {l}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-cream/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Hinode Imóveis. Todos os direitos reservados.</p>
          <p className="max-w-md text-center sm:text-right">
            A Hinode Imóveis é uma imobiliária especialista em Minha Casa
            Minha Vida e não possui vínculo oficial com a Caixa Econômica
            Federal.
          </p>
        </div>
      </div>
    </footer>
  );
}
