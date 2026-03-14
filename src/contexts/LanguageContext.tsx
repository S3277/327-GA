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
    community: {
      title: string;
      description: string;
    };
    bottleneck: {
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
      framework: 'Process',
      about: 'About',
      bookCall: 'Apply Now',
    },
    hero: {
      badge: 'Built for Info Coaches Who Want More',
      title: 'Your Funnel Is Leaking Money',
      subtitle: 'Let\'s Fix That.',
      description: 'I audit, rebuild, and optimize your entire sales funnel — from VSL to community — so your coaching program converts while you focus on coaching.',
      primaryButton: 'Apply Now',
      secondaryButton: 'See How It Works',
    },
    services: {
      badge: 'What\'s Costing You',
      title: 'Where Info Coaches',
      subtitle: 'Lose Money',
      funnel: {
        title: 'VSL That Converts',
        description: 'Your video sales letter should close for you. I write, script, and optimize VSLs that turn cold traffic into booked calls at scale.',
      },
      automation: {
        title: 'AI Qualification System',
        description: 'Stop wasting time on unqualified leads. I build automated qualification forms that filter, score, and route only serious buyers to your calendar.',
      },
      analytics: {
        title: 'Copy That Sells',
        description: 'Bad copy kills conversions. I rewrite your landing pages, emails, and sales assets with direct-response frameworks that convert skeptics into buyers.',
      },
      community: {
        title: 'Discord Community',
        description: 'Retention is revenue. I build engaged Discord communities that keep your clients active, reduce refunds, and create upsell opportunities.',
      },
      bottleneck: {
        title: 'Bottleneck Identification',
        description: 'Most coaches don\'t know where they\'re bleeding money. I analyze your entire funnel and pinpoint exactly what\'s killing your conversion rates.',
      },
    },
    process: {
      badge: 'The Process',
      title: 'How We Scale',
      subtitle: 'Your Coaching Program',
      step1: {
        title: 'Funnel Audit',
        description: 'We identify exactly where you\'re losing money in your current funnel.',
      },
      step2: {
        title: 'System Build',
        description: 'VSL, AI qualification form, and optimized copy deployed.',
      },
      step3: {
        title: 'Community Setup',
        description: 'Discord or Skool community built and integrated with your program.',
      },
      step4: {
        title: 'Scale',
        description: 'Consistent content strategy and ongoing funnel optimization.',
      },
    },
    about: {
      badge: 'Why 327',
      title: 'You Don\'t Need More Traffic.',
      subtitle: 'You Need a Better Funnel.',
      description: 'Most info coaches are one funnel fix away from doubling their revenue. The problem isn\'t your audience — it\'s how you\'re converting them. I specialize in finding the leaks and fixing them. No fluff. No theory. Just results-driven optimization that scales your coaching business without you becoming the bottleneck.',
      cta: 'Apply for Funnel Audit',
    },
    contact: {
      badge: 'Ready to Scale',
      title: 'Stop Leaving Money',
      subtitle: 'On The Table.',
      description: 'If your coaching program isn\'t converting the way it should, there\'s a reason. Let\'s find it, fix it, and scale it.',
      button: 'Apply Now',
    },
    footer: {
      tagline: 'Sales Funnel Optimization for Info Coaches',
      services: 'Services',
      company: 'Company',
      resources: 'Resources',
      legal: 'Legal',
      copyright: '© 2024 327. All rights reserved.',
    },
  },
  fr: {
    nav: {
      services: 'Services',
      framework: 'Processus',
      about: 'À Propos',
      bookCall: 'Postuler',
    },
    hero: {
      badge: 'Conçu Pour Les Coachs Qui Veulent Plus',
      title: 'Ton Funnel Perd De L\'Argent',
      subtitle: 'On Va Régler Ça.',
      description: 'J\'audite, reconstruis et optimise ton funnel de vente — du VSL à la communauté — pour que ton programme se vende pendant que toi, tu coaches.',
      primaryButton: 'Postuler',
      secondaryButton: 'Voir Le Processus',
    },
    services: {
      badge: 'Ce Qui Te Coûte Cher',
      title: 'Où Les Coachs Info',
      subtitle: 'Perdent De L\'Argent',
      funnel: {
        title: 'VSL Qui Convertit',
        description: 'Ta lettre de vente vidéo devrait closer pour toi. J\'écris, scripte et optimise des VSL qui transforment le trafic froid en appels réservés à grande échelle.',
      },
      automation: {
        title: 'Système De Qualification IA',
        description: 'Arrête de perdre ton temps avec des leads non qualifiés. Je construis des formulaires de qualification automatisés qui filtrent, scorent et routent uniquement les acheteurs sérieux vers ton calendrier.',
      },
      analytics: {
        title: 'Copy Qui Vend',
        description: 'Le mauvais copy tue les conversions. Je réécris tes pages de vente, emails et assets avec des frameworks de réponse directe qui convertissent les sceptiques en acheteurs.',
      },
      community: {
        title: 'Communauté Discord',
        description: 'La rétention, c\'est le revenu. Je construis des communautés Discord engagées qui gardent tes clients actifs, réduisent les remboursements et créent des opportunités d\'upsell.',
      },
      bottleneck: {
        title: 'Identification Des Blocages',
        description: 'La plupart des coachs ne savent pas où ils perdent de l\'argent. J\'analyse ton funnel entier et j\'identifie exactement ce qui tue tes taux de conversion.',
      },
    },
    process: {
      badge: 'Le Processus',
      title: 'Comment On Scale',
      subtitle: 'Ton Programme De Coaching',
      step1: {
        title: 'Audit Du Funnel',
        description: 'On identifie exactement où tu perds de l\'argent dans ton funnel actuel.',
      },
      step2: {
        title: 'Construction Du Système',
        description: 'VSL, formulaire de qualification IA et copy optimisé déployés.',
      },
      step3: {
        title: 'Setup De La Communauté',
        description: 'Communauté Discord ou Skool construite et intégrée à ton programme.',
      },
      step4: {
        title: 'Scale',
        description: 'Stratégie de contenu cohérente et optimisation continue du funnel.',
      },
    },
    about: {
      badge: 'Pourquoi 327',
      title: 'T\'As Pas Besoin De Plus De Trafic.',
      subtitle: 'T\'As Besoin D\'Un Meilleur Funnel.',
      description: 'La plupart des coachs info sont à un fix de funnel près de doubler leur revenu. Le problème, c\'est pas ton audience — c\'est comment tu la convertis. Je me spécialise dans trouver les fuites et les réparer. Pas de blabla. Pas de théorie. Juste de l\'optimisation orientée résultats qui scale ton business de coaching sans que tu deviennes le goulot d\'étranglement.',
      cta: 'Postuler Pour Un Audit',
    },
    contact: {
      badge: 'Prêt À Scaler',
      title: 'Arrête De Laisser De L\'Argent',
      subtitle: 'Sur La Table.',
      description: 'Si ton programme de coaching ne convertit pas comme il devrait, il y a une raison. Trouvons-la, réglons-la, et scalons-la.',
      button: 'Postuler',
    },
    footer: {
      tagline: 'Optimisation De Funnel De Vente Pour Coachs Info',
      services: 'Services',
      company: 'Entreprise',
      resources: 'Ressources',
      legal: 'Légal',
      copyright: '© 2024 327. Tous droits réservés.',
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