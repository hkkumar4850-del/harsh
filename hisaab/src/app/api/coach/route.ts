import Anthropic from "@anthropic-ai/sdk";
import { coachSystemPrompt, coachFallbacks } from "@/lib/content";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const MAX_MESSAGES = 8;
const MAX_CONTENT_LENGTH = 2000;

function randomFallback(): string {
  return coachFallbacks[Math.floor(Math.random() * coachFallbacks.length)];
}

function parseMessages(body: unknown): ChatMessage[] | null {
  if (typeof body !== "object" || body === null) return null;
  const raw = (body as { messages?: unknown }).messages;
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > MAX_MESSAGES) {
    return null;
  }
  const messages: ChatMessage[] = [];
  for (const item of raw) {
    if (typeof item !== "object" || item === null) return null;
    const { role, content } = item as { role?: unknown; content?: unknown };
    if (role !== "user" && role !== "assistant") return null;
    if (
      typeof content !== "string" ||
      content.trim().length === 0 ||
      content.length > MAX_CONTENT_LENGTH
    ) {
      return null;
    }
    messages.push({ role, content });
  }
  // The Messages API rejects a conversation that opens with an assistant
  // turn — trim any leading assistant messages rather than 400 the client.
  while (messages.length > 0 && messages[0].role === "assistant") {
    messages.shift();
  }
  if (messages.length === 0) return null;
  return messages;
}

export async function POST(req: Request): Promise<Response> {
  let messages: ChatMessage[] | null = null;
  try {
    messages = parseMessages(await req.json());
  } catch {
    messages = null;
  }
  if (!messages) {
    return Response.json(
      { error: "Invalid request: expected { messages: [{ role, content }] }" },
      { status: 400 },
    );
  }

  // No key configured — degrade gracefully, exactly like the prototype's FALLBACKS.
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ reply: randomFallback() });
  }

  const client = new Anthropic(); // reads ANTHROPIC_API_KEY

  try {
    const response = await client.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 1000,
      system: coachSystemPrompt,
      messages,
    });
    const reply = response.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();
    if (!reply) throw new Error("empty reply");
    return Response.json({ reply });
  } catch {
    return Response.json({ reply: randomFallback() });
  }
}
