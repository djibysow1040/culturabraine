/**
 * Configuration centralisée Cultur@Braine.
 * Prête à être branchée sur un CMS / back-office (Payload, Sanity, etc.).
 */

export type RenovationStep = {
  id: string;
  label: string;
  done: boolean;
};

export type AdminContact = {
  id: string;
  name: string;
  role?: string;
  /** Numéro international sans + (ex: 32470123456) */
  whatsapp: string;
};

export type ProjectPhoto = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  featured?: boolean;
};

export const siteConfig = {
  association: {
    name: "Cultur@Braine",
    legalName: "Cultur@Braine ASBL",
    tagline: "Cultuelle & Culturelle",
    headline: "Une vision, un avenir",
    mission:
      "Associer foi et culture pour tisser une communauté solidaire à Braine-le-Comte et ses environs.",
    email: "info@culturabraine.be",
    address: {
      street: "13, rue de Neufvilles",
      postalCode: "7060",
      city: "Soignies",
      country: "Belgique",
      full: "13, rue de Neufvilles – 7060 Soignies",
    },
  },

  fundraising: {
    amountRaised: 50_000,
    currency: "EUR",
    goal: 150_000,
    label: "Plus de {amount} déjà mobilisés",
  },

  bank: {
    accountName: "Cultur@Braine ASBL",
    iban: "BE61 9502 4851 2517",
    bic: "CTBKBEBX",
    communication: "Don acquisition 135 rue de la Station",
  },

  membership: {
    formalRegistrationUrl: "https://forms.gle/REMPLACER",
    accessCode: "CB2026",
    tiers: [
      {
        id: "effectif",
        name: "Membre effectif",
        price: 240,
        reducedPrice: 120,
        reducedLabel: "Étudiants / Seniors",
        highlight: true,
        description: "Plein droit de vote et participation active à la vie de l'ASBL.",
      },
      {
        id: "adherent",
        name: "Membre adhérent",
        price: 120,
        reducedPrice: 60,
        reducedLabel: "Étudiants / Seniors",
        highlight: false,
        description: "Soutenez le projet et rejoignez la communauté.",
      },
    ],
  },

  admins: [] as AdminContact[],

  renovationSteps: [
    { id: "toiture", label: "Réfection complète de la toiture", done: false },
    { id: "structure", label: "Consolidation de la structure porteuse", done: false },
    { id: "electricite", label: "Mise aux normes électriques", done: false },
    { id: "plomberie", label: "Installation / rénovation de la plomberie", done: false },
    { id: "isolation", label: "Isolation thermique et acoustique", done: false },
    { id: "interieur", label: "Rénovation intérieure (murs, sols, menuiseries)", done: false },
    { id: "amenagement", label: "Aménagement des espaces cultuels et culturels", done: false },
  ] satisfies RenovationStep[],

  projects: {
    station: {
      id: "135-station",
      title: "135 rue de la Station",
      location: "Braine-le-Comte",
      status: "en_acquisition" as const,
      statusLabel: "En cours d'acquisition",
      purchasePrice: 150_000,
      summary:
        "Bâtiment en cours d'acquisition (prix envisagé : 150 000 €). Un bien au grand potentiel, qui nécessitera d'importants travaux de rénovation pour accueillir les activités cultuelles et culturelles de l'ASBL.",
      photos: [
        {
          id: "facade",
          src: "/images/travaux/facade-135.jpg",
          alt: "Façade du 135 rue de la Station à Braine-le-Comte",
          caption: "Façade — 135 rue de la Station",
          featured: true,
        },
        {
          id: "toiture-exterieure",
          src: "/images/travaux/toiture-exterieure.jpg",
          alt: "Toiture plate endommagée avec lucarne brisée et infiltrations",
          caption: "Toiture extérieure à refaire",
          featured: true,
        },
        {
          id: "combles",
          src: "/images/travaux/combles-toiture.jpg",
          alt: "Combles avec charpente exposée et trous dans la toiture",
          caption: "Combles — charpente et toiture",
          featured: true,
        },
        {
          id: "plafond",
          src: "/images/travaux/plafond-endommage.jpg",
          alt: "Plafond effondré exposant les poutres et la toiture",
          caption: "Plafond endommagé",
          featured: false,
        },
        {
          id: "interieur",
          src: "/images/travaux/interieur-debris.jpg",
          alt: "Pièce intérieure en rénovation avec gravats et débris",
          caption: "Intérieur — démolition en cours",
          featured: false,
        },
      ] satisfies ProjectPhoto[],
    },
    hangar: {
      id: "grand-hangar",
      title: "Grand Hangar",
      location: "Près de la gare",
      status: "negociation" as const,
      statusLabel: "Futur projet",
      summary:
        "Projet d'acquisition en cours de négociation. L'ASBL avance avec prudence, sans entrer dans le jeu des surenchères.",
    },
  },

  values: [
    {
      id: "culte",
      title: "Cultuel",
      icon: "Sparkles" as const,
      description:
        "Un espace digne pour la pratique spirituelle, ouvert et respectueux.",
    },
    {
      id: "culture",
      title: "Culturel",
      icon: "Palette" as const,
      description:
        "Des rencontres, des échanges et des activités pour faire vivre la culture locale.",
    },
    {
      id: "transparence",
      title: "Transparence",
      icon: "Eye" as const,
      description:
        "Chaque euro collecté sert le projet. Avancement et usage des fonds communiqués clairement.",
    },
    {
      id: "communaute",
      title: "Communauté",
      icon: "Users" as const,
      description:
        "Un lieu où les générations se croisent, autour de la foi et de la culture.",
    },
    {
      id: "entraide",
      title: "Entraide",
      icon: "Handshake" as const,
      description:
        "Dons, cotisations et bénévolat pour faire avancer un projet commun.",
    },
    {
      id: "inclusion",
      title: "Inclusion",
      icon: "Heart" as const,
      description:
        "Une ASBL ouverte, inclusive, au service de Braine-le-Comte et ses environs.",
    },
  ],

  nav: [
    { href: "/", label: "Accueil" },
    { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
    { href: "/projets", label: "Nos projets" },
    { href: "/devenir-membre", label: "Devenir membre" },
    { href: "/faire-un-don", label: "Faire un don" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** @deprecated Utiliser siteConfig — alias de transition */
export const siteData = siteConfig;

export function formatEuro(amount: number): string {
  return new Intl.NumberFormat("fr-BE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}
