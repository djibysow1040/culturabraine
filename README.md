# Cultur@Braine — Site vitrine ASBL

Site vitrine de l'ASBL belge **Cultur@Braine** (vocation cultuelle et culturelle).

## Stack

- Next.js (App Router)
- React
- Tailwind CSS v4
- TypeScript

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Données dynamiques

Toutes les données modifiables (cagnotte, étapes de travaux, admins WhatsApp, IBAN, cotisations) sont centralisées dans :

[`src/data/siteData.ts`](src/data/siteData.ts)

Ce fichier est conçu pour être remplacé plus tard par un back-office / CMS.

## Pages

| Route | Contenu |
|-------|---------|
| `/` | Accueil (hero, projet immobilier, cagnotte, CTA) |
| `/qui-sommes-nous` | Vision & valeurs |
| `/projets` | 135 rue de la Station + Grand Hangar |
| `/devenir-membre` | WhatsApp admins, tarifs, formulaire |
| `/faire-un-don` | IBAN / BIC + copie |
| `/contact` | Adresse, email, formulaire |

## Personnalisation rapide

1. **Montant cagnotte** : `siteData.fundraising.amountRaised`
2. **Checklist travaux** : `siteData.renovationSteps`
3. **Admins WhatsApp** : remplir `siteData.admins`
4. **IBAN / BIC** : `siteData.bank`
5. **Lien formulaire adhésion** : `siteData.membership.formalRegistrationUrl`
6. **Photos chantier** : remplacer les SVG dans `public/images/travaux/`
