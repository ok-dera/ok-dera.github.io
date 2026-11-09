export interface SocialLink {
  label: string;
  url: string;
  external: boolean;
}

export interface ShippedProject {
  name: string;
  url: string;
  description: string;
  tags: string[];
}

export interface AlsoShipped {
  name: string;
  note: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    canonical: string;
  };
  hero: {
    name: string;
    tagline: string;
    location: string;
    links: SocialLink[];
  };
  about: {
    paragraphs: string[];
  };
  shipped: {
    projects: ShippedProject[];
    alsoShipped: AlsoShipped[];
    caseStudiesUrl: string;
  };
  principles: {
    items: string[];
  };
  footer: {
    links: SocialLink[];
  };
}

export const content: SiteContent = {
  meta: {
    title: 'Chidera Okosa | Software Engineer',
    description:
      'Software engineer in Lagos (UTC+1). Sole developer on six client products, building with Claude Code.',
    canonical: 'https://ok-dera.github.io/',
  },
  hero: {
    name: 'Chidera Okosa',
    tagline: 'Software Engineer, AI-native product development.',
    location: 'Lagos, Nigeria (UTC+1) \u00b7 Remote',
    links: [
      {
        label: 'Case Studies',
        url: 'https://portfolio.novarq.tech/case-studies',
        external: true,
      },
      {
        label: 'Email',
        url: 'mailto:okosachideragia@gmail.com',
        external: false,
      },
      {
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/chidera-okosa',
        external: true,
      },
      {
        label: 'GitHub',
        url: 'https://github.com/ok-dera',
        external: true,
      },
    ],
  },
  about: {
    paragraphs: [
      'Technical Consultant at Benmore Technologies, promoted twice in 18 months: Full Stack Engineer, then Developer Team Lead, then Technical Consultant.',
      'Sole developer on six client products, end to end: discovery, architecture, implementation, app-store release and production monitoring, for clients in Kansas, Maryland, Toronto, San Diego, Kentucky and Virginia.',
      'Mentored a team of 12 developers as Team Lead. I build with Claude Code as my core delivery workflow and publish reusable Claude Code skills on GitHub.',
    ],
  },
  shipped: {
    projects: [
      {
        name: 'CattleLogic',
        url: 'https://www.cattlelogicapp.com',
        description:
          'Sole developer. Feedlot operating system that runs day-to-day operations at a commercial Kansas feedlot, live on iOS and Android. Offline-first from the first commit, with queued operations and field-level conflict resolution. FIFO inventory costing, per-owner invoice splitting, and live commodity-futures P&L via Databento. 314 backend test files and a CI migration gate.',
        tags: ['Django', 'React Native', 'Expo', 'PostgreSQL', 'Celery'],
      },
      {
        name: 'Track & Field Dreams',
        url: 'https://www.tfdreams.com',
        description:
          'Sole developer. Athlete recruitment platform that sends verified performances to college coaches. Matching engine across 30+ events, NCES and College Scorecard integrations, COPPA-compliant permissions, Stripe subscriptions with idempotent webhooks.',
        tags: ['Django', 'PostgreSQL', 'Stripe'],
      },
      {
        name: 'Echelon ONE',
        url: 'https://echelon-one.io',
        description:
          'Built as one of a team of three. White-labeled, multi-tenant platform automating LLC formation, payroll and tax compliance for NIL student-athletes. My work: the CorpNet business-formation integration, tax calculators on a single IRS dataset with a parity check that fails on drift, and Stripe billing, across a Django backend and a Next.js/TypeScript frontend.',
        tags: ['Next.js', 'TypeScript', 'Django', 'Stripe'],
      },
    ],
    alsoShipped: [
      { name: 'BeHope', note: 'peer support platform for a grant-funded nonprofit programme' },
      { name: 'SoloPoolD', note: 'travel and hospitality' },
      { name: 'SettlIn', note: 'LLM chatbot and translation' },
      { name: 'Athlync, acquired by JOGG AI', note: 'generative fitness programming, 8,000+ users' },
    ],
    caseStudiesUrl: 'https://portfolio.novarq.tech/case-studies',
  },
  principles: {
    items: [
      'Correctness first. Tests, CI gates and monitoring are defaults, not afterthoughts.',
      'Direct work with domain operators. I work with the people who use the software, not only the people who specify it.',
      'AI agents inside guardrails. Claude Code is my core delivery workflow, with structured skills, review steps and human checkpoints.',
    ],
  },
  footer: {
    links: [
      {
        label: 'Email',
        url: 'mailto:okosachideragia@gmail.com',
        external: false,
      },
      {
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/chidera-okosa',
        external: true,
      },
      {
        label: 'GitHub',
        url: 'https://github.com/ok-dera',
        external: true,
      },
      {
        label: 'Case Studies',
        url: 'https://portfolio.novarq.tech/case-studies',
        external: true,
      },
    ],
  },
};
