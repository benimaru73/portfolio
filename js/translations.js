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
        role: "Développeur Full Stack",
        about: {
            title: "À PROPOS",
            intro: "Je pense résolution. Je parle solutions.",
            text: "L'ingénierie logicielle en est l'expression. Développeur Full Stack passionné, je conçois des systèmes robustes et scalables qui résolvent des problématiques métier complexes. Depuis 2025, j'ai contribué à plusieurs projets d'envergure nationale et industrielle, alliant expertise technique (Java EE, Spring Boot, React/Next.js) et compréhension fine des enjeux business. Spécialisé dans l'architecture d'applications critiques (Fintech, GovTech, ERP), je m'engage à livrer des solutions performantes, maintenables et centrées sur l'impact utilisateur."
        },
        experience: {
            title: "EXPÉRIENCE PROFESSIONNELLE",
            present: "Présent",
            bici: {
                role: "Développeur Full Stack",
                period: "Sept. 2025 – Présent",
                description: "Pilotage technique et conception de solutions fintech à fort impact. Supervision de l'architecture logicielle et garant de la qualité du code pour des systèmes critiques."
            },
            ibonia: {
                role: "Développeur Full Stack",
                period: "Mai 2025 – Sept. 2025",
                description: "Création d'une plateforme USSD No-Code innovante. Transformation de la logique métier complexe en interface graphique intuitive, permettant le déploiement rapide de services mobiles."
            }
        },
        projects: {
            title: "PROJETS MAJEURS",
            att: {
                title: "Système National d'Identité & Transport (GovTech)",
                subtitle: "Cartes Grises & Permis Biométriques (ATT - 2026)",
                description: "Modernisation de l'administration publique malgache. Centralisation des données biométriques, orchestration des workflows de délivrance des titres sécurisés au niveau national."
            },
            socobis: {
                title: "ERP Socobis - Core Comptabilité",
                subtitle: "Refonte complète du système financier (2025)",
                description: "Développement from scratch du cœur comptable critique. Architecture asynchrone pour l'ingestion massive de données avec validation comptable stricte."
            },
            ussd: {
                title: "Plateforme USSD No-Code Multi-Client",
                subtitle: "Moteur USSD dynamique pour IBONIA",
                description: "Conception d'une architecture Data-Driven permettant le déploiement instantané de services mobiles sans redéploiement technique. Multi-tenancy avec isolation complète."
            },
            lewis: {
                title: "ERP RH & Paie - Lewis Industry",
                subtitle: "Digitalisation intégrale des processus RH (2025)",
                description: "Automatisation de la paie et gestion du capital humain. Moteur de calcul dynamique multicritères et dossier employé numérique centralisé."
            },
            tender: {
                title: "Smart Tender - Fonds Routier",
                subtitle: "Système d'aide à la décision pour marchés publics (2025)",
                description: "Algorithmes de scoring avancés pour garantir l'équité des attributions. Architecture asynchrone pour traitements lourds et transparence totale."
            },
            spat: {
                title: "Gestion Portuaire - SPAT",
                subtitle: "Système financier critique - Port de Toamasina",
                description: "Maintenance et évolution du cœur comptable depuis 2022. Gestion de flux financiers massifs dans un environnement haute disponibilité (zéro downtime)."
            }
        },
        skills: {
            title: "COMPÉTENCES TECHNIQUES",
            backend: "Backend Development",
            frontend: "Web Development",
            database: "Bases de Données",
            devops: "DevOps & Outils"
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
        role: "Full Stack Developer",
        about: {
            title: "ABOUT",
            intro: "I think resolution. I speak solutions.",
            text: "Software engineering is the expression. Passionate Full Stack Developer, I design robust and scalable systems that solve complex business challenges. Since 2025, I've contributed to several national and industrial-scale projects, combining technical expertise (Java EE, Spring Boot, React/Next.js) with deep understanding of business stakes. Specialized in critical application architecture (Fintech, GovTech, ERP), I'm committed to delivering performant, maintainable, and user-impact-centered solutions."
        },
        experience: {
            title: "PROFESSIONAL EXPERIENCE",
            present: "Present",
            bici: {
                role: "Full Stack Developer",
                period: "Sept. 2025 – Present",
                description: "Technical leadership and design of high-impact fintech solutions. Supervision of software architecture and code quality guardian for critical systems."
            },
            ibonia: {
                role: "Full Stack Developer",
                period: "May 2025 – Sept. 2025",
                description: "Creation of an innovative No-Code USSD platform. Transformation of complex business logic into intuitive graphical interface, enabling rapid mobile service deployment."
            }
        },
        projects: {
            title: "MAJOR PROJECTS",
            att: {
                title: "National Identity & Transport System (GovTech)",
                subtitle: "Vehicle Registration & Biometric Driver's Licenses (ATT - 2026)",
                description: "Modernization of Malagasy public administration. Centralization of biometric data, orchestration of national-level secure document issuance workflows."
            },
            socobis: {
                title: "Socobis ERP - Core Accounting",
                subtitle: "Complete financial system overhaul (2025)",
                description: "From-scratch development of critical accounting core. Asynchronous architecture for massive data ingestion with strict accounting validation."
            },
            ussd: {
                title: "Multi-Client No-Code USSD Platform",
                subtitle: "Dynamic USSD engine for IBONIA",
                description: "Design of Data-Driven architecture enabling instant mobile service deployment without technical redeployment. Multi-tenancy with complete isolation."
            },
            lewis: {
                title: "HR & Payroll ERP - Lewis Industry",
                subtitle: "Full HR process digitalization (2025)",
                description: "Payroll automation and human capital management. Multi-criteria dynamic calculation engine and centralized digital employee records."
            },
            tender: {
                title: "Smart Tender - Road Fund",
                subtitle: "Decision support system for public procurement (2025)",
                description: "Advanced scoring algorithms to ensure fair attributions. Asynchronous architecture for heavy processing and total transparency."
            },
            spat: {
                title: "Port Management - SPAT",
                subtitle: "Critical financial system - Port of Toamasina",
                description: "Maintenance and evolution of accounting core since 2022. Management of massive financial flows in high-availability environment (zero downtime)."
            }
        },
        skills: {
            title: "TECHNICAL SKILLS",
            backend: "Backend Development",
            frontend: "Web Development",
            database: "Databases",
            devops: "DevOps & Tools"
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

