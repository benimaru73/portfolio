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
        title: "Système National Cartes Grises & Permis Biométriques",
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
        subDescription: "Maintenance corrective et évolutive d'un système legacy critique traitant les flux du hub portuaire national. Correction de bugs complexes dans l'écosystème Oracle existant. Optimisation majeure : développement du module de facturation groupée permettant de regrouper plusieurs bons de commande (BC) et bons de livraison (BL) en une seule facture. Résultat : passage d'un traitement manuel fastidieux à une génération automatisée en 1 clic, réduisant les erreurs de saisie d'80% et multipliant l'efficacité opérationnelle par 5.",
        detailsTitle: "Infrastructure Critique",
        details: [
            { label: "Hub Portuaire National", text: "Traitement des flux financiers du plus grand port de Madagascar (Toamasina)." },
            { label: "Client Historique", text: "Partenariat de confiance depuis 2022 avec maintenance continue et évolutions." },
            { label: "Optimisation Facturation", text: "Facturation groupée : BC/BL multiples → facture unique en 1 clic (vs. processus manuel un par un). Gain : -80% erreurs saisie, +500% productivité." },
            { label: "Maintenance Legacy", text: "Corrections de bugs critiques dans l'écosystème Oracle existant avec zéro interruption de service." },
            { label: "Haute Disponibilité", text: "Zéro temps d'arrêt toléré sur les transactions financières portuaires (SLA 99.99%)." },
            { label: "Volumétrie Massive", text: "Traitement quotidien de milliers de transactions pour l'infrastructure portuaire nationale." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "Oracle", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "Port National", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" },
            { name: "Facturation Groupée", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-700 dark:text-green-300" }
        ]
    },
    {
        title: "Agence des Transports Terrestres (ATT) - Refonte Applicative",
        iconClass: "devicon-java-plain text-indigo-500",
        description: "Refonte d'un projet existant pour moderniser la gestion métier de l'ATT. Évolution du système pour mieux couvrir les opérations administratives des centres et le suivi des dossiers véhicules.",
        subDescription: "Contribution directe sur les modules clés : système d'amendes, paiement des redevances des agents, gestion des voitures gagées et traitement des arrêts de gage. Intégration dans un workflow simple de demande et validation.",
        detailsTitle: "Contributions Métier",
        details: [
            { label: "Refonte", text: "Reprise d'un système existant avec adaptation des règles métier et modernisation des écrans." },
            { label: "Système d'Amendes", text: "Mise en place du cycle de gestion des amendes avec suivi et validation des dossiers." },
            { label: "Redevances Agents", text: "Développement du paiement des redevances des agents avec traçabilité des opérations." },
            { label: "Voitures Gagées", text: "Gestion des véhicules gagés dans le processus administratif." },
            { label: "Arrêt de Gage", text: "Ajout du traitement d'arrêt de gage pour clôturer et régulariser les dossiers." },
            { label: "Workflow", text: "Parcours opérationnel centré sur Demande → Validation pour fluidifier le traitement." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "GovTech", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-700 dark:text-green-300" },
            { name: "Amendes", bgClass: "bg-yellow-100 dark:bg-yellow-900/30", textClass: "text-yellow-700 dark:text-yellow-300" },
            { name: "Redevances", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" }
        ]
    },
    {
        title: "ERP Agro-Alimentaire Malgache – Vente & Transformation",
        iconClass: "devicon-java-plain text-amber-600",
        description: "Système intégré de gestion pour industrie agro-alimentaire malgache combinant gestion de la vente et cycles de production. Orchestration complète de la chaîne de valeur : du client (commandes, facturation, encaissements) jusqu'à la production (transformation des matières premières en produits finis). Architecture multi-niveaux avec validation hiérarchique et contrôle temporel.",
        subDescription: "Module Vente : gestion des commandes (BC), suivi des livraisons (BL), facturation avec calcul automatique des échéances de paiement, relances et mailing de recouvrement. Module Transformation : ordres de fabrication avec traçabilité des matières premières, calcul des rendements, gestion de la maintenance machine. Validation hiérarchique multi-niveaux avec contrôles temporels (jours ouvrables, délais), workflow d'approbation des devis, des bons de commande et des factures. Automatisation complète de l'ensemble des processus commerciaux et productifs.",
        detailsTitle: "Chaîne de Valeur Intégrée",
        details: [
            { label: "Gestion Commerciale", text: "Flow complet BC → BL → Facture avec échéances de paiement automatiques, mailing de recouvrement et relances." },
            { label: "Facturation Intelligente", text: "Calcul des dates d'échéance selon conditions commerciales, échelonnement des paiements, gestion des acomptes." },
            { label: "Validation Hiérarchique", text: "Workflow multi-niveaux avec approbations par rôle, contrôles temporels (horaires, jours ouvrables) et audit trail complet." },
            { label: "Ordres de Fabrication", text: "Planning de production lié aux commandes, traçabilité des matières premières par lot, liaison production ↔ stock." },
            { label: "Rendement & Traçabilité", text: "Calcul du rendement matières premières→produits finis, historique détaillé par lot, conformité qualité." },
            { label: "Maintenance Machine", text: "Planification préventive, suivi de maintenance corrective, impact sur capacité production et délais livraison." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "Agro-Alimentaire", bgClass: "bg-amber-100 dark:bg-amber-900/30", textClass: "text-amber-700 dark:text-amber-300" },
            { name: "Vente & Production", bgClass: "bg-green-100 dark:bg-green-900/30", textClass: "text-green-700 dark:text-green-300" },
            { name: "Facturation Avancée", bgClass: "bg-yellow-100 dark:bg-yellow-900/30", textClass: "text-yellow-700 dark:text-yellow-300" },
            { name: "Workflow Hiérarchique", bgClass: "bg-blue-100 dark:bg-blue-900/30", textClass: "text-blue-700 dark:text-blue-300" }
        ]
    },
    {
        title: "Savonnerie Tropicale – Module Ventes avec Pricing Versionnié",
        iconClass: "devicon-java-plain text-rose-500",
        description: "Système de gestion commerciale pour savonnerie artisanale malgache avec architecture de pricing ultra-sophistiquée. Défi technique majeur : gestion de prix différenciés par catégorie client avec délai d'application décalé. Chaque client possède sa propre stratégie d'adoption des tarifs, créant une complexité temporelle sans équivalent.",
        subDescription: "Problématique métier critique : Les savons ne sont pas facturés au même prix selon le type de client (VIP, Distributeur, Revendeur, Détaillant). Mais l'enjeu technique est ailleurs : quand un nouveau prix global est défini, chaque client l'adopte selon son délai personnel (ex: Client A après 3 jours, Client B après 5 jours, Client C après 7 jours). Le système doit calculer le prix applicable à chaque client à n'importe quelle date donnée, en jonglant avec : (1) versioning temporel des prix par rôle client, (2) délai d'activation personnalisé par client, (3) historique complet pour traçabilité légale, (4) retrouvabilité du prix appliqué sur une facture émise il y a 2 mois. Nécessite une architecture Event Sourcing avec mécanisme de time-shifting complexe et calcul dynamique de validité tarifaire.",
        detailsTitle: "Défis Architecturaux",
        details: [
            { label: "Pricing Multi-Couches", text: "Prix base × coefficient rôle (VIP: -20%, Distributeur: -15%, Revendeur: -10%, Détaillant: +0%). Mais ce n'est que la surface." },
            { label: "Versioning Temporel Décalé", text: "Nouveau prix global = 01/05/2026. Client A l'adopte 01/05, Client B le 06/05, Client C le 08/05. Chaque facture du 05/05 doit retrouver le bon prix." },
            { label: "Time-Shifting per Client", text: "Stockage de délai d'adoption (days_to_apply) par client. Calcul rétrospectif : dateFacture + jours_restants_adoption = dateActivationPrix." },
            { label: "Retrouvabilité Tarifaire", text: "Une facture de Mars doit pouvoir retrouver le prix appliqué + motif + délai utilisé. Impossible sans snapshot temporel complet." },
            { label: "Cohérence Multi-Produit", text: "Le prix dépend de (Produit × Client × DateEmission × RôleClient × DélaiApplication). Changement indépendant de chaque dimension = explosion combinatoire." },
            { label: "Event Sourcing Critique", text: "Implémentation d'un système immutable : chaque changement de prix = événement enregistré avec timestamp, raison, client affecté, validité temporelle." }
        ],
        tags: [
            { name: "Java EE", bgClass: "bg-red-100 dark:bg-red-900/30", textClass: "text-red-700 dark:text-red-300" },
            { name: "Event Sourcing", bgClass: "bg-purple-100 dark:bg-purple-900/30", textClass: "text-purple-700 dark:text-purple-300" },
            { name: "Pricing Engine", bgClass: "bg-rose-100 dark:bg-rose-900/30", textClass: "text-rose-700 dark:text-rose-300" },
            { name: "Time Shifting", bgClass: "bg-indigo-100 dark:bg-indigo-900/30", textClass: "text-indigo-700 dark:text-indigo-300" },
            { name: "Industrie Malgache", bgClass: "bg-orange-100 dark:bg-orange-900/30", textClass: "text-orange-700 dark:text-orange-300" }
        ]
    }
];
