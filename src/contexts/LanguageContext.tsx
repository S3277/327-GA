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
      title: 'YOUR FUNNEL IS BLEEDING MONEY',
      subtitle: 'And you didn\'t even notice.',
      description: 'I specialize in tearing apart your funnel and rebuilding it into something that actually closes — VSL, copy, automation, community. All of it.',
      primaryButton: 'SEE HOW 327 DOES IT →',
      secondaryButton: 'See How It Works',
    },
    services: {
      badge: 'What\'s Costing You',
      title: 'Where Info Coaches',
      subtitle: 'Lose Money',
      funnel: {
        title: 'VSL That Converts',
        description: 'Your VSL is the first thing a prospect sees. If it doesn\'t hook them in 8 seconds, they\'re gone. I script, structure, and optimize VSLs that turn cold traffic into booked calls — on autopilot.',
      },
      automation: {
        title: 'AI Qualification System',
        description: 'You\'re losing hours every week on leads who were never going to buy. I build AI-powered forms that filter, score, and route only serious buyers to your calendar. No more wasted calls.',
      },
      analytics: {
        title: 'Copy That Sells',
        description: 'Weak copy is silently killing your conversions every single day. I rewrite your landing pages, emails, and sales assets using direct-response frameworks that turn skeptics into buyers.',
      },
      community: {
        title: 'Discord Community',
        description: 'A dead community kills retention and kills upsells. I build and structure Discord communities that keep your clients engaged, reduce refunds, and create new revenue opportunities.',
      },
      bottleneck: {
        title: 'Bottleneck Identification',
        description: 'Most coaches have no idea where their funnel is bleeding. I do a full audit of your entire system and pinpoint the exact leaks costing you money — before we fix anything.',
      },
    },
    process: {
      badge: 'The Process',
      title: 'How We Scale',
      subtitle: 'Your Coaching Program',
      step1: {
        title: 'Funnel Audit',
        description: 'We tear apart your current funnel and find exactly where you\'re losing money. No guessing.',
      },
      step2: {
        title: 'System Build',
        description: 'We deploy your new VSL, AI qualification form, and rewritten copy. Your funnel is now a machine.',
      },
      step3: {
        title: 'Community Setup',
        description: 'We build and launch your Discord or Skool community, fully integrated into your program.',
      },
      step4: {
        title: 'Scale',
        description: 'With everything running, we optimize continuously — lower acquisition cost, higher LTV, more revenue.',
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
      title: 'TON FUNNEL SAIGNE DE L\'ARGENT',
      subtitle: 'Et tu ne t\'en étais même pas rendu compte.',
      description: 'Je me spécialise dans démonter ton funnel et le reconstruire pour qu\'il close vraiment — VSL, copy, automatisation, communauté. Tout.',
      primaryButton: 'SEE HOW 327 DOES IT →',
      secondaryButton: 'Voir Le Processus',
    },
    services: {
      badge: 'Ce Qui Te Coûte Cher',
      title: 'Où Les Coachs Info',
      subtitle: 'Perdent De L\'Argent',
      funnel: {
        title: 'VSL Qui Convertit',
        description: 'Ton VSL c\'est la première chose qu\'un prospect voit. S\'il accroche pas en 8 secondes, c\'est mort. Je scripte, structure et optimise des VSL qui transforment le trafic froid en appels réservés — en automatique.',
      },
      automation: {
        title: 'Système De Qualification IA',
        description: 'Tu perds des heures chaque semaine sur des leads qui n\'achèteront jamais. Je construis des formulaires IA qui filtrent, scorent et envoient uniquement les acheteurs sérieux vers ton calendrier. Fini les appels perdus.',
      },
      analytics: {
        title: 'Copy Qui Vend',
        description: 'Le mauvais copy tue tes conversions en silence chaque jour. Je réécris tes landing pages, emails et assets avec des frameworks de réponse directe qui transforment les sceptiques en acheteurs.',
      },
      community: {
        title: 'Communauté Discord',
        description: 'Une communauté morte tue la rétention et les upsells. Je construis et structure des communautés Discord qui gardent tes clients engagés, réduisent les remboursements et créent de nouvelles opportunités de revenus.',
      },
      bottleneck: {
        title: 'Identification Des Blocages',
        description: 'La plupart des coachs n\'ont aucune idée d\'où leur funnel saigne. Je fais un audit complet de ton système et j\'identifie les fuites exactes qui te coûtent de l\'argent — avant de tout réparer.',
      },
    },
    process: {
      badge: 'Le Processus',
      title: 'Comment On Scale',
      subtitle: 'Ton Programme De Coaching',
      step1: {
        title: 'Audit Du Funnel',
        description: 'On déchire ton funnel actuel et on trouve exactement où tu perds de l\'argent. Pas de devinette.',
      },
      step2: {
        title: 'Construction Du Système',
        description: 'On déploie ton nouveau VSL, formulaire de qualification IA et copy réécrit. Ton funnel est maintenant une machine.',
      },
      step3: {
        title: 'Setup De La Communauté',
        description: 'On construit et lance ta communauté Discord ou Skool, totalement intégrée à ton programme.',
      },
      step4: {
        title: 'Scale',
        description: 'Avec tout en place, on optimise en continu — coût d\'acquisition plus bas, LTV plus haute, plus de revenu.',
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