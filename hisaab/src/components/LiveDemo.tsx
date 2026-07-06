"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { demo, coachFallbacks } from "@/lib/content";
import { fadeUp, viewportOnce } from "@/lib/motion";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function LiveDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: demo.seed },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  // Mirrors the prototype's `history` — the seed bot message is never sent to the API.
  const apiHistory = useRef<ChatMessage[]>([]);
  const msgsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = msgsRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages, busy]);

  const send = async (raw: string) => {
    const q = raw.trim();
    if (!q || busy) return;

    setInput("");
    const userMsg: ChatMessage = { role: "user", content: q };
    setMessages((prev) => [...prev, userMsg]);
    apiHistory.current.push(userMsg);
    setBusy(true);

    // The window must start on a user turn — the Messages API rejects an
    // assistant-first array. History alternates user/assistant, so an odd
    // slice of an odd-length history always starts with a user message.
    const window = apiHistory.current.slice(-7);

    let reply = "";
    try {
      const res = await fetch("/api/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: window }),
      });
      if (!res.ok) throw new Error("bad status");
      const data = (await res.json()) as { reply?: string };
      reply = (data.reply ?? "").trim();
      if (!reply) throw new Error("empty reply");
    } catch {
      reply = coachFallbacks[Math.floor(Math.random() * coachFallbacks.length)];
    }

    const botMsg: ChatMessage = { role: "assistant", content: reply };
    apiHistory.current.push(botMsg);
    setMessages((prev) => [...prev, botMsg]);
    setBusy(false);
  };

  return (
    <section id="demo" className="bg-red-deep py-[88px] text-paper">
      <div className="mx-auto max-w-wrap px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mb-[54px] max-w-[640px] text-center"
        >
          <h2 className="mb-3.5 font-display font-normal text-cream text-[clamp(30px,4vw,44px)]">
            {demo.h2}
          </h2>
          <p className="text-[18px] text-[rgba(251,243,228,.8)]">{demo.sub}</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-[680px] overflow-hidden rounded-[20px] bg-paper text-ink shadow-[0_24px_70px_rgba(0,0,0,.35)]"
        >
          {/* Top bar */}
          <div className="flex items-center gap-3 bg-red px-[22px] py-[15px] text-paper">
            <div
              className="grid h-[38px] w-[38px] place-items-center rounded-full bg-gold text-[19px]"
              aria-hidden="true"
            >
              {demo.avatar}
            </div>
            <div>
              <div className="text-[16px] font-bold">{demo.name}</div>
              <div className="text-[12.5px] opacity-[.85]">{demo.status}</div>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={msgsRef}
            aria-live="polite"
            className="ledger-lines-soft flex h-[380px] flex-col gap-3.5 overflow-y-auto p-[22px]"
          >
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className={`max-w-[82%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-[15.5px] leading-[1.55] ${
                  m.role === "user"
                    ? "self-end rounded-br-[4px] bg-red text-paper"
                    : "self-start rounded-bl-[4px] border-[1.5px] border-paper-line bg-cream"
                }`}
              >
                {m.content}
              </motion.div>
            ))}
          </div>

          {/* Typing indicator */}
          {busy && (
            <div className="bg-paper px-[22px] pb-1 text-[14px] text-ink-soft">
              {demo.typing}
            </div>
          )}

          {/* Preset chips */}
          <div className="flex flex-wrap gap-2.5 bg-paper px-[22px] pt-3.5 pb-1">
            {demo.chips.map((chip) => (
              <motion.button
                key={chip.label}
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                disabled={busy}
                onClick={() => send(chip.question)}
                className="rounded-full border-[1.5px] border-red bg-cream px-4 py-2 text-[14px] font-semibold text-red transition-colors hover:bg-red hover:text-paper disabled:opacity-60"
              >
                {chip.label}
              </motion.button>
            ))}
          </div>

          {/* Input row */}
          <div className="flex gap-2.5 bg-paper px-[22px] pt-3.5 pb-5">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") send(input);
              }}
              aria-label={demo.inputAria}
              placeholder={demo.inputPlaceholder}
              className="flex-1 rounded-full border-[1.5px] border-paper-line bg-cream px-5 py-3 text-[15.5px] text-ink focus:border-red focus:outline-none"
            />
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              disabled={busy}
              onClick={() => send(input)}
              aria-label={demo.sendAria}
              className="rounded-full bg-red px-6 text-[15px] font-bold text-paper disabled:opacity-60"
            >
              {demo.sendLabel}
            </motion.button>
          </div>
        </motion.div>

        <p className="mt-[18px] text-center text-[13px] text-[rgba(251,243,228,.6)]">
          {demo.note}
        </p>
      </div>
    </section>
  );
}
