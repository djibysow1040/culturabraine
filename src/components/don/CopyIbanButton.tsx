"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  iban: string;
};

export function CopyIbanButton({ iban }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(iban.replace(/\s/g, ""));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Button type="button" variant="amber" size="lg" onClick={handleCopy} className="w-full sm:w-auto">
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          IBAN copié !
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Copier l&apos;IBAN
        </>
      )}
    </Button>
  );
}
