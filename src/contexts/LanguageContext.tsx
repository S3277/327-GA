import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Translations {
  nav: {
    services: string;
    framework: string;
    about: string;
    bookCall: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    funnel: {
      title: string;
      description: string;
    };
    automation: {
      title: string;
      description: string;
    };
    analytics: {
      title: string;
      description: string;
    };
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
    step1: {
      title: string;
      description: string;
    };
    step2: {
      title: string;
      description: string;
    };
    step3: {
      title: string;
      description: string;
    };
    step4: {
      title: string;
      description: string;
    };
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    button: string;
  };
  footer: {
    tagline: string;
    services: string;
    company: string;
    resources: string;
    legal: string;
    copyright: string;
  };
}

const translations: { en: Translations; fr: Translations } = {
  en: {
    nav: {
      services: 'Services',
      framework: 'Framework',
      about: 'About',
      bookCall: 'Apply for Growth Audit',
    },
    hero: {
      badge: 'Systems That Convert Audience Into Cash Flow',
      title: 'I Turn Your Audience',
      subtitle: 'Into High-Ticket Cash Flow',
      description: 'Stop being the bottleneck in your own business. I install the infrastructure, the automation, and the talent so you can scale to $50k/mo+ without touching your DMs.',
      primaryButton: 'Apply for a Growth Audit',
      secondaryButton: 'View Framework',
    },
    services: {
      badge: 'My Growth Services',
      title: 'The Problem: You Have an',
      subtitle: 'Audience, But No System',
      funnel: {
        title: 'Custom Discord Ecosystems',
        description: 'Fully automated communities with gated tiers and FOMO engines that keep your high-ticket clients engaged and converting.',
      },
      automation: {
        title: 'Stripe-Free Billing Systems',
        description: 'Secure, high-margin payment infrastructures using Wise and Crypto. Avoid "Stripe Tax" and bans that are killing high-ticket coaches right now.',
      },
      analytics: {
        title: 'Setter Training & Management',
        description: 'I provide the staff and the scripts so you never have to "manage" again. Elite Pilot setters who speak in your voice and close on your behalf.',
      },
    },
    process: {
      badge: 'The System Bridge Framework',
      title: 'How I Scale',
      subtitle: 'Your Business',
      step1: {
        title: 'The Audit',
        description: 'We find the technical and conversational "leaks" in your current funnel that are costing you $10k+ per month.',
      },
      step2: {
        title: 'The Build',
        description: 'I install the "System Bridge" (Discord, Wise, and Zapier/Make automations) to handle your billing and access with zero friction.',
      },
      step3: {
        title: 'The Talent',
        description: 'I deploy my trained setters into your accounts to start booking qualified appointments immediately—no hiring or management needed.',
      },
      step4: {
        title: 'The Optimization',
        description: 'We use real-time data to tweak scripts and increase your closing rate week-over-week. Bug-free systems that scale.',
      },
    },
    about: {
      badge: 'The Tech Edge',
      title: 'You Don\'t Need Another',
      subtitle: 'Assistant. You Need an Architect.',
      description: 'I\'m a software engineer who specializes in taking creators and coaches from "manual hustle" to "automated empire." My systems are bug-free and scalable. Most growth operators are just "guys with scripts"—I\'m a Systems Engineer who builds the technical backend and manages the front-end talent so your business runs while you sleep.',
      cta: 'Book Your Growth Audit',
    },
    contact: {
      badge: 'Limited Availability',
      title: 'Stop Working In Your Business.',
      subtitle: 'Start Working On It.',
      description: 'I only take on two new clients per month to ensure every system is built to perfection. If you\'re ready to scale to $50k/mo+ without being the bottleneck, let\'s talk.',
      button: 'Apply for a Growth Audit',
    },
    footer: {
      tagline: 'Elite Growth Architecture for Visionary Coaches',
      services: 'Services',
      company: 'Company',
      resources: 'Resources',
      legal: 'Legal',
      copyright: '© 2024 327 Growth Architect. All rights reserved.',
    },
  },
  fr: {
    nav: {
      services: 'Services',
      framework: 'Méthode',
      about: 'À Propos',
      bookCall: 'Réserver un Appel',
    },
    hero: {
      badge: 'Systèmes de Croissance Haute Performance',
      title: 'Développez Votre',
      subtitle: 'Empire de Coaching',
      description: 'Nous concevons des systèmes de croissance haute performance pour les coachs élites de produits d\'information. Infrastructure professionnelle pour les visionnaires qui exigent une croissance précise.',
      primaryButton: 'Réserver un Appel Stratégique',
      secondaryButton: 'Voir le Portfolio',
    },
    services: {
      badge: 'Systèmes Centraux',
      title: 'Le Plan de',
      subtitle: 'l\'Architecte',
      funnel: {
        title: 'Optimisation d\'Entonnoir',
        description: 'Parcours de conversion ingénierie qui transforment le trafic froid en défenseurs de marque haut de gamme grâce à la psychologie comportementale.',
      },
      automation: {
        title: 'Automatisation Marketing',
        description: 'Séquences intelligentes qui nourrissent les prospects pendant que vous vous concentrez sur la stratégie à haute valeur.',
      },
      analytics: {
        title: 'Analytiques de Performance',
        description: 'Systèmes de suivi avancés qui fournissent des insights cristallins sur vos métriques de croissance et opportunités d\'optimisation.',
      },
    },
    process: {
      badge: 'Notre Processus',
      title: 'Ingénierie de',
      subtitle: 'Précision',
      step1: {
        title: 'Découverte & Analyse',
        description: 'Évaluation approfondie de vos systèmes actuels, objectifs et potentiel de croissance.',
      },
      step2: {
        title: 'Architecture Stratégique',
        description: 'Conception de plan personnalisé adapté à vos exigences de mise à l\'échelle spécifiques.',
      },
      step3: {
        title: 'Implémentation Système',
        description: 'Déploiement professionnel de votre infrastructure de croissance optimisée.',
      },
      step4: {
        title: 'Optimisation & Échelle',
        description: 'Raffinement continu et mise à l\'échelle pour maximiser la croissance de votre empire.',
      },
    },
    about: {
      badge: 'À Propos de 327',
      title: 'Architecture de',
      subtitle: 'Précision',
      description: 'Nous sommes des architectes de croissance spécialisés dans les systèmes haute performance pour les entreprises de coaching d\'élite. Nos solutions d\'ingénierie de précision transforment les coachs ambitieux en empires en expansion.',
      cta: 'Commencer Votre Architecture',
    },
    contact: {
      badge: 'Prêt à Grandir?',
      title: 'Architecturons Votre',
      subtitle: 'Empire de Croissance',
      description: 'Planifiez une consultation stratégique pour discuter de vos objectifs de mise à l\'échelle et découvrir comment nos systèmes de précision peuvent accélérer votre croissance.',
      button: 'Réserver une Session Stratégique',
    },
    footer: {
      tagline: 'Architecture de Croissance Élite pour les Coachs Visionnaires',
      services: 'Services',
      company: 'Entreprise',
      resources: 'Ressources',
      legal: 'Légal',
      copyright: '© 2024 327 Growth Architect. Tous droits réservés.',
    },
  },
};

interface LanguageContextType {
  language: 'en' | 'fr';
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const value = {
    language,
    toggleLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};