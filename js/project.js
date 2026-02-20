const projectData = [
    {
        title: "Plateforme USSD No-Code (IBONIA) – Moteur Multi-Tenant",
        iconClass: "devicon-java-plain text-purple-400",
        description: "Conception d'un moteur USSD dynamique de type No-Code permettant le déploiement de services mobiles sans codage spécifique. Architecture multi-tenancy où chaque client configure ses parcours, APIs et tokens directement en base, sans redéploiement. Plateforme prête pour le déploiement commercial.",
        subDescription: "Modélisation d'un système arborescent basé sur des nœuds récursifs auto-référencés (comparable à N8N mais avec parsing XML avancé). Implémentation d'un typage logique des écrans USSD (MENU : navigation, INPUT : saisie, REQUEST : API). Intégration de PAPI (https://docs.papi.mg) pour les paiements mobiles (MVola, Airtel Money...) avec parsing dynamique des réponses API. Configuration visuelle complète via interface graphique.",
        detailsTitle: "Innovation Technique",
        details: [
            { label: "Moteur No-Code", text: "Comparable à N8N : Interface drag-and-drop + parsing XML technique pour définition des flux." },
            { label: "Typage Intelligent", text: "Standardisation stricte (MENU, INPUT, API REQUEST) avec logique conditionnelle et routage contextuel." },
            { label: "Multi-Tenancy", text: "Isolation totale des configurations clients avec gestion des tokens par tenant, prêt pour production." },
            { label: "Intégration PAPI", text: "Paiements mobile money (MVola, Airtel Money) via API PAPI avec parsing dynamique des réponses." },
            { label: "Zero Deployment", text: "Configuration complète en base de données sans redéploiement code, activation instantanée des services." },
            { label: "Parsing XML Avancé", text: "Définition technique des règles métier en XML pour personnalisation poussée." }
        ],
        tags: [
            { name: "Spring Boot", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" },
            { name: "Next.js", bgClass: "bg-black dark:bg-white/10", textClass: "text-black dark:text-white" },
            { name: "USSD", bgClass: "bg-purple-100 dark:bg-purple-900/30", textClass: "text-purple-700 dark:text-purple-300" },
            { name: "PAPI API", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-700 dark:text-green-300" },
            { name: "No-Code Engine", bgClass: "bg-pink-100 dark:bg-pink-900/30", textClass: "text-pink-700 dark:text-pink-300" }
        ]
    },
    {
        title: "ERP Socobis – Module COMPTABILITÉ & RH (659 Employés)",
        iconClass: "devicon-java-plain text-red-500",
        description: "Conception et développement du module de comptabilité pour l'un des pionniers de la biscuiterie à Madagascar (fondé en 1965). Gestion de 659 employés à l'échelle nationale avec un système traitant quotidiennement un volume massif de transactions financières. Définition de la logique métier comptable et des règles transactionnelles critiques.",
        subDescription: "Développement de modules comptables extensibles et évolutifs avec architecture asynchrone pour absorber la charge transactionnelle nationale. Implémentation des règles critiques : alignement automatique des journaux comptables, gestion sécurisée des suppressions de produits avec traçabilité complète. Conception avancée de vues SQL complexes pour optimisation des requêtes et reporting en temps réel.",
        detailsTitle: "Défis Techniques",
        details: [
            { label: "Échelle Nationale", text: "Gestion de 659 employés et transactions quotidiennes pour leader historique de la biscuiterie (1965)." },
            { label: "Règles Critiques", text: "Alignement automatique des journaux comptables + gestion sécurisée des suppressions produits." },
            { label: "Architecture Async", text: "Système asynchrone pour ingestion massive de transactions avec gestion des pics de charge." },
            { label: "Vues SQL Avancées", text: "Conception de vues SQL complexes pour optimisation des performances et reporting temps réel." },
            { label: "Intégrité Données", text: "Règles de validation comptable strictes et contrôles multi-niveaux avec audit trail complet." },
            { label: "Extensibilité", text: "Conception modulaire permettant l'ajout de nouvelles fonctionnalités sans refonte majeure." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "Oracle DB", bgClass: "bg-gray-100 dark:bg-gray-700", textClass: "text-gray-700 dark:text-gray-300" },
            { name: "659 Employés", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" },
            { name: "SQL Avancé", bgClass: "bg-purple-100 dark:bg-purple-900/30", textClass: "text-purple-700 dark:text-purple-300" }
        ]
    },
    {
        title: "Système National de Gestion des Cartes de Séjour (BICI - Ministère)",
        iconClass: "devicon-java-plain text-green-500",
        description: "Digitalisation d'un service public national pour le Ministère de l'Intérieur (BICI). Analyse fonctionnelle et technique du système existant, puis conception et développement d'un nouveau système complet destiné à remplacer la solution en place. Actuellement en phase de migration des données nationales.",
        subDescription: "Implémentation d'un workflow national de gestion des demandes (Saisie → Instruction → Validation multi-niveaux → Ministre → Délivrance). Gestion complète du cycle de vie des titres de séjour : de la demande initiale jusqu'à la validation finale par le Ministre. Centralisation sécurisée des données des demandeurs à l'échelle nationale avec automatisation du suivi des quittances et paiements administratifs. Participation active à l'architecture backend et à la définition de la logique métier critique.",
        detailsTitle: "Envergure Nationale",
        details: [
            { label: "Analyse & Refonte", text: "Audit complet du système legacy et conception nouvelle architecture pour remplacement intégral." },
            { label: "Workflow Ministre", text: "Orchestration nationale : Saisie → Instruction → Validation bureaux → Validation Ministre → Délivrance." },
            { label: "Migration Nationale", text: "En cours : Migration sécurisée des données historiques à l'échelle du pays." },
            { label: "Centralisation", text: "Base de données nationale sécurisée des demandeurs, documents administratifs et historiques." },
            { label: "Automatisation", text: "Suivi automatique des quittances, paiements, notifications et alertes multi-niveaux." },
            { label: "Architecture Critique", text: "Définition de la logique métier sensible et sécurisation des données gouvernementales." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "PostgreSQL", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" },
            { name: "GovTech", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-700 dark:text-green-300" },
            { name: "Migration Nationale", bgClass: "bg-yellow-100 dark:bg-yellow-900/30", textClass: "text-yellow-700 dark:text-yellow-300" }
        ]
    },
    {
        title: "Système National Cartes Grises & Permis Biométriques (ATT - 2026)",
        iconClass: "devicon-java-plain text-indigo-500",
        description: "Digitalisation d'un service public national pour le Ministère des Transports (2026). Adaptation du système Cartes de Séjour pour la gestion complète des cartes grises et permis de conduire biométriques à l'échelle nationale. Gestion avancée des lignes de transport, routes et centres de délivrance multi-régionaux.",
        subDescription: "Implémentation d'un workflow national unifié adapté au domaine des transports : gestion des demandes de documents (Saisie → Validation → Production). Extension du système pour gérer la complexité spécifique : lignes de transport public, routes nationales, centres de délivrance régionaux, véhicules et conducteurs. Centralisation sécurisée des données biométriques et automatisation complète du suivi administratif.",
        detailsTitle: "Infrastructure Nationale",
        details: [
            { label: "Adaptation Système", text: "Application basée sur architecture Cartes de Séjour, adaptée pour le domaine des transports." },
            { label: "Gestion Transports", text: "Modules spécifiques : lignes de transport, routes nationales, centres de délivrance régionaux." },
            { label: "Workflow National", text: "Orchestration multi-centres : Demande → Instruction → Validation → Production des documents." },
            { label: "Données Biométriques", text: "Centralisation sécurisée des empreintes et photos pour authentification des conducteurs." },
            { label: "Traçabilité Totale", text: "Suivi temps réel des recettes administratives et des documents délivrés par centre." },
            { label: "Multi-Documents", text: "Gestion simultanée : cartes grises, permis de conduire, vignettes et autorisations de transport." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "PostgreSQL", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" },
            { name: "GovTech", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-700 dark:text-green-300" },
            { name: "Multi-Centres", bgClass: "bg-purple-100 dark:bg-purple-900/30", textClass: "text-purple-700 dark:text-purple-300" }
        ]
    },
    {
        title: "ERP Charcutier Lewis – Module RH Complet",
        iconClass: "devicon-java-plain text-yellow-500",
        description: "Digitalisation complète de la gestion RH : suivi des employés, moteur de paie avancé et gestion des congés. Conception d'un workflow complet pour la gestion des processus RH (recrutement → validation → suivi) avec centralisation sécurisée des données. Module analytics intégré pour pilotage stratégique des ressources humaines.",
        subDescription: "Automatisation des notifications internes et des processus de validation multi-niveaux. Développement d'un moteur de paie complexe gérant les avances sur salaire et remboursements automatiques. Système de reporting avancé : nombre d'employés par point de vente, demandes d'absence par période, heures supplémentaires (total et moyennes par employé). Architecture backend robuste avec logique métier critique.",
        detailsTitle: "Modules Clés",
        details: [
            { label: "Workflow RH", text: "Processus complet : Recrutement → Onboarding → Validation → Suivi continu des employés." },
            { label: "Moteur de Paie Avancé", text: "Calcul complexe : gestion des avances sur salaire et remboursements automatiques échelonnés." },
            { label: "Gestion Congés", text: "Workflow de validation automatisé avec notification multi-niveaux et gestion des soldes." },
            { label: "Analytics RH", text: "Reporting : nombre par point, demandes d'absence, heures sup et moyennes individuelles." },
            { label: "Dossier Numérique", text: "Centralisation sécurisée : données employés, contrats, documents administratifs et historiques." },
            { label: "Architecture Backend", text: "Développement de la logique métier critique et règles de calcul complexes validées." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "Oracle", bgClass: "bg-gray-100 dark:bg-gray-700", textClass: "text-gray-700 dark:text-gray-300" },
            { name: "RH Analytics", bgClass: "bg-pink-100 dark:bg-pink-900/30", textClass: "text-pink-700 dark:text-pink-300" },
            { name: "Paie Complexe", bgClass: "bg-yellow-100 dark:bg-yellow-900/30", textClass: "text-yellow-700 dark:text-yellow-300" }
        ]
    },
    {
        title: "Smart Tender - Fonds Routier (Refonte 2025)",
        iconClass: "devicon-java-plain text-blue-500",
        description: "Refonte majeure 2025 du système d'aide à la décision pour l'attribution des marchés publics. Client historique BICI (plusieurs années de collaboration). Migration vers une architecture asynchrone moderne avec intégration d'Intelligence Artificielle pour l'évaluation automatisée des appels d'offres internes et externes.",
        subDescription: "Évolution majeure d'un système historique avec introduction de traitements asynchrones et d'algorithmes de scoring avancés par IA. Gestion différenciée des appels d'offres internes (entreprises publiques) et externes (secteur privé) via objet métier unifié. Garantie de l'équité et de la transparence des attributions avec traçabilité complète des décisions. Migration vers la nouvelle plateforme ERP BICI asynchrone avec IA intégrée.",
        detailsTitle: "Modernisation",
        details: [
            { label: "Refonte Architecture", text: "Migration de système legacy vers nouvelle plateforme ERP BICI asynchrone avec IA intégrée." },
            { label: "Appels d'Offres", text: "Gestion unifiée des AO internes (publics) et externes (privés) via objet métier centralisé." },
            { label: "Algorithme IA", text: "Notation technique/financière automatisée par IA pour évaluation objective et équitable." },
            { label: "Performance Async", text: "Architecture asynchrone pour traitement des dossiers lourds et calculs de scoring parallèles." },
            { label: "Audit & Transparence", text: "Traçabilité totale des processus de décision et conformité réglementaire garantie." },
            { label: "Client Historique", text: "Collaboration long terme avec Fonds Routier, évolution continue du système depuis plusieurs années." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "PostgreSQL", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" },
            { name: "IA Scoring", bgClass: "bg-purple-100 dark:bg-purple-900/30", textClass: "text-purple-700 dark:text-purple-300" },
            { name: "Architecture Async", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-700 dark:text-green-300" }
        ]
    },
    {
        title: "Gestion Portuaire - SPAT (Port de Toamasina)",
        iconClass: "devicon-java-plain text-orange-500",
        description: "Système financier critique pour le Port de Toamasina, le plus grand port de Madagascar. Maintenance et évolution du cœur comptable pour ce client historique de BICI (partenariat depuis 2022). Gestion de flux financiers massifs dans un environnement haute disponibilité avec zéro tolérance aux temps d'arrêt.",
        subDescription: "Maintenance corrective et évolutive d'un système legacy critique traitant les flux du hub portuaire national. Correction de bugs complexes dans l'écosystème Oracle existant. Optimisation majeure : développement du module de facturation groupée permettant de regrouper plusieurs bons de commande (BC) et bons de livraison (BL) en une seule facture, remplaçant le processus manuel un par un et multipliant l'efficacité opérationnelle.",
        detailsTitle: "Infrastructure Critique",
        details: [
            { label: "Hub Portuaire National", text: "Traitement des flux financiers du plus grand port de Madagascar (Toamasina)." },
            { label: "Client Historique", text: "Partenariat de confiance depuis 2022 avec maintenance continue et évolutions." },
            { label: "Optimisation Majeure", text: "Facturation groupée : BC/BL multiples → facture unique (vs. processus un par un précédent)." },
            { label: "Maintenance Legacy", text: "Corrections de bugs complexes dans l'écosystème Oracle critique existant." },
            { label: "Haute Disponibilité", text: "Zéro temps d'arrêt toléré sur les transactions financières portuaires." },
            { label: "Volumétrie Massive", text: "Gestion quotidienne des flux financiers de l'infrastructure portuaire nationale." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "Oracle", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "Port National", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" },
            { name: "Facturation Groupée", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-700 dark:text-green-300" }
        ]
    }
];
