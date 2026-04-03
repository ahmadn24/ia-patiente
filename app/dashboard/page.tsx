import Link from "next/link";

export const metadata = {
  title: "Dashboard — IA Patiente",
};

const conversations = [
  {
    patient: "Jean-Pierre M.",
    preview: "Bonjour, j'ai besoin de renouveler mon ordonnance...",
    time: "Il y a 12 min",
    status: "Répondu",
  },
  {
    patient: "Annette B.",
    preview: "J'ai une douleur forte depuis ce matin",
    time: "Il y a 34 min",
    status: "Alerte",
  },
  {
    patient: "Michel R.",
    preview: "Est-ce que Mme Dupont passe demain matin ?",
    time: "Il y a 1h",
    status: "Répondu",
  },
  {
    patient: "Françoise L.",
    preview: "Je voudrais prendre rendez-vous pour la semaine prochaine",
    time: "Il y a 2h",
    status: "En attente",
  },
  {
    patient: "Henri D.",
    preview: "Merci pour votre réponse, à mardi alors",
    time: "Il y a 3h",
    status: "Répondu",
  },
];

const statusColor: Record<string, string> = {
  Répondu: "text-green-400 bg-green-400/10",
  Alerte: "text-orange-400 bg-orange-400/10",
  "En attente": "text-[#888] bg-[#1a1a1a]",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r border-[#1a1a1a] flex flex-col">
        <div className="h-14 flex items-center px-5 border-b border-[#1a1a1a]">
          <Link
            href="/"
            className="font-semibold text-[#e5e5e5] text-sm tracking-tight"
          >
            IA Patiente
          </Link>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {[
            { label: "Tableau de bord", active: true },
            { label: "Conversations", active: false },
            { label: "Alertes", active: false },
            { label: "Résumé", active: false },
            { label: "Paramètres", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                item.active
                  ? "bg-[#111] text-[#e5e5e5]"
                  : "text-[#888] hover:text-[#e5e5e5] hover:bg-[#111]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 border-b border-[#1a1a1a] flex items-center justify-between px-6">
          <h1 className="text-sm font-medium text-[#e5e5e5]">
            Tableau de bord
          </h1>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs font-medium text-[#e5e5e5]">
                Marie Dupont, IDEL Paris
              </p>
              <p className="text-[10px] text-[#888]">Infirmière libérale</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#4A9FFF] flex items-center justify-center text-white text-xs font-semibold">
              MD
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                label: "Messages traités",
                value: "47",
                trend: "+12 cette semaine",
              },
              {
                label: "Urgences détectées",
                value: "2",
                trend: "Alertes envoyées",
              },
              {
                label: "RDV demandés",
                value: "8",
                trend: "+3 aujourd'hui",
              },
              {
                label: "Patients actifs",
                value: "23",
                trend: "Ce mois-ci",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#111] border border-[#1a1a1a] rounded-xl p-5"
              >
                <p className="text-xs text-[#888] mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-[#e5e5e5] mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-[#555]">{stat.trend}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Conversations */}
            <div className="lg:col-span-2 bg-[#111] border border-[#1a1a1a] rounded-xl overflow-hidden">
              <div className="px-5 py-4 border-b border-[#1a1a1a]">
                <h2 className="text-sm font-medium text-[#e5e5e5]">
                  Conversations récentes
                </h2>
              </div>
              <div className="divide-y divide-[#1a1a1a]">
                {conversations.map((conv) => (
                  <div
                    key={conv.patient}
                    className="px-5 py-4 flex items-center gap-4 hover:bg-[#0A0A0A] transition-colors cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#888] text-xs font-medium shrink-0">
                      {conv.patient
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#e5e5e5] truncate">
                        {conv.patient}
                      </p>
                      <p className="text-xs text-[#888] truncate">
                        {conv.preview}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-[#555] mb-1">{conv.time}</p>
                      <span
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${statusColor[conv.status]}`}
                      >
                        {conv.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Config card */}
            <div className="flex flex-col gap-4">
              <div className="bg-[#111] border border-[#1a1a1a] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <p className="text-xs text-[#888]">IA active</p>
                </div>
                <p className="text-sm font-medium text-[#e5e5e5] mb-1">
                  Votre IA s&apos;appelle Marie
                </p>
                <p className="text-xs text-[#888] mb-4">
                  Active depuis 3 jours · 47 messages gérés
                </p>
                <div className="space-y-2 text-xs text-[#888]">
                  <div className="flex justify-between">
                    <span>Horaires</span>
                    <span className="text-[#e5e5e5]">
                      Lun-Ven 8h-18h, Sam 8h-12h
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Urgences</span>
                    <span className="text-green-400">Activé</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Résumé quotidien</span>
                    <span className="text-green-400">18h00</span>
                  </div>
                </div>
                <button className="mt-5 w-full text-xs text-[#888] hover:text-[#e5e5e5] border border-[#1a1a1a] hover:border-[#333] rounded-md py-2 transition-colors">
                  Modifier les paramètres
                </button>
              </div>

              <div className="bg-[#111] border border-[#1a1a1a] rounded-xl p-5">
                <p className="text-xs text-[#888] mb-2">
                  Lien à partager à vos patients
                </p>
                <code className="text-xs text-[#4A9FFF] break-all">
                  ia-patiente.fr/p/marie-dupont
                </code>
                <button className="mt-3 w-full text-xs text-[#888] hover:text-[#e5e5e5] border border-[#1a1a1a] hover:border-[#333] rounded-md py-2 transition-colors">
                  Copier le lien
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
