// Traductions pour le portfolio et CV
const translations = {
    fr: {
        nav: {
            projects: "Projets",
            experience: "Expérience",
            experienceShort: "Exp.",
            formation: "Formation",
            contact: "Contact"
        },
        hero: {
            badge: "Disponible pour de nouveaux défis",
            line1: "Je pense résolution.",
            line2: "Je parle solutions.",
            desc: 'Depuis 2025, j\'ai participé à plusieurs projets professionnels qui ont renforcé mes compétences et ma compréhension du métier. Actuellement développeur full stack chez <span class="font-bold text-gradient-600 dark:text-gradient-400">BICI</span>, je travaille sur des solutions pratiques tout en continuant à progresser chaque jour.<br><span class="block mt-3 md:mt-4 font-medium text-slate-900 dark:text-slate-200">Aujourd\'hui Dev full stack, je developpe des solutions qui génèrent un impact tangible.</span>',
            btnProjects: "Voir mes réalisations",
            btnCV: "Télécharger mon CV"
        },
        skills: {
            label: "Stack Technique"
        },
        sections: {
            projectsTitle: "Projets Sélectionnés",
            projectsDesc: 'Une collection de solutions <span class="text-blue-600 dark:text-blue-400">full-stack</span> déployées, alliant complexité métier et expérience utilisateur.',
            experienceTitle: "Parcours & Impact",
            formationTitle: "Formation Académique",
            formationDesc: 'Parcours universitaire à <span class="text-purple-600 dark:text-purple-400 font-semibold">ITU University</span>'
        },
        contact: {
            title: "Prêt à collaborer ?",
            desc: "J'aide les entreprises à transformer leurs défis techniques en avantages compétitifs.",
            btnCV: "Télécharger mon CV"
        },
        formation: {
            inProgress: "En cours"
        }
    },
    en: {
        nav: {
            projects: "Projects",
            experience: "Experience",
            experienceShort: "Exp.",
            formation: "Education",
            contact: "Contact"
        },
        hero: {
            badge: "Available for new challenges",
            line1: "I think resolution.",
            line2: "I speak solutions.",
            desc: 'Since 2025, I\'ve been involved in several professional projects that strengthened my skills and understanding of the craft. Currently a full stack developer at <span class="font-bold text-gradient-600 dark:text-gradient-400">BICI</span>, I work on practical solutions while continuing to grow every day.<br><span class="block mt-3 md:mt-4 font-medium text-slate-900 dark:text-slate-200">Today as a Full Stack Dev, I build solutions that create tangible impact.</span>',
            btnProjects: "View my work",
            btnCV: "Download my CV"
        },
        skills: {
            label: "Tech Stack"
        },
        sections: {
            projectsTitle: "Selected Projects",
            projectsDesc: 'A collection of deployed <span class="text-blue-600 dark:text-blue-400">full-stack</span> solutions, combining business complexity and user experience.',
            experienceTitle: "Journey & Impact",
            formationTitle: "Academic Background",
            formationDesc: 'University path at <span class="text-purple-600 dark:text-purple-400 font-semibold">ITU University</span>'
        },
        contact: {
            title: "Ready to collaborate?",
            desc: "I help companies turn their technical challenges into competitive advantages.",
            btnCV: "Download my CV"
        },
        formation: {
            inProgress: "In Progress"
        }
    }
};

