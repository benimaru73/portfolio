const projectData = [
    {
        title: "Plateforme USSD No-Code - Multi-Client",
        iconClass: "devicon-java-plain text-purple-400",
        description: "Moteur USSD dynamique et générique pour IBONIA.",
        subDescription: "Conception d'une architecture abstraite 'Data-Driven' permettant le déploiement instantané de services mobiles (Info, Transactionnel) sans redéploiement technique.",
        detailsTitle: "Innovation Technique",
        details: [
            { label: "Core Engine", text: "Arbre de décision récursif auto-référencé." },
            { label: "Typage", text: "Standardisation stricte (MENU, INPUT, API REQUEST)." },
            { label: "Multi-Tenancy", text: "Isolation totale des configurations clients." }
        ],
        tags: [
            { name: "Spring Boot", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" },
            { name: "Next.js", bgClass: "bg-black dark:bg-white/10", textClass: "text-black dark:text-white" },
            { name: "USSD", bgClass: "bg-purple-100 dark:bg-purple-900/30", textClass: "text-purple-700 dark:text-purple-300" }
        ]
    },
    {
        title: "ERP Socobis - Core Comptabilité",
        iconClass: "devicon-java-plain text-red-500",
        description: "Refonte 'From Scratch' (2025) du système financier d'une industrie majeure malgache.",
        subDescription: "Développement du cœur comptable critique. Définition de la logique métier et implémentation d'une architecture asynchrone pour absorber la charge transactionnelle.",
        detailsTitle: "Défis Techniques",
        details: [
            { label: "Synchronicité", text: "Architecture asynchrone pour l'ingestion massive." },
            { label: "Intégrité", text: "Règles de validation comptable strictes." },
            { label: "Scalabilité", text: "Conception modulaire évolutive." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "Oracle DB", bgClass: "bg-gray-100 dark:bg-gray-700", textClass: "text-gray-700 dark:text-gray-300" },
            { name: "Enterprise", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" }
        ]
    },
    {
        title: "Système National Identité & Transport",
        iconClass: "devicon-java-plain text-green-500",
        description: "Digitalisation des Titres Sécurisés : Cartes de Séjour (2025)",
        subDescription: "Modernisation de l'administration publique malgache. Unification des workflows de délivrance des titres sécurisés au niveau national pour le Ministère de l'Intérieur.",
        detailsTitle: "Envergure Nationale",
        details: [
            { label: "Sécurité", text: "Centralisation des données biométriques et sensibles." },
            { label: "Workflow", text: "Orchestration : Demande → Instruction → Production." },
            { label: "Traçabilité", text: "Suivi temps réel des recettes administratives." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "PostgreSQL", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" },
            { name: "GovTech", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-700 dark:text-green-300" }
        ]
    },
    {
        title: "Système National Identité & Transport",
        iconClass: "devicon-java-plain text-green-500",
        description: " Cartes Grises & Permis Biométriques (ATT - 2026).",
        subDescription: "Modernisation de l'administration publique malgache. Unification des workflows de délivrance des permis au niveau national pour le Ministère des Transports.",
        detailsTitle: "Envergure Nationale",
        details: [
            { label: "Sécurité", text: "Centralisation des données biométriques et sensibles." },
            { label: "Workflow", text: "Orchestration : Demande → Instruction → Production." },
            { label: "Traçabilité", text: "Suivi temps réel des recettes administratives." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "PostgreSQL", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" },
            { name: "GovTech", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-700 dark:text-green-300" }
        ]
    },,
    {
        title: "ERP RH & Paie - Lewis Industry",
        iconClass: "devicon-java-plain text-yellow-500",
        description: "Digitalisation intégrale des processus RH depuis 2025.",
        subDescription: "Automatisation complexe de la paie et gestion du capital humain pour un acteur industriel, remplaçant les processus manuels par un flux digitalisé de bout en bout.",
        detailsTitle: "Modules Clés",
        details: [
            { label: "Paie", text: "Moteur de calcul dynamique multicritères." },
            { label: "Processus", text: "Workflow de validation congés/absences." },
            { label: "Data", text: "Dossier employé numérique centralisé." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "Oracle", bgClass: "bg-gray-100 dark:bg-gray-700", textClass: "text-gray-700 dark:text-gray-300" },
            { name: "RH", bgClass: "bg-pink-100 dark:bg-pink-900/30", textClass: "text-pink-700 dark:text-pink-300" }
        ]
    },
    {
        title: "Smart Tender - Fonds Routier",
        iconClass: "devicon-java-plain text-blue-500",
        description: "Refonte 2025 : Système d'aide à la décision pour l'attribution des marchés publics.",
        subDescription: "Évolution majeure d'un système historique (Client depuis plusieurs années). Introduction de traitements asynchrones et d'algorithmes de scoring avancés pour garantir l'équité des attributions.",
        detailsTitle: "Modernisation",
        details: [
            { label: "Algorithme", text: "Notation technique/financière automatisée." },
            { label: "Performance", text: "Nouvelle architecture Async pour les traitements lourds." },
            { label: "Audit", text: "Transparence totale des processus de décision." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "PostgreSQL", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" },
            { name: "Public", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-700 dark:text-green-300" }
        ]
    },
    {
        title: "Gestion Portuaire - SPAT",
        iconClass: "devicon-java-plain text-orange-500",
        description: "Système financier critique pour le Port de Toamasina (Le plus grand de Madagascar).",
        subDescription: "Maintenance et évolution du cœur comptable pour ce client historique de BICI (depuis 2022). Gestion de flux financiers massifs dans un environnement haute disponibilité.",
        detailsTitle: "Infrastructure Critique",
        details: [
            { label: "Volumétrie", text: "Traitement des flux du hub portuaire national." },
            { label: "Legacy", text: "Intégration fine avec l'écosystème Oracle existant." },
            { label: "Fiabilité", text: "Zéro temps d'arrêt toléré sur les transactions." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "Oracle", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "Logistics", bgClass: "bg-yellow-100 dark:bg-yellow-900/30", textClass: "text-yellow-700 dark:text-yellow-300" }
        ]
    }
];
