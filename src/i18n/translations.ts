export type Language = 'fr' | 'en'

export const translations = {
    fr: {
        nav: {
            experiences: 'Expériences',
            projects: 'Projets principaux',
            skills: 'Compétences & technos',
            courses: 'Formations',
            contact: 'Me contacter',
        },
        sectionSubtitles: {
            experiences: 'Parcours et missions',
            projects: 'Sélection de réalisations',
            skills: 'Stack technique et outils',
            courses: 'Diplômes et parcours académique',
            contact: 'Disponible pour collaborer',
        },
        header: {
            jobTitle: 'Ingénieur conception & développement',
            description1: 'Ingénieur conception & développement full stack',
            description2:
                "Passionné d'informatique et de nouvelles technologies",
            description3: 'Actuellement en mission chez Amundi',
            metaLine:
                'Ingénieur web et mobile, 8 ans d’expérience',
            tagline:
                'Je conçois des produits web et mobiles solides, lisibles et simples à faire évoluer.',
            ctaContact: 'Me contacter',
            ctaLinkedin: 'LinkedIn',
            aside: {
                availability: 'Disponible pour freelance et CDI',
                basedInLabel: 'Basé à',
                basedInValue: 'Paris, France',
                roleLabel: 'Poste',
                roleValue: 'Ingénieur Java chez Amundi',
                stackLabel: 'Stack',
                stackValue: 'Java, TypeScript, React, Node, SQL',
                languagesLabel: 'Langues',
                languagesValue: 'Français / Anglais (C1)',
                timeOfDay: {
                    late: 'Paris / Tard',
                    early: 'Paris / Tôt',
                    morning: 'Paris / Matin',
                    midday: 'Paris / Midi',
                    afternoon: 'Paris / Après-midi',
                    evening: 'Paris / Soir',
                    night: 'Paris / Nuit',
                },
            },
        },
        user: {
            drivingLicence: 'Permis B',
            languages: {
                french: 'Français',
                frenchLevel: 'Langue maternelle',
                english: 'Anglais',
                englishLevel: 'Niveau C1',
            },
        },
        experiences: {
            types: {
                cdi: 'CDI',
                apprenticeship: 'Apprentissage',
                freelance: 'Indépendant',
            },
            amundi: {
                title: 'Ingénieur développement Java',
                activities: [
                    "Prestataire chez Olympp, en mission au sein d'Amundi, le premier gérant d'actifs financiers européens",
                    "Ingénieur en développement Java au sein de l'équipe gestion de portefeuille",
                    "Maintenance et développement de nouvelles features sur l'outil Alto destiné aux gestionnaires de portefeuilles clients",
                ],
            },
            casden: {
                title: 'Ingénieur conception & développement',
                activities: [
                    'Refonte totale de la page principale de la banque',
                    "Développement de l'interface de synthèse et gestion du compte bancaire des sociétaires",
                    "Développement d'API REST",
                    "Intégration d'une double authentification OAuth2 et OTP",
                    "Évolution des outils destinés aux collaborateurs (LDAP,CRM, Moteur d'éligibilité)",
                    "Évolutions des bases de données existantes et du système d'information",
                ],
            },
            axelor: {
                title: 'Ingénieur études & développement',
                activities: [
                    "Développeur R&D sur l'outil interne",
                    'Développements spécifiques pour divers clients (SD Services, Thissenkrupp, Orpéa, Groupe Sigma...)',
                    'Lead développeur',
                    'Rédaction de scripts SQL de migration',
                    'Contact client et environnement international',
                ],
            },
            atTheMos: {
                title: 'Ingénieur conception & développement full-stack',
                activities: [
                    'Lead développeur sur une application web from scratch',
                    "Choix de l'architecture et des solutions techniques",
                    "Développement d'un backoffice de gestion (produits, stock, évènements)",
                    'Integration paiements en ligne via Stripe',
                    "Développement d'API REST pour les paiements et les emailing",
                    "Intégration avec le SI du prestataire de gestion d'encaissement",
                    "Développement d'un portfolio web personnel",
                ],
            },
        },
        projects: {
            tooManyCooks:
                "Dashboard d'analyse des différentes stratégies d'arbitrage de funding rates entre plusieurs échanges décentralisés de cryptomonnaie.",
            ogSpot: "Trouve des spots près de toi, connecte-toi avec d'autres sportifs",
            tooManyCooksPrediction:
                "Dashboard d'analyse des différentes stratégies d'arbitrage entre plusieurs plateformes de marché de prédiction, utilisant l'IA.",
            atTheMosBar:
                "Site web de présentation d'une cave à bière. Un backoffice est également disponible pour gérer les produits, les stocks et les évènements.",
            portfolio:
                'Portfolio web personnel, présentant mes compétences, mes projets et mon parcours.',
            yams: 'Dashboard simple de gestion de points et de parties pour le jeu de Yams (Yahtzee).',
            groom: 'Application web de gestion de projet, permettant une communication simplifiée entre les développeurs et les clients.',
            firstcab:
                'Site vitrine pour une entreprise de transport de personnes',
            teedly: "PoC d'une application mobile d'assistant shopping",
            esieePlus:
                "Application mobile du BDE ESIEE Paris, pensée pour tous les étudiants de l'école",
            oldPortfolio: 'Mon premier portfolio, créé en 2017',
        },
        skills: {
            categories: {
                frontend: 'Développement frontend',
                backend: 'Backend & données',
                mobile: 'Développement mobile',
                testing: 'Tests & qualité',
                devtools: 'DevOps & outils',
                practices: 'Méthodologies et bonnes pratiques',
            },
            descriptions: {
                frontend:
                    "Interfaces utilisateur web ou mobile ergonomiques, optimisation de l'expérience utilisateur.",
                backend:
                    'Couche responsable de la gestion de données, de la logique métier et de la persistance.',
                mobile: 'Applications mobiles Android et iOS.',
                testing:
                    "Frameworks de tests unitaires, d'intégration et de mocking côté front et back.",
                devtools:
                    "Outils d'intégration continue, conteneurisation, reverse proxy et environnements de développement.",
                practices: '',
            },
            names: {
                uiux: 'Notions UI/UX',
                solid: 'Principes SOLID',
                hexagonal: 'Architecture Hexagonale',
            },
        },
        courses: {
            engineer: {
                title: 'Ingénieur informatique & applications',
                type: 'Ingénieur',
            },
            dut: {
                title: 'DUT Informatique',
                type: 'DUT',
            },
            bac: {
                title: "Baccalauréat scientifique - Sciences de l'ingénieur",
                type: 'BAC',
            },
        },
        contact: {
            headlineLead: 'Travaillons',
            headlineHighlight: 'ensemble',
            intro: "Disponible pour une mission freelance, à l'écoute d'opportunités en CDI ou de collaborations sur vos projets.",
            responseTime: 'Réponse sous 24 heures.',
            name: 'Nom',
            namePlaceholder: 'Votre nom',
            email: 'Email',
            emailPlaceholder: 'votre@email.com',
            subject: 'Sujet',
            subjectPlaceholder: 'Le sujet de votre message',
            message: 'Message',
            messagePlaceholder: 'Votre message...',
            sending: 'Envoi en cours...',
            send: 'Envoyer le message',
            helper: 'Ou écrivez-moi directement à antoine.legrand77@gmail.com.',
            errors: {
                nameRequired: 'Merci d’indiquer votre nom.',
                emailRequired: 'Merci d’indiquer votre email.',
                emailInvalid: 'Cet email ne semble pas valide.',
                subjectRequired: 'Merci de préciser un sujet.',
                messageRequired: 'Merci d’écrire un message.',
                generic:
                    'L’envoi a échoué. Vous pouvez réessayer ou m’écrire directement à antoine.legrand77@gmail.com.',
            },
            success: {
                title: 'Message envoyé.',
                body: 'Merci, je vous réponds sous 24 heures.',
                again: 'Envoyer un autre message',
                eta: 'Réponse sous 24 h',
            },
        },
        footer: {
            wordmark: 'Antoine Legrand',
            yearRange: '2023 - {year}',
            madeIn: '',
            statusLive: '',
            backToTop: 'Haut de page',
            backToTopShort: 'TOP',
        },
        meta: {
            baseTitle: 'Antoine Legrand | Ingénieur full-stack',
        },
        gitlab: {
            title: 'Pulse GitLab',
            aria: 'Activité GitLab',
            commits30d: 'commits / 30j',
            activeDays: 'jours actifs',
            linesDiff: 'lignes / 30j',
            linesDiffAria:
                'Lignes ajoutées et supprimées sur les 30 derniers jours',
            publicProjects: 'projets publics',
            calendarTitle: 'Activité 12 derniers mois',
            calendarAria:
                'Heat calendar de mes contributions sur les 12 derniers mois',
            contributions: 'contributions',
            commitSingular: 'commit',
            commitPlural: 'commits',
            less: 'moins',
            more: 'plus',
            languages: 'Langages',
            languagesAria: 'Répartition des langages utilisés',
            otherLanguages: 'autres',
            topProjects: 'Top projets',
            memberSince: 'membre depuis',
            refresh: 'Rafraîchir',
            refreshAria: 'Rafraîchir les statistiques GitLab',
        },
        gitlabProject: {
            aria: 'Statistiques GitLab du projet',
            commits: 'commits',
            lastUpdate: 'dernière màj',
            topLanguage: 'top langage',
            commitsAria: 'Activité des commits sur les 26 dernières semaines',
        },
    },
    en: {
        nav: {
            experiences: 'Experience',
            projects: 'Main Projects',
            skills: 'Skills & Technologies',
            courses: 'Education',
            contact: 'Get in touch',
        },
        sectionSubtitles: {
            experiences: 'Career and missions',
            projects: 'Selected work',
            skills: 'Technical stack and tooling',
            courses: 'Degrees and academic background',
            contact: 'Available to collaborate',
        },
        header: {
            jobTitle: 'Software Design & Development Engineer',
            description1: 'Full Stack Software Engineer',
            description2: 'Passionate about IT and new technologies',
            description3: 'Currently on assignment at Amundi',
            metaLine:
                'Web and mobile software engineer, 8 years of experience',
            tagline:
                'I build resilient web and mobile products that stay clear, useful, and easy to extend.',
            ctaContact: 'Get in touch',
            ctaLinkedin: 'LinkedIn',
            aside: {
                availability: 'Available for freelance and full-time work',
                basedInLabel: 'Based in',
                basedInValue: 'Paris, France',
                roleLabel: 'Role',
                roleValue: 'Java Engineer at Amundi',
                stackLabel: 'Stack',
                stackValue: 'Java, TypeScript, React, Node, SQL',
                languagesLabel: 'Languages',
                languagesValue: 'French / English (C1)',
                timeOfDay: {
                    late: 'Paris / Late',
                    early: 'Paris / Early',
                    morning: 'Paris / Morning',
                    midday: 'Paris / Midday',
                    afternoon: 'Paris / Afternoon',
                    evening: 'Paris / Evening',
                    night: 'Paris / Night',
                },
            },
        },
        user: {
            drivingLicence: "Driver's License",
            languages: {
                french: 'French',
                frenchLevel: 'Native speaker',
                english: 'English',
                englishLevel: 'C1 Level',
            },
        },
        experiences: {
            types: {
                cdi: 'Permanent Contract',
                apprenticeship: 'Apprenticeship',
                freelance: 'Freelance',
            },
            amundi: {
                title: 'Java Development Engineer',
                activities: [
                    'Consultant at Olympp, on assignment at Amundi, the leading European asset manager',
                    'Java Development Engineer within the portfolio management team',
                    'Maintenance and development of new features on the Alto tool for client portfolio managers',
                ],
            },
            casden: {
                title: 'Software Design & Development Engineer',
                activities: [
                    "Complete redesign of the bank's main page",
                    'Development of the account summary and management interface for members',
                    'REST API development',
                    'OAuth2 and OTP dual authentication integration',
                    'Evolution of internal tools (LDAP, CRM, Eligibility Engine)',
                    'Database and information system upgrades',
                ],
            },
            axelor: {
                title: 'R&D Engineer',
                activities: [
                    'R&D Developer on internal tooling',
                    'Custom developments for various clients (SD Services, Thissenkrupp, Orpéa, Groupe Sigma...)',
                    'Lead Developer',
                    'SQL migration script writing',
                    'Client contact and international environment',
                ],
            },
            atTheMos: {
                title: 'Full-Stack Software Engineer',
                activities: [
                    'Lead developer on a web application from scratch',
                    'Architecture and technical solution selection',
                    'Back-office development for product, stock, and event management',
                    'Online payment integration via Stripe',
                    'REST API development for payments and emailing',
                    'Integration with payment provider information system',
                    'Personal web portfolio development',
                ],
            },
        },
        projects: {
            tooManyCooks:
                'Analytics dashboard for various funding rate arbitrage strategies across multiple decentralized cryptocurrency exchanges.',
            ogSpot: 'Find spots near you and connect with other athletes.',
            tooManyCooksPrediction:
                'Analytics dashboard for various arbitrage strategies across multiple prediction market platforms, using AI.',
            atTheMosBar:
                'Presentation website for a beer cellar. A back-office is also available to manage products, stock, and events.',
            portfolio:
                'Personal web portfolio showcasing my skills, projects, and career path.',
            yams: 'Simple dashboard for managing points and games for Yams (Yahtzee).',
            groom: 'Project management web application enabling simplified communication between developers and clients.',
            firstcab: 'Showcase website for a passenger transport company',
            teedly: 'PoC of a shopping assistant mobile application',
            esieePlus:
                'Mobile application for ESIEE Paris Student Union, designed for all school students',
            oldPortfolio: 'My first portfolio, created in 2017',
        },
        skills: {
            categories: {
                frontend: 'Frontend Development',
                backend: 'Backend & Data',
                mobile: 'Mobile Development',
                testing: 'Testing & Quality',
                devtools: 'DevOps & Tooling',
                practices: 'Methodologies & Best Practices',
            },
            descriptions: {
                frontend:
                    'Ergonomic web and mobile user interfaces, user experience optimization.',
                backend:
                    'Data management, business logic, persistence and APIs.',
                mobile: 'Android and iOS mobile applications.',
                testing:
                    'Unit, integration and mocking frameworks across frontend and backend.',
                devtools:
                    'Continuous integration, containerization, reverse proxies and development environments.',
                practices: '',
            },
            names: {
                uiux: 'UI/UX Knowledge',
                solid: 'SOLID Principles',
                hexagonal: 'Hexagonal Architecture',
            },
        },
        courses: {
            engineer: {
                title: 'Computer Science & Applications Engineering',
                type: 'Engineer',
            },
            dut: {
                title: 'Computer Science Diploma',
                type: 'DUT',
            },
            bac: {
                title: 'Scientific Baccalaureate - Engineering Sciences',
                type: 'BAC',
            },
        },
        contact: {
            headlineLead: "Let's work",
            headlineHighlight: 'together',
            intro: 'Available for freelance missions, open to permanent positions or collaborations on your projects.',
            responseTime: 'Reply within 24 hours.',
            name: 'Name',
            namePlaceholder: 'Your name',
            email: 'Email',
            emailPlaceholder: 'your@email.com',
            subject: 'Subject',
            subjectPlaceholder: 'The subject of your message',
            message: 'Message',
            messagePlaceholder: 'Your message...',
            sending: 'Sending...',
            send: 'Send message',
            helper: 'Or email me directly at antoine.legrand77@gmail.com.',
            errors: {
                nameRequired: 'Please share your name.',
                emailRequired: 'Please add your email.',
                emailInvalid: 'That email does not look valid.',
                subjectRequired: 'Please add a subject.',
                messageRequired: 'Please write a message.',
                generic:
                    'Sending failed. Please retry or email me directly at antoine.legrand77@gmail.com.',
            },
            success: {
                title: 'Message sent.',
                body: 'Thanks, I’ll get back to you within 24 hours.',
                again: 'Send another message',
                eta: 'Reply within 24h',
            },
        },
        footer: {
            wordmark: 'Antoine Legrand',
            yearRange: '2023 - {year}',
            madeIn: '',
            statusLive: '',
            backToTop: 'Back to top',
            backToTopShort: 'TOP',
        },
        meta: {
            baseTitle: 'Antoine Legrand | Full-stack engineer',
        },
        gitlab: {
            title: 'GitLab pulse',
            aria: 'GitLab activity',
            commits30d: 'commits / 30d',
            activeDays: 'active days',
            linesDiff: 'lines / 30d',
            linesDiffAria: 'Lines added and removed over the last 30 days',
            publicProjects: 'public repos',
            calendarTitle: 'Last 12 months',
            calendarAria:
                'Heat calendar of my contributions over the last 12 months',
            contributions: 'contributions',
            commitSingular: 'commit',
            commitPlural: 'commits',
            less: 'less',
            more: 'more',
            languages: 'Languages',
            languagesAria: 'Breakdown of languages used',
            otherLanguages: 'other',
            topProjects: 'Top repos',
            memberSince: 'member since',
            refresh: 'Refresh',
            refreshAria: 'Refresh GitLab stats',
        },
        gitlabProject: {
            aria: 'GitLab project statistics',
            commits: 'commits',
            lastUpdate: 'last update',
            topLanguage: 'top language',
            commitsAria: 'Commit activity over the last 26 weeks',
        },
    },
}

type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

export type Translations = DeepReadonly<typeof translations.fr>
