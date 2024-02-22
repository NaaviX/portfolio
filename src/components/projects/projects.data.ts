import FirebaseIcon from '@/assets/icons/firebase-svgrepo-com.svg?react'

import { JavaIcon } from '@/assets/icons'
import { EsieePlus1, Groom1 } from '@/assets/images'
import {
    bootstrapSkill,
    bulmaSkill,
    cssSkill,
    flutterSkill,
    jquerySkill,
    vueSkill,
} from '../skills/skills.data'
import { Project } from './projects.type'

export const projectsData: Project[] = [
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
        previewLink: '/groom/login',
        gitLink: 'https://gitlab.com/NaaviX/groom-web',
        membersCount: 2,
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
        images: [EsieePlus1, Groom1],
        gitLink: 'https://gitlab.com/NaaviX/esiee-plus-portfolio',
        membersCount: 3,
    },
    {
        name: 'BDE Tools',
        type: 'WEB',
        description:
            'Site web regroupant plusieurs outils, afin de gérer de façon simple les prévisions pour les voyages et les soirées, ainsi que les informations des étudiants',
        year: '2019',
        skills: [
            vueSkill,
            bulmaSkill,
            {
                name: 'Firebase (Authentification et Firestore)',
                icon: FirebaseIcon,
            },
        ],
        images: [''],
        membersCount: 1,
    },
    {
        name: 'Treasure hunt',
        type: 'APP',
        description: '',
        year: '2023',
        skills: [{ name: 'Java 21', icon: JavaIcon }],
        images: [''],
        membersCount: 1,
    },
    {
        name: 'Ancien portfolio',
        type: 'WEB',
        description: 'Mon premier portfolio, créé en 2017',
        year: '2017',
        skills: [vueSkill, jquerySkill, bootstrapSkill, cssSkill],
        images: [''],
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
