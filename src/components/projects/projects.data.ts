import FirebaseIcon from '@/assets/icons/firebase-svgrepo-com.svg?react'

import {
    AtTheMosBar1,
    EsieePlus10,
    EsieePlus11,
    EsieePlus12,
    EsieePlus2,
    EsieePlus3,
    EsieePlus4,
    EsieePlus5,
    EsieePlus6,
    EsieePlus7,
    EsieePlus8,
    EsieePlus9,
    Firstcab,
    Groom1,
    OldPortfolio,
    Portfolio1,
    Teedly,
    Teedly1,
    Teedly2,
    Teedly3,
    Teedly4,
} from '@/assets/images'
import {
    bootstrapSkill,
    chakraSkill,
    CICDSkill,
    cssSkill,
    dockerSkill,
    expressSkill,
    flutterSkill,
    javaSkill,
    jquerySkill,
    nginxSkill,
    nodeSkill,
    reactNativeSkill,
    reactSkill,
    springbootSkill,
    supabaseSkill,
    typescriptSkill,
    vueSkill,
} from '../skills/skills.data'
import { Project } from './projects.type'

export const projectsData: Project[] = [
    {
        name: 'Portfolio',
        type: 'WEB',
        description:
            "Portfolio web personnel, présentant mes compétences, mes projets et mon parcours. Le but était de m'auto former à divers langages et technologies.",
        year: '2024',
        skills: [
            reactSkill,
            typescriptSkill,
            dockerSkill,
            CICDSkill,
            nginxSkill,
            chakraSkill,
        ],
        images: [Portfolio1],
        membersCount: 1,
    },
    {
        name: 'At the Mos bar',
        type: 'WEB',
        description:
            "Site web de présentation d'une cave à bière. Un backoffice est également disponible pour gérer les produits, les stocks et les évènements.",
        year: '2024',
        skills: [
            reactSkill,
            typescriptSkill,
            javaSkill,
            springbootSkill,
            nodeSkill,
            expressSkill,
            dockerSkill,
            supabaseSkill,
            chakraSkill,
        ],
        images: [AtTheMosBar1],
        previewLink: 'https://www.atthemosbar.fr/accueil',
        //gitLink: 'https://gitlab.com/NaaviX/at-the-mos-web',
        membersCount: 1,
    },
    {
        name: 'Groom',
        type: 'WEB',
        description:
            'Application web de gestion de projet, permettant une communication simplifiée entre les développeurs et les clients.',
        year: '2022',
        skills: [
            vueSkill,
            {
                name: 'Firebase auth/Cloud Firestore',
                icon: FirebaseIcon,
            },
        ],
        images: [Groom1],
        previewLink: '/groom',
        gitLink: 'https://gitlab.com/NaaviX/groom-web',
        membersCount: 2,
    },
    {
        name: 'FirstCab',
        type: 'WEB',
        description:
            'Site vitrine pour une entreprise de transport de personnes',
        year: '2024',
        skills: [reactSkill, expressSkill, chakraSkill],
        images: [Firstcab],
        previewLink: 'https://firstcab.fr/',
        membersCount: 1,
    },
    {
        name: 'Teedly',
        type: 'MOBILE',
        description: "POC d'une application mobile d'assistant shopping",
        year: '2024',
        skills: [reactNativeSkill],
        images: [Teedly, Teedly1, Teedly2, Teedly3, Teedly4],
        gitLink: 'https://gitlab.com/NaaviX/teedly',
        membersCount: 1,
    },
    {
        name: 'ESIEE +',
        type: 'MOBILE',
        description:
            "Application mobile du BDE ESIEE Paris, pensée pour tous les étudiants de l'école",
        year: '2019',
        skills: [
            flutterSkill,
            { name: 'Firebase authentification', icon: FirebaseIcon },
        ],
        images: [
            EsieePlus11,
            EsieePlus4,
            EsieePlus2,
            EsieePlus3,

            EsieePlus5,
            EsieePlus6,
            EsieePlus7,
            EsieePlus8,
            EsieePlus9,
            EsieePlus10,

            EsieePlus12,
        ],
        gitLink: 'https://gitlab.com/NaaviX/esiee-plus-portfolio',
        membersCount: 3,
    },

    // {
    //     name: 'BDE Tools',
    //     type: 'WEB',
    //     description:
    //         'Site web regroupant plusieurs outils, afin de gérer de façon simple les prévisions pour les voyages et les soirées, ainsi que les informations des étudiants',
    //     year: '2019',
    //     skills: [
    //         vueSkill,
    //         bulmaSkill,
    //         {
    //             name: 'Firebase (Authentification et Firestore)',
    //             icon: FirebaseIcon,
    //         },
    //     ],
    //     images: [''],
    //     membersCount: 1,
    // },
    // {
    //     name: 'Treasure hunt',
    //     type: 'APP',
    //     description: '',
    //     year: '2023',
    //     skills: [{ name: 'Java 21', icon: JavaIcon }],
    //     images: [''],
    //     membersCount: 1,
    // },

    {
        name: 'Ancien portfolio',
        type: 'WEB',
        description: 'Mon premier portfolio, créé en 2017',
        year: '2017',
        skills: [vueSkill, jquerySkill, bootstrapSkill, cssSkill],
        images: [OldPortfolio],
        previewLink: '/old-portfolio',
        membersCount: 1,
    },
    /*{
        name: 'Liste Sunrise',
        type: 'WEB',
        description:
            "Site web vitrine de présentation de la liste Sunrise, dont je faisais parti dans le cadre de l'élection du BDE ESIEE Paris 2019. Cette liste a par la suite gagné l'élection et s'est renommée BDE Django.",
        year: '2019',
        skills: [
            { name: 'Jquery', icon: undefined },
            { name: 'AJAX', icon: undefined },
            bootstrapSkill,
        ],
        images: [''],
    },

    {
        name: 'VO2Max',
        type: 'WEB',
        description: 'Site web vitrine pour un coach sportif',
        year: '2019',
        skills: [
            { name: 'PHP 5', icon: undefined },
            javascriptSkill,
            { name: 'Jquery', icon: undefined },
            { name: 'AJAX', icon: undefined },
            bootstrapSkill,
        ],
        images: [''],
    },
    {
        name: 'Cotisants BDE ESIEE Paris',
        type: 'WEB',
        description:
            "Simple interface connectée à l'API du BDE Django afin de gérer les cotisants de manière simple",
        year: '2019',
        skills: [vueSkill, bulmaSkill, { name: 'Jquery', icon: undefined }],
        images: [''],
    },*/
]
