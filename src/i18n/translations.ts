export type Language = 'fr' | 'en'

export const translations = {
    fr: {
        nav: {
            experiences: 'Expériences',
            projects: 'Projets principaux',
            skills: 'Compétences & technos',
            courses: 'Formations & Diplômes',
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
                'Ingénieur développeur web & mobile · 8 ans d’expérience · Paris',
            tagline:
                'Passionné par l’informatique et le développement depuis bientôt 15 ans. Je recherche des opportunités de missions freelance et reste à l’écoute du marché pour un CDI.',
            ctaContact: 'Me contacter',
            ctaLinkedin: 'LinkedIn',
            aside: {
                availability: 'Disponible · Freelance & CDI',
                basedInLabel: 'Basé à',
                basedInValue: 'Paris, France',
                roleLabel: 'Poste',
                roleValue: 'Ingénieur Java chez Amundi',
                stackLabel: 'Stack',
                stackValue: 'Java, TypeScript, React, Node, SQL',
                languagesLabel: 'Langues',
                languagesValue: 'Français · Anglais (C1)',
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
                backend: 'Développement backend & données',
                devtools: 'Outils & CI/CD',
                mobile: 'Développement mobile',
                practices: 'Méthodologies et bonnes pratiques',
            },
            descriptions: {
                frontend:
                    "Interfaces utilisateur web ou mobile ergonomiques, optimisation de l'expérience utilisateur.",
                backend:
                    'Couche responsable de la gestion de données et de la logique métier.',
                devtools:
                    "Divers outils de développement et d'intégration continue utilisés lors de mes précédents projets.",
                mobile: 'Applications mobiles Android et iOS.',
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
        },
    },
    en: {
        nav: {
            experiences: 'Experience',
            projects: 'Main Projects',
            skills: 'Skills & Technologies',
            courses: 'Education',
            contact: 'Contact Me',
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
                'Web & Mobile Software Engineer · 8 years of experience · Paris',
            tagline:
                'Passionate about IT and development for nearly 15 years. Looking for freelance opportunities and open to permanent (CDI) positions.',
            ctaContact: 'Get in touch',
            ctaLinkedin: 'LinkedIn',
            aside: {
                availability: 'Available · Freelance & Full-time',
                basedInLabel: 'Based in',
                basedInValue: 'Paris, France',
                roleLabel: 'Role',
                roleValue: 'Java Engineer at Amundi',
                stackLabel: 'Stack',
                stackValue: 'Java, TypeScript, React, Node, SQL',
                languagesLabel: 'Languages',
                languagesValue: 'French · English (C1)',
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
                backend: 'Backend Development & Data',
                devtools: 'Tools & CI/CD',
                mobile: 'Mobile Development',
                practices: 'Methodologies & Best Practices',
            },
            descriptions: {
                frontend:
                    'Ergonomic web and mobile user interfaces, user experience optimization.',
                backend:
                    'Layer responsible for data management and business logic.',
                devtools:
                    'Various development and continuous integration tools used in my previous projects.',
                mobile: 'Android and iOS mobile applications.',
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
        },
    },
}

type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

export type Translations = DeepReadonly<typeof translations.fr>
