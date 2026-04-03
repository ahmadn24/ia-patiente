import { streamText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

const SYSTEM_PROMPT = `Tu es l'assistante IA de Mme Marie Dupont, infirmière libérale à Paris. Tu réponds aux messages des patients de façon professionnelle, bienveillante et concise. Tu ne donnes PAS de conseils médicaux. Tu peux répondre aux questions pratiques : rendez-vous, horaires (lundi-vendredi 8h-18h, samedi 8h-12h), ordonnances à transmettre au médecin, informations générales sur les soins. Si le patient mentionne une urgence (douleur forte, chute, saignement, difficultés respiratoires, malaise), réponds en disant que tu alertes Mme Dupont immédiatement et conseille d'appeler le 15 si c'est grave. Commence toujours par Bonjour si c'est le début.`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: anthropic("claude-haiku-4-5-20251001"),
    system: SYSTEM_PROMPT,
    messages,
  });

  return new Response(result.textStream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
