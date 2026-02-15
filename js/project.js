const projectData = [
    {
        title: "Moteur USSD No-Code",
        iconClass: "devicon-java-plain text-purple-400",
        description: "Plateforme SaaS permettant le déploiement instantané de services USSD complexes.",
        subDescription: "Élimination du besoin de développement spécifique grâce à un moteur de graphes récursifs pilotable via une interface web moderne.",
        detailsTitle: "Innovation Technique",
        details: [
            { label: "Moteur Dynamique", text: "Interprétation temps réel de parcours définis en JSON/Base de données." },
            { label: "Connectivité", text: "Passerelle API universelle pour intégrations bancaires et Telco (MVola, Orange Money)." },
            { label: "Scalabilité", text: "Architecture isolée multi-locataire (Multi-tenancy)." }
        ],
        tags: [
            { name: "Spring Boot", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" },
            { name: "Graph Algo", bgClass: "bg-purple-100 dark:bg-purple-900/30", textClass: "text-purple-700 dark:text-purple-300" },
            { name: "SaaS", bgClass: "bg-teal-100 dark:bg-teal-900/30", textClass: "text-teal-700 dark:text-teal-300" }
        ]
    },
    {
        title: "Core Banking ERP - Module Comptable",
        iconClass: "devicon-java-plain text-red-500",
        description: "Cœur comptable pour un ERP financier critique (Socobis).",
        subDescription: "Architecture robuste gérant des millions d'écritures avec une intégrité transactionnelle absolue.",
        detailsTitle: "Défis Relevés",
        details: [
            { label: "Performance", text: "Traitement asynchrone des écritures de masse." },
            { label: "Conformité", text: "Implémentation stricte des normes comptables (PCG)." },
            { label: "Fiabilité", text: "Zéro perte de données grâce aux transactions ACID distribuées." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "Oracle PL/SQL", bgClass: "bg-gray-100 dark:bg-gray-700", textClass: "text-gray-700 dark:text-gray-300" },
            { name: "Fintech", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" }
        ]
    },
    {
        title: "Système National Cartes de Séjour",
        iconClass: "devicon-java-plain text-green-500",
        description: "Solution e-Gouvernement pour le Ministère de l’Intérieur.",
        subDescription: "Modernisation de l'administration publique par la digitalisation sécurisée du cycle de vie des titres de séjour.",
        detailsTitle: "Modules Critiques",
        details: [
            { label: "Sécurité", text: "Chiffrement et traçabilité des données sensibles." },
            { label: "Workflow", text: "Orchestration des étapes de validation administrative." },
            { label: "Reporting", text: "Tableaux de bord temps réel pour le suivi des recettes." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "PostgreSQL", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" },
            { name: "GovTech", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-700 dark:text-green-300" }
        ]
    },
    {
        title: "ERP Agro-Industriel - RH",
        iconClass: "devicon-java-plain text-yellow-500",
        description: "Digitalisation des processus RH pour l'industrie (Lewis).",
        subDescription: "Centralisation des données du personnel et automatisation de la paie dans un contexte industriel multi-sites.",
        detailsTitle: "Fonctionnalités",
        details: [
            { label: "Paie", text: "Moteur de calcul paramétrable complexe." },
            { label: "Planification", text: "Gestion des temps et des activités." },
            { label: "Intégration", text: "Liaison native avec les modules de production." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "Oracle", bgClass: "bg-gray-100 dark:bg-gray-700", textClass: "text-gray-700 dark:text-gray-300" },
            { name: "Industrial ERP", bgClass: "bg-purple-100 dark:bg-purple-900/30", textClass: "text-purple-700 dark:text-purple-300" }
        ]
    },
    {
        title: "Smart Tender - Fonds Routier",
        iconClass: "devicon-java-plain text-blue-500",
        description: "Système d'aide à la décision pour appels d'offres publics.",
        subDescription: "Algorithmes d'évaluation automatique garantissant l'équité et la transparence dans l'attribution des marchés BTP.",
        detailsTitle: "Points Forts",
        details: [
            { label: "Auditabilité", text: "Logs inaltérables de chaque étape de décision." },
            { label: "Scoring", text: "Calcul automatique des notes techniques et financières." },
            { label: "Processus", text: "Workflow de validation multi-niveaux." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "PostgreSQL", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" },
            { name: "Decision Support", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-700 dark:text-green-300" }
        ]
    },
    {
        title: "Gestion Portuaire (SPAT)",
        iconClass: "devicon-java-plain text-orange-500",
        description: "Système comptable métier pour infrastructure critique.",
        subDescription: "Solution haute performance adaptée aux spécificités du trafic maritime et de la facturation portuaire.",
        detailsTitle: "Spécificités",
        details: [
            { label: "Métier", text: "Adaptation aux règles de facturation maritime." },
            { label: "Legacy", text: "Intégration transparente avec l'existant." },
            { label: "Volume", text: "Gestion de forts volumes transactionnels." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "Oracle", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "Logistics", bgClass: "bg-yellow-100 dark:bg-yellow-900/30", textClass: "text-yellow-700 dark:text-yellow-300" }
        ]
    }
];
