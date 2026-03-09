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
      bookCall: 'Book Strategy Call',
    },
    hero: {
      badge: 'High-Performance Growth Systems',
      title: 'Scale Your',
      subtitle: 'Coaching Empire',
      description: 'We architect high-performance growth systems for elite info-product coaches. Professional infrastructure for visionary builders who demand precision scaling.',
      primaryButton: 'Book a Strategy Call',
      secondaryButton: 'View Portfolio',
    },
    services: {
      badge: 'Core Systems',
      title: 'The Architect\'s',
      subtitle: 'Blueprint',
      funnel: {
        title: 'Funnel Optimization',
        description: 'Engineered conversion paths that turn cold traffic into high-ticket brand advocates through behavioral psychology and data-driven loops.',
      },
      automation: {
        title: 'Marketing Automation',
        description: 'Intelligent sequences that nurture prospects while you focus on high-value strategy, designed for maximum engagement and conversion.',
      },
      analytics: {
        title: 'Performance Analytics',
        description: 'Advanced tracking systems that provide crystal-clear insights into your growth metrics and optimization opportunities.',
      },
    },
    process: {
      badge: 'Our Process',
      title: 'Precision',
      subtitle: 'Engineering',
      step1: {
        title: 'Discovery & Analysis',
        description: 'Deep dive assessment of your current systems, goals, and growth potential.',
      },
      step2: {
        title: 'Strategic Architecture',
        description: 'Custom blueprint design tailored to your specific scaling requirements.',
      },
      step3: {
        title: 'System Implementation',
        description: 'Professional deployment of your optimized growth infrastructure.',
      },
      step4: {
        title: 'Optimization & Scale',
        description: 'Continuous refinement and scaling to maximize your empire\'s growth.',
      },
    },
    about: {
      badge: 'About 327',
      title: 'Precision',
      subtitle: 'Architecture',
      description: 'We are growth architects specializing in high-performance systems for elite coaching businesses. Our precision-engineered solutions transform ambitious coaches into scaling empires.',
      cta: 'Start Your Architecture',
    },
    contact: {
      badge: 'Ready to Scale?',
      title: 'Let\'s Architect Your',
      subtitle: 'Growth Empire',
      description: 'Schedule a strategic consultation to discuss your scaling objectives and discover how our precision systems can accelerate your growth.',
      button: 'Book Strategy Session',
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