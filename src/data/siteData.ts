/**
 * Données dynamiques du site Cultur@Braine.
 * Prévu pour être remplacé / alimenté par un back-office plus tard.
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
  /** Affichée en priorité sur la page d'accueil */
  featured?: boolean;
};

export const siteData = {
  association: {
    name: "Cultur@Braine",
    legalName: "Cultur@Braine ASBL",
    tagline: "Cultuelle et Culturelle",
    mission:
      "Associer foi et culture pour tisser une communauté solidaire à Braine-le-Comte et ses environs.",
    email: "info@culturabraine.be",
    address: {
      street: "13, rue de Neufvilles",
      postalCode: "7060",
      city: "Soignies",
      country: "Belgique",
    },
  },

  /** Montant déjà récolté — modifiable facilement (futur back-office) */
  fundraising: {
    amountRaised: 50_000,
    currency: "EUR",
    goal: 150_000,
    label: "Plus de {amount} déjà récoltés !",
  },

  bank: {
    accountName: "Cultur@Braine ASBL",
    iban: "BE61 9502 4851 2517",
    bic: "CTBKBEBX",
    communication: "Don travaux 135 rue de la Station",
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
      },
      {
        id: "adherent",
        name: "Membre adhérent",
        price: 120,
        reducedPrice: 60,
        reducedLabel: "Étudiants / Seniors",
      },
    ],
  },

  /** Contacts WhatsApp des administrateurs — à remplir */
  admins: [] as AdminContact[],

  renovationSteps: [
    {
      id: "toiture",
      label: "Réfection complète de la toiture",
      done: false,
    },
    {
      id: "structure",
      label: "Consolidation de la structure porteuse",
      done: false,
    },
    {
      id: "electricite",
      label: "Mise aux normes électriques",
      done: false,
    },
    {
      id: "plomberie",
      label: "Installation / rénovation de la plomberie",
      done: false,
    },
    {
      id: "isolation",
      label: "Isolation thermique et acoustique",
      done: false,
    },
    {
      id: "interieur",
      label: "Rénovation intérieure (murs, sols, menuiseries)",
      done: false,
    },
    {
      id: "amenagement",
      label: "Aménagement des espaces cultuels et culturels",
      done: false,
    },
  ] satisfies RenovationStep[],

  projects: {
    station: {
      id: "135-station",
      title: "135 rue de la Station",
      location: "Braine-le-Comte",
      status: "acquis",
      purchasePrice: 150_000,
      summary:
        "Bâtiment acquis pour 150 000 €, au grand potentiel, nécessitant d'importants travaux de rénovation pour accueillir les activités cultuelles et culturelles de l'ASBL.",
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
      location: "En négociation",
      status: "negociation",
      summary:
        "Projet d'acquisition en cours de négociation. L'ASBL avance avec prudence, sans entrer dans le jeu des surenchères.",
    },
  },

  values: [
    {
      id: "transparence",
      title: "Transparence",
      description:
        "Chaque euro collecté sert le projet immobilier et la vie associative. Nous communiquons clairement sur l'avancement des travaux et l'utilisation des fonds.",
    },
    {
      id: "communaute",
      title: "Communauté",
      description:
        "Nous construisons un lieu de rencontre où les générations se croisent, autour de la foi et de la culture.",
    },
    {
      id: "entraide",
      title: "Entraide",
      description:
        "L'ASBL repose sur la solidarité : dons, cotisations et bénévolat pour faire avancer un projet commun.",
    },
  ],
} as const;

export type SiteData = typeof siteData;

export function formatEuro(amount: number): string {
  return new Intl.NumberFormat("fr-BE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}
