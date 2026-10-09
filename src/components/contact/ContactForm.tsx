"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Contact Cultur@Braine — ${name}`);
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${siteConfig.association.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  const fieldClass =
    "w-full border-0 border-b-2 border-navy/15 bg-transparent px-0 py-3 text-sm text-navy outline-none transition focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Nom
        </label>
        <input id="name" name="name" required autoComplete="name" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Message
        </label>
        <textarea id="message" name="message" required rows={4} className={`${fieldClass} resize-y`} />
      </div>
      <Button type="submit" variant="amber" size="lg">
        <Send className="h-4 w-4" />
        Envoyer le message
      </Button>
      {status === "sent" && (
        <p className="text-sm text-muted" role="status">
          Votre client mail va s&apos;ouvrir pour finaliser l&apos;envoi.
        </p>
      )}
    </form>
  );
}
