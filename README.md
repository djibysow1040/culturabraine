# Cultur@Braine — Site vitrine ASBL

Site vitrine moderne de l'ASBL belge **Cultur@Braine** (vocation cultuelle et culturelle).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 + `tailwind-merge` / `clsx`
- Composants style shadcn/ui (Button, Card, Badge, Progress)
- Framer Motion
- lucide-react
- Polices : Playfair Display + Plus Jakarta Sans

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Données dynamiques (futur CMS)

Tout le contenu modifiable est dans :

[`src/data/siteConfig.ts`](src/data/siteConfig.ts)

- Cagnotte / objectif
- Étapes de travaux
- Admins WhatsApp
- IBAN / BIC
- Cotisations & code d'accès `CB2026`
- Photos projets

## Pages

| Route | Contenu |
|-------|---------|
| `/` | Hero cinématique, Bento, chantiers, collecte |
| `/qui-sommes-nous` | Vision & valeurs (Bento) |
| `/projets` | 135 Station + Grand Hangar |
| `/devenir-membre` | WhatsApp, tarifs, formulaire |
| `/faire-un-don` | Carte de don IBAN |
| `/contact` | Infos + formulaire contemporain |
