import Link from "next/link";
import FaqSection from "@/components/FaqSection";

export default function HomePage() {
  return (
    <div className="bg-[#0A0A0A]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a1a1a] bg-[#0A0A0A]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold text-[#e5e5e5] text-sm tracking-tight">
            IA Patiente
          </span>
          <div className="flex items-center gap-2">
            <Link
              href="/demo"
              className="text-sm text-[#888] hover:text-[#e5e5e5] transition-colors px-3 py-1.5"
            >
              Voir la démo
            </Link>
            <Link
              href="/demo"
              className="text-sm bg-[#4A9FFF] hover:bg-[#3d8fe8] text-white rounded-md px-4 py-1.5 transition-colors font-medium"
            >
              Commencer
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs bg-[#111] border border-[#1a1a1a] text-[#888] rounded-full px-3 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A9FFF] shrink-0"></span>
            Nouveau — Avenant 11 compatible
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#e5e5e5] leading-tight tracking-tight mb-6">
            Vos patients répondus.
            <br />
            24h/7j.
          </h1>
          <p className="text-lg text-[#888] max-w-xl mx-auto mb-10 leading-relaxed">
            Votre IA répond aux questions de vos patients, filtre les urgences
            et vous alerte. Vous restez disponible sans être joignable.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <Link
              href="/demo"
              className="bg-[#4A9FFF] hover:bg-[#3d8fe8] text-white text-sm font-medium rounded-md px-6 py-3 transition-colors"
            >
              Essayer gratuitement
            </Link>
            <Link
              href="/demo"
              className="border border-[#1a1a1a] hover:border-[#333] text-[#e5e5e5] text-sm font-medium rounded-md px-6 py-3 transition-colors"
            >
              Voir la démo
            </Link>
          </div>
          <div className="flex flex-wrap gap-8 justify-center text-sm text-[#555]">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#555]"></span>
              2 min de configuration
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#555]"></span>
              0 appel nocturne
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#555]"></span>
              39€/mois
            </span>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-medium text-[#4A9FFF] uppercase tracking-widest text-center mb-4">
            Le problème
          </p>
          <h2 className="text-3xl font-bold text-[#e5e5e5] text-center mb-12">
            Vous ne pouvez pas tout ignorer.
            <br />
            Mais vous ne pouvez pas tout gérer.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                time: "3h du matin, un SMS patient",
                desc: "Vous ne pouvez pas ignorer — et si c'est grave ? Mais vous ne pouvez pas répondre à toute heure non plus.",
              },
              {
                time: "Les mêmes questions, 10x par semaine",
                desc: "Ordonnances, horaires, rendez-vous. Chaque réponse prend du temps. Multiplié par des dizaines de patients.",
              },
              {
                time: "Peur de rater une vraie urgence",
                desc: "Noyée dans les messages non-urgents, la vraie urgence peut passer inaperçue. Ce risque pèse.",
              },
            ].map((card) => (
              <div
                key={card.time}
                className="bg-[#111] border border-[#1a1a1a] rounded-xl p-6"
              >
                <p className="text-sm font-semibold text-[#e5e5e5] mb-3">
                  {card.time}
                </p>
                <p className="text-sm text-[#888] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-medium text-[#4A9FFF] uppercase tracking-widest text-center mb-4">
            La solution
          </p>
          <h2 className="text-3xl font-bold text-[#e5e5e5] text-center mb-12">
            Opérationnel en 2 minutes.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Configurez en 2 min",
                desc: "Nom, spécialité, vos horaires, mots-clés urgences. Tout se règle en quelques clics depuis le dashboard.",
              },
              {
                num: "02",
                title: "Partagez le lien",
                desc: "Un lien unique à vos patients — par SMS ou sur votre ordonnancier. Aucune application à installer.",
              },
              {
                num: "03",
                title: "L'IA prend le relais",
                desc: "Elle répond, filtre, et vous alerte si besoin. Vous recevez un résumé quotidien.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-5">
                <span className="text-3xl font-bold text-[#1a1a1a] shrink-0 leading-none mt-1">
                  {step.num}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#e5e5e5] mb-2">
                    {step.title}
                  </p>
                  <p className="text-sm text-[#888] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-lg mx-auto">
          <p className="text-xs font-medium text-[#4A9FFF] uppercase tracking-widest text-center mb-4">
            Aperçu
          </p>
          <h2 className="text-3xl font-bold text-[#e5e5e5] text-center mb-10">
            Voyez-la en action.
          </h2>
          <div className="bg-[#111] border border-[#1a1a1a] rounded-xl overflow-hidden">
            {/* Chat header */}
            <div className="px-5 py-4 border-b border-[#1a1a1a] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#4A9FFF] flex items-center justify-center text-white text-xs font-semibold">
                IA
              </div>
              <div>
                <p className="text-sm font-medium text-[#e5e5e5]">
                  IA de Mme Dupont
                </p>
                <p className="text-xs text-[#888]">Infirmière libérale, Paris</p>
              </div>
            </div>
            {/* Messages */}
            <div className="px-5 py-5 space-y-4">
              {/* Patient */}
              <div className="flex justify-end">
                <div className="bg-[#4A9FFF] text-white rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[80%] text-sm leading-relaxed">
                  Bonjour, j&apos;ai besoin d&apos;un renouvellement
                  d&apos;ordonnance pour mes pansements
                </div>
              </div>
              {/* IA */}
              <div className="flex justify-start gap-2">
                <div className="w-6 h-6 rounded-full bg-[#4A9FFF]/20 flex items-center justify-center text-[#4A9FFF] text-[10px] font-semibold shrink-0 mt-1">
                  IA
                </div>
                <div className="bg-[#1a1a1a] text-[#e5e5e5] rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[80%] text-sm leading-relaxed">
                  Bonjour ! Je transmets votre demande à Mme Dupont. Elle pourra
                  en parler avec votre médecin lors de sa prochaine visite chez
                  vous, prévue le mardi. Avez-vous d&apos;autres questions ?
                </div>
              </div>
              {/* Patient 2 */}
              <div className="flex justify-end">
                <div className="bg-[#4A9FFF] text-white rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[80%] text-sm leading-relaxed">
                  Oui, c&apos;est urgent j&apos;ai mal
                </div>
              </div>
              {/* IA urgent */}
              <div className="flex justify-start gap-2">
                <div className="w-6 h-6 rounded-full bg-[#4A9FFF]/20 flex items-center justify-center text-[#4A9FFF] text-[10px] font-semibold shrink-0 mt-1">
                  IA
                </div>
                <div className="bg-[#1a1a1a] border border-orange-500/30 text-[#e5e5e5] rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[80%] text-sm leading-relaxed">
                  ⚠️ Je transmets votre message en urgence à Mme Dupont. Si la
                  douleur est forte, appelez le{" "}
                  <span className="font-semibold">15 (SAMU)</span>. Mme Dupont a
                  été alertée.
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 text-sm text-[#4A9FFF] hover:text-[#3d8fe8] transition-colors font-medium"
            >
              Essayer la vraie démo
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="tarifs" className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-sm mx-auto">
          <p className="text-xs font-medium text-[#4A9FFF] uppercase tracking-widest text-center mb-4">
            Tarifs
          </p>
          <h2 className="text-3xl font-bold text-[#e5e5e5] text-center mb-10">
            Simple et transparent.
          </h2>
          <div className="bg-[#111] border border-[#1a1a1a] rounded-xl p-8">
            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-bold text-[#e5e5e5]">39€</span>
              <span className="text-[#888] mb-1">/mois</span>
            </div>
            <p className="text-sm text-[#888] mb-6">
              14 jours gratuits · sans CB · sans engagement
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Réponses IA illimitées",
                "Détection urgences",
                "Résumé quotidien",
                "Lien patient personnalisé",
                "Support email",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <svg
                    className="w-4 h-4 text-[#4A9FFF] shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#e5e5e5]">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/demo"
              className="block w-full text-center bg-[#4A9FFF] hover:bg-[#3d8fe8] text-white text-sm font-medium rounded-md px-5 py-3 transition-colors"
            >
              Commencer gratuitement
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#e5e5e5] text-center mb-12">
            Elles l&apos;utilisent déjà.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                quote:
                  "Je dors enfin. Mes patients ont leurs réponses et moi j'ai ma nuit.",
                name: "Marie L.",
                role: "IDEL Paris 15e",
              },
              {
                quote:
                  "En 2 minutes c'était configuré. La première nuit, 4 messages gérés sans moi.",
                name: "Sophie R.",
                role: "IDEL Lyon",
              },
              {
                quote:
                  "J'avais peur que ce soit froid. Mes patients trouvent ça très humain.",
                name: "Claire M.",
                role: "IDEL Bordeaux",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-[#111] border border-[#1a1a1a] rounded-xl p-6"
              >
                <p className="text-sm text-[#e5e5e5] leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-medium text-[#e5e5e5]">{t.name}</p>
                  <p className="text-xs text-[#888]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="font-semibold text-[#e5e5e5] text-sm">
            IA Patiente
          </span>
          <div className="flex flex-wrap gap-6 text-sm text-[#888]">
            <Link href="/demo" className="hover:text-[#e5e5e5] transition-colors">
              Démo
            </Link>
            <a href="#tarifs" className="hover:text-[#e5e5e5] transition-colors">
              Tarifs
            </a>
            <Link href="/demo" className="hover:text-[#e5e5e5] transition-colors">
              Contact
            </Link>
            <a href="#" className="hover:text-[#e5e5e5] transition-colors">
              CGU
            </a>
          </div>
          <p className="text-xs text-[#555]">
            © {new Date().getFullYear()} IA Patiente
          </p>
        </div>
      </footer>
    </div>
  );
}