// CV Translations
const cvTranslations = {
    fr: {
        title: "CV - Fitahiana Leong Eli Mathieu",
        downloadPDF: "📄 Télécharger PDF",
        role: "Ingénieur Backend Java - conception d'API et systèmes critiques",
        about: {
            title: "À PROPOS",
            intro: "Je pense résolution. Je parle solutions.",
            text: "<li>Conçoit et développe des solutions backend pour des systèmes métier.</li><li>Contribue aux choix techniques sur les API, la donnée et les flux.</li><li>Améliore la fiabilité, la performance et la traçabilité en production.</li>"
        },
        experience: {
            title: "EXPÉRIENCE PROFESSIONNELLE",
            present: "Présent",
            bici: {
                role: "Développeur Backend Java",
                period: "Sept. 2025 – Présent",
                description: "<li>Conçu et développé des API de paiement en Java EE avec Oracle et PostgreSQL.</li><li>Réduit d'environ 25 % les anomalies de flux via validations métier, revues de code et contrôles d'idempotence.</li>"
            },
            ibonia: {
                role: "Développeur Backend/Full Stack",
                period: "Mai 2025 – Sept. 2025",
                description: "<li>Développé une plateforme USSD No-Code avec moteur récursif (MENU, INPUT, REQUEST).</li><li>Divisé par 2 le délai de mise en production grâce à la configuration dynamique multi-client en base.</li>"
            }
        },
        projects: {
            title: "PROJETS MAJEURS",
            att: {
                title: "SPAT - Modules Gestion de Stock & Facturation",
                subtitle: "Contexte : Optimiser les flux de stock et la facturation portuaire en production.",
                tech: "Technologies utilisées : Java EE • Oracle • SQL",
                description: "<li>Rôle exact : Développement backend des modules stock et facturation BC/BL groupée, avec intégration au socle existant.</li><li>Résultat : UX améliorée et réduction estimée de 35 % du temps de paiement des factures.</li>"
            },
            socobis: {
                title: "ERP Socobis - Core Comptabilité",
                subtitle: "Contexte : Refonte du cœur comptable d'une industrie nationale (2025).",
                tech: "Technologies utilisées : Java EE • Oracle DB • SQL",
                description: "<li>Rôle exact : Développement backend des règles transactionnelles critiques, des vues de contrôle et des flux asynchrones.</li><li>Résultat : Réduction estimée de 40 % des corrections manuelles de journaux et meilleure cohérence des écritures.</li>"
            },
            ussd: {
                title: "Plateforme USSD No-Code Multi-Client",
                subtitle: "Contexte : Besoin de lancer rapidement des services USSD multi-clients.",
                tech: "Technologies utilisées : Spring Boot • Next.js • PostgreSQL",
                description: "<li>Rôle exact : Conception d'un moteur dynamique à nœuds récursifs, parsing API et isolation multi-tenant.</li><li>Résultat : Temps de déploiement réduit d'environ 70 % (de plusieurs jours à moins d'une journée).</li>"
            },
            fintech: {
                title: "ATT - Refonte Amendes, Redevances & Gages",
                subtitle: "Contexte : Refonte d'un existant pour fiabiliser les flux métier des centres ATT.",
                tech: "Technologies utilisées : Java EE • PostgreSQL • Workflow métier",
                description: "<li>Rôle exact : Développement backend des modules amendes, redevances agents, véhicules gagés et arrêt de gage.</li><li>Résultat : Réduction estimée de 30 % des retours de dossiers incomplets et suivi administratif plus fiable.</li>"
            }
        },
        skills: {
            title: "COMPÉTENCES TECHNIQUES",
            expert: "Expert",
            confirmed: "Confirmé",
            notions: "Notions"
        },
        formation: {
            title: "FORMATION",
            m1: {
                degree: "Master 1 (M1) - Informatique",
                period: "2025 - 2026",
                status: "En cours"
            },
            licence: {
                degree: "Licence Développement (L1-L3)",
                period: "2022 - 2025"
            }
        },
        languages: {
            title: "LANGUES",
            french: { name: "Français", level: "Courant" },
            malagasy: { name: "Malgache", level: "Natif" },
            english: { name: "Anglais", level: "Professionnel" }
        },
        footer: {
            location: "Antananarivo, Madagascar",
            portfolio: "Portfolio"
        }
    },
    en: {
        title: "Resume - Fitahiana Leong Eli Mathieu",
        downloadPDF: "📄 Download PDF",
        role: "Java Backend Engineer - API design and critical systems",
        about: {
            title: "ABOUT",
            intro: "I think resolution. I speak solutions.",
            text: "<li>Designs and develops backend solutions for business systems.</li><li>Contributes to technical choices on APIs, data, and processing flows.</li><li>Improves reliability, performance, and production traceability.</li>"
        },
        experience: {
            title: "PROFESSIONAL EXPERIENCE",
            present: "Present",
            bici: {
                role: "Java Backend Developer",
                period: "Sept. 2025 – Present",
                description: "<li>Designed and built payment APIs with Java EE, Oracle, and PostgreSQL.</li><li>Reduced flow anomalies by about 25% through business validation rules, code reviews, and idempotency checks.</li>"
            },
            ibonia: {
                role: "Backend/Full Stack Developer",
                period: "May 2025 – Sept. 2025",
                description: "<li>Built a No-Code USSD platform with a recursive engine (MENU, INPUT, REQUEST).</li><li>Cut rollout time by 50% through dynamic multi-tenant journey configuration.</li>"
            }
        },
        projects: {
            title: "MAJOR PROJECTS",
            att: {
                title: "SPAT - Stock Management & Billing Modules",
                subtitle: "Context: Optimize stock flows and port billing operations in production.",
                tech: "Technologies used: Java EE • Oracle • SQL",
                description: "<li>Exact role: Backend development of stock modules and grouped BC/BL billing, integrated with existing systems.</li><li>Result: Improved UX and an estimated 35% reduction in invoice payment processing time.</li>"
            },
            socobis: {
                title: "Socobis ERP - Core Accounting",
                subtitle: "Context: Rebuild of the accounting core for a national industrial company (2025).",
                tech: "Technologies used: Java EE • Oracle DB • SQL",
                description: "<li>Exact role: Backend development of critical transactional rules, control views, and asynchronous processing flows.</li><li>Result: Estimated 40% reduction in manual journal corrections and stronger accounting consistency.</li>"
            },
            ussd: {
                title: "Multi-Client No-Code USSD Platform",
                subtitle: "Context: Fast launch requirements for multi-client USSD services.",
                tech: "Technologies used: Spring Boot • Next.js • PostgreSQL",
                description: "<li>Exact role: Designed a recursive dynamic engine with API response parsing and multi-tenant isolation.</li><li>Result: About 70% faster deployment (from several days to less than one day).</li>"
            },
            fintech: {
                title: "ATT - Fines, Levies & Pledge Workflow Refactor",
                subtitle: "Context: Refactor an existing system to stabilize ATT business flows.",
                tech: "Technologies used: Java EE • PostgreSQL • Business workflow",
                description: "<li>Exact role: Backend development for fines, agent levies, pledged vehicles, and pledge release modules.</li><li>Result: Estimated 30% fewer incomplete files and more reliable administrative tracking.</li>"
            }
        },
        skills: {
            title: "TECHNICAL SKILLS",
            expert: "Expert",
            confirmed: "Confirmed",
            notions: "Familiar"
        },
        formation: {
            title: "EDUCATION",
            m1: {
                degree: "Master 1 (M1) - Computer Science",
                period: "2025 - 2026",
                status: "In Progress"
            },
            licence: {
                degree: "Bachelor's Degree Development (L1-L3)",
                period: "2022 - 2025"
            }
        },
        languages: {
            title: "LANGUAGES",
            french: { name: "French", level: "Fluent" },
            malagasy: { name: "Malagasy", level: "Native" },
            english: { name: "English", level: "Professional" }
        },
        footer: {
            location: "Antananarivo, Madagascar",
            portfolio: "Portfolio"
        }
    }
};

// Fonction pour obtenir la langue actuelle
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'fr';
}

// Fonction pour changer la langue
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    window.location.reload();
}

