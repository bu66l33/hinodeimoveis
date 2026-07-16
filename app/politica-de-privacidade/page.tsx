import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/Logo";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidade — Hinode Imóveis",
  description:
    "Saiba como a Hinode Imóveis trata as informações fornecidas em nosso site.",
};

export default function PoliticaDePrivacidade() {
  return (
    <>
      <div className="bg-cream-soft py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-ink/60 transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.4} />
            Voltar ao site
          </Link>

          <Logo full className="h-16 w-auto" />

          <h1 className="font-display mt-8 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-sm font-medium text-ink/50">
            Última atualização: julho de 2026
          </p>

          <div className="prose-hinode mt-10 space-y-8 text-base leading-relaxed text-ink/70">
            <section>
              <h2 className="font-display text-xl font-extrabold text-ink">
                1. Sobre este site
              </h2>
              <p className="mt-3">
                Este site é uma landing page institucional da Hinode Imóveis,
                utilizada exclusivamente para apresentar nossos serviços de
                assessoria gratuita para aquisição de imóveis pelo programa
                Minha Casa Minha Vida. Não realizamos vendas, cadastros de
                usuário ou qualquer tipo de transação financeira diretamente
                por aqui.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-extrabold text-ink">
                2. Quais dados coletamos
              </h2>
              <p className="mt-3">
                Coletamos apenas as informações que você nos envia
                voluntariamente ao preencher o formulário de simulação ou ao
                iniciar uma conversa pelo WhatsApp: seu nome e número de
                telefone. Não solicitamos nem armazenamos dados sensíveis,
                como CPF, RG, informações bancárias, senhas ou dados de
                cartão de crédito através deste site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-extrabold text-ink">
                3. Como usamos suas informações
              </h2>
              <p className="mt-3">
                As informações fornecidas são usadas exclusivamente para que
                nossa equipe possa entrar em contato com você e dar
                continuidade ao atendimento sobre sua simulação do Minha Casa
                Minha Vida. Não compartilhamos, vendemos ou repassamos seus
                dados a terceiros para fins de marketing ou qualquer outra
                finalidade.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-extrabold text-ink">
                4. Cookies e navegação
              </h2>
              <p className="mt-3">
                Este site pode utilizar cookies e ferramentas de análise
                básicas apenas para entender o desempenho das páginas e
                melhorar sua experiência de navegação. Nenhuma dessas
                ferramentas coleta dados pessoais sensíveis.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-extrabold text-ink">
                5. Seus direitos
              </h2>
              <p className="mt-3">
                Você pode, a qualquer momento, solicitar a exclusão dos seus
                dados de contato de nossos registros, bastando enviar essa
                solicitação através do nosso WhatsApp oficial. Levamos sua
                privacidade a sério e atenderemos ao seu pedido o mais rápido
                possível.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-extrabold text-ink">
                6. Contato
              </h2>
              <p className="mt-3">
                Em caso de dúvidas sobre esta política ou sobre o uso das
                suas informações, entre em contato conosco pelo WhatsApp
                disponível em nosso site.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
