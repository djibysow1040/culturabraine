"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { siteData } from "@/data/siteData";

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

    window.location.href = `mailto:${siteData.association.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm text-navy">
          Nom
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="mt-2 w-full border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-gold"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-navy">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-gold"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-y border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-gold"
        />
      </div>
      <Button type="submit" variant="primary">
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
