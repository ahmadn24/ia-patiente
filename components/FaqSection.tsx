"use client";

import { useState } from "react";

const FAQ = [
  {
    q: "Est-ce que l'IA remplace mon jugement médical ?",
    a: "Non, jamais. L'IA ne donne aucun conseil médical. Elle répond uniquement aux questions pratiques (horaires, rendez-vous, transmission d'ordonnances au médecin). Pour toute question médicale, elle redirige le patient vers vous ou vers les services d'urgence.",
  },
  {
    q: "Mes patients doivent-ils installer quelque chose ?",
    a: "Non, un simple lien suffit. Vos patients accèdent à l'IA via leur navigateur, sans inscription ni application. Vous partagez le lien par SMS, sur votre ordonnancier ou par email.",
  },
  {
    q: "Que se passe-t-il pour les vraies urgences ?",
    a: "Alerte SMS immédiate. Si l'IA détecte des mots-clés d'urgence (douleur forte, chute, saignement, difficultés respiratoires), elle alerte le patient de contacter le 15 et vous envoie une notification immédiate.",
  },
  {
    q: "Est-ce que je peux personnaliser les réponses ?",
    a: "Oui, depuis le dashboard. Vous pouvez configurer vos horaires, vos jours de congé, vos spécialités, et les informations spécifiques à votre cabinet. L'IA s'adapte à votre façon de travailler.",
  },
  {
    q: "Compatible avec mon logiciel de soins ?",
    a: "Indépendant de tout logiciel. IA Patiente fonctionne en parallèle de votre logiciel métier (Alaxione, Nomadeec, etc.) sans aucune intégration nécessaire. Vous recevez un résumé quotidien par email.",
  },
  {
    q: "Puis-je annuler ?",
    a: "Oui, quand vous voulez. Aucun engagement, aucune CB requise pour l'essai. Vous pouvez annuler en un clic depuis votre espace, sans frais ni délai.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-[#e5e5e5] text-center mb-12">
          Questions fréquentes
        </h2>
        <div className="space-y-2">
          {FAQ.map((item, i) => (
            <div
              key={i}
              className="border border-[#1a1a1a] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#111] transition-colors"
              >
                <span className="text-sm font-medium text-[#e5e5e5]">
                  {item.q}
                </span>
                <svg
                  className={`w-4 h-4 text-[#888] shrink-0 ml-4 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-[#888] leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
