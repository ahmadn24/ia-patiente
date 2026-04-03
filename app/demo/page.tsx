import Link from "next/link";
import ChatDemo from "@/components/ChatDemo";

export const metadata = {
  title: "Démo — IA Patiente",
  description: "Essayez l'IA Patiente en direct.",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col">
      {/* Navbar */}
      <nav className="border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="font-semibold text-[#e5e5e5] text-sm tracking-tight"
          >
            IA Patiente
          </Link>
          <Link
            href="/#tarifs"
            className="text-sm bg-[#4A9FFF] hover:bg-[#3d8fe8] text-white rounded-md px-4 py-1.5 transition-colors font-medium"
          >
            Commencer
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#e5e5e5] mb-3">
              Essayez IA Patiente
            </h1>
            <p className="text-[#888] text-sm leading-relaxed">
              Discutez avec notre IA comme le ferait un de vos patients.
              <br />
              Elle est configurée pour Mme Marie Dupont, IDEL à Paris.
            </p>
          </div>

          <ChatDemo />

          <div className="mt-8 text-center">
            <p className="text-sm text-[#888] mb-3">
              Vous voulez ça pour vos patients ?
            </p>
            <Link
              href="/#tarifs"
              className="inline-flex items-center gap-2 bg-[#4A9FFF] hover:bg-[#3d8fe8] text-white text-sm font-medium rounded-md px-5 py-2.5 transition-colors"
            >
              Commencer — 14 jours gratuits
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
      </div>
    </div>
  );
}
