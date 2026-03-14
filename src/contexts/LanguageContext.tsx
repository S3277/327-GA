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
      title: 'Build Your',
      subtitle: 'Coaching Empire',
      description: 'Stop being the bottleneck in your own business. I install the infrastructure, the automation, and the talent so you can scale to $50k/mo+ without touching your DMs.',
      primaryButton: 'Apply for a Growth Audit',
      secondaryButton: 'View Framework',
    },
    services: {
      badge: 'The Solution',
      title: 'The Problem: The',
      subtitle: '"Creator Bottleneck"',
      funnel: {
        title: 'Custom Ecosystem Design',
        description: 'I build your community and billing infrastructure (Discord + payment processor) to maximize margins and automate access.',
      },
      automation: {
        title: 'Performance Talent Recruitment',
        description: 'I install trained "Elite Pilots" who are managed by my internal systems to ensure high-performance daily.',
      },
      analytics: {
        title: 'Engineering-Grade Optimization',
        description: 'Using my software background, I build custom tracking loops to ensure every lead is nurtured and every conversation is optimized for the close.',
      },
    },
    process: {
      badge: 'The Growth Roadmap',
      title: 'How I Scale',
      subtitle: 'Your Business',
      step1: {
        title: 'The Infrastructure Audit',
        description: 'We identify the technical "leaks" in your current funnel and billing setup.',
      },
      step2: {
        title: 'The System Build',
        description: 'I install a custom, automated backend (Discord/payment processor/Make) to handle your payments and member access.',
      },
      step3: {
        title: 'The Talent Deployment',
        description: 'I place and manage high-level sales reps directly into your system.',
      },
      step4: {
        title: 'The Scale Phase',
        description: 'We use real-time data to refine your scripts and assets, driving your cost-per-acquisition down and your LTV up.',
      },
    },
    about: {
      badge: 'Why an Engineer?',
      title: 'You Don\'t Need Another',
      subtitle: 'Operator. You Need an Engineer.',
      description: 'Most "operators" give you a script and a prayer. I give you a System. Zero Friction with automated onboarding so you never have to "grant access" manually again. High Security with strategic billing setups to protect you from Stripe bans and high dispute rates. Data Transparency with clean dashboards so you know exactly where every dollar is coming from.',
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
      badge: 'La Solution',
      title: 'Le Problème: Le',
      subtitle: '"Goulot du Créateur"',
      funnel: {
        title: 'Conception d\'Écosystème Personnalisé',
        description: 'Je construis votre infrastructure communautaire et de facturation (Discord + processeur de paiement) pour maximiser les marges et automatiser l\'accès.',
      },
      automation: {
        title: 'Recrutement de Talents Performants',
        description: 'J\'installe des "Pilotes d\'Élite" formés qui sont gérés par mes systèmes internes pour garantir une haute performance quotidienne.',
      },
      analytics: {
        title: 'Optimisation de Niveau Ingénierie',
        description: 'En utilisant mon expertise en développement logiciel, je construis des boucles de suivi personnalisées pour garantir que chaque lead est nourri et chaque conversation optimisée pour la conversion.',
      },
    },
    process: {
      badge: 'La Feuille de Route de Croissance',
      title: 'Comment Je Fais Croître',
      subtitle: 'Votre Business',
      step1: {
        title: 'L\'Audit d\'Infrastructure',
        description: 'Nous identifions les "fuites" techniques dans votre entonnoir actuel et votre configuration de facturation.',
      },
      step2: {
        title: 'La Construction du Système',
        description: 'J\'installe un backend personnalisé et automatisé (Discord/processeur de paiement/Make) pour gérer vos paiements et l\'accès des membres.',
      },
      step3: {
        title: 'Le Déploiement des Talents',
        description: 'Je place et gère des représentants commerciaux de haut niveau directement dans votre système.',
      },
      step4: {
        title: 'La Phase d\'Expansion',
        description: 'Nous utilisons les données en temps réel pour affiner vos scripts et actifs, réduisant votre coût par acquisition et augmentant votre LTV.',
      },
    },
    about: {
      badge: 'Pourquoi un Ingénieur?',
      title: 'Vous N\'Avez Pas Besoin d\'Un Autre',
      subtitle: 'Opérateur. Vous Avez Besoin d\'un Ingénieur.',
      description: 'La plupart des "opérateurs" vous donnent un script et une prière. Je vous donne un Système. Zéro Friction avec un onboarding automatisé pour ne plus jamais avoir à "accorder l\'accès" manuellement. Haute Sécurité avec des configurations de facturation stratégiques pour vous protéger des bannissements Stripe et des taux de litiges élevés. Transparence des Données avec des tableaux de bord clairs pour savoir exactement d\'où vient chaque dollar.',
      cta: 'Réserver Votre Audit de Croissance',
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