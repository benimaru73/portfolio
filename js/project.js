const projectData = [
    {
        title: "Plateforme USSD Générique",
        iconClass: "devicon-java-plain text-gray-400",
        description: "Plateforme USSD No-Code permettant aux entreprises de concevoir et déployer des services USSD complexes sans codage spécifique.",
        subDescription: "Conception d’un moteur USSD dynamique basé sur des graphes de nœuds récursifs, piloté via une interface web, offrant une flexibilité totale dans la définition des parcours utilisateurs.",
        detailsTitle: "Impact & Innovation",
        details: [
            { label: "Architecture No-Code", text: "Définition dynamique des parcours USSD (MENU, INPUT, REQUEST) sans redéploiement." },
            { label: "Intégration API", text: "Appels API temps réel pour services informatifs et transactions financières (ex : MVola)." },
            { label: "Multi-Tenancy", text: "Isolation complète des clients avec configuration des parcours et tokens directement en base." }
        ],
        tags: [
            { name: "Spring Boot", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" },
            { name: "Next.js", bgClass: "bg-teal-100 dark:bg-teal-900/30", textClass: "text-teal-700 dark:text-teal-300" },
            { name: "Graph Architecture", bgClass: "bg-purple-100 dark:bg-purple-900/30", textClass: "text-purple-700 dark:text-purple-300" }
        ]
    },
    {
        title: "ERP Socobis – Module Comptabilité",
        iconClass: "devicon-java-plain text-gray-400",
        description: "Création d’un module de comptabilité enterprise destiné à un ERP utilisé en environnement financier critique.",
        subDescription: "Conception et développement from scratch du module comptabilité Socobis, intégrant des règles métier complexes, des traitements asynchrones et une logique transactionnelle robuste.",
        detailsTitle: "Réalisations Techniques",
        details: [
            { label: "Création From Scratch", text: "Définition complète de la logique métier comptable et des flux transactionnels." },
            { label: "Architecture Asynchrone", text: "Traitements financiers optimisés pour la performance et la fiabilité." },
            { label: "Interopérabilité", text: "Intégration avec les systèmes existants garantissant la cohérence des données." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "Oracle", bgClass: "bg-gray-100 dark:bg-gray-700", textClass: "text-gray-700 dark:text-gray-300" },
            { name: "Enterprise Systems", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" }
        ]
    },
    {
        title: "Système National de Gestion des Cartes de Séjour",
        iconClass: "devicon-java-plain text-gray-400",
        description: "Remplacement complet du système existant du Ministère de l’Intérieur pour la gestion des cartes de séjour.",
        subDescription: "Analyse du système en place et conception d’une nouvelle solution nationale sécurisée couvrant l’ensemble du cycle de traitement des demandes administratives.",
        detailsTitle: "Modules Critiques",
        details: [
            { label: "Workflow National", text: "Gestion complète des demandes : soumission, validation et suivi administratif." },
            { label: "Données Sécurisées", text: "Centralisation et sécurisation des informations des demandeurs à l’échelle nationale." },
            { label: "Gestion Financière", text: "Automatisation du suivi des quittances et paiements administratifs." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "PostgreSQL", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" },
            { name: "Public Sector", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-700 dark:text-green-300" }
        ]
    },
    {
        title: "ERP Charcuterie Lewis – Module RH",
        iconClass: "devicon-java-plain text-gray-400",
        description: "Développement d’un module RH intégré à un ERP métier pour une entreprise agroalimentaire.",
        subDescription: "Digitalisation complète des processus RH avec mise en place de workflows structurés et centralisation sécurisée des données du personnel.",
        detailsTitle: "Fonctionnalités Clés",
        details: [
            { label: "Gestion RH", text: "Suivi des employés, gestion de la paie et des congés." },
            { label: "Workflow RH", text: "Recrutement, validation et suivi administratif des employés." },
            { label: "Architecture ERP", text: "Participation à l’architecture globale et à la logique métier critique." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "Oracle", bgClass: "bg-gray-100 dark:bg-gray-700", textClass: "text-gray-700 dark:text-gray-300" },
            { name: "ERP", bgClass: "bg-purple-100 dark:bg-purple-900/30", textClass: "text-purple-700 dark:text-purple-300" }
        ]
    }
];
