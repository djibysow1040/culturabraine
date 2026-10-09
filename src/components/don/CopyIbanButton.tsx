"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type Props = {
  iban: string;
};

export function CopyIbanButton({ iban }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(iban.replace(/\s/g, ""));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Button type="button" variant="gold" onClick={handleCopy}>
      {copied ? "IBAN copié !" : "Copier l'IBAN"}
    </Button>
  );
}
