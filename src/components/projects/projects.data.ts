import { ReactComponent as BootstrapIcon } from '../../assets/icons/bootstrap-svgrepo-com.svg'
import { ReactComponent as BulmaIcon } from '../../assets/icons/bulma-svgrepo-com.svg'
import { ReactComponent as FirebaseIcon } from '../../assets/icons/firebase-svgrepo-com.svg'
import { ReactComponent as FlutterIcon } from '../../assets/icons/flutter-svgrepo-com.svg'
import { ReactComponent as JavaIcon } from '../../assets/icons/java-svgrepo-com.svg'
import { ReactComponent as JavascriptIcon } from '../../assets/icons/javascript-svgrepo-com.svg'
import { ReactComponent as VueIcon } from '../../assets/icons/vue-svgrepo-com.svg'
import esieeplus1 from '../../assets/images/projects/esieeplus/esieeplus1.jpg'
import groom1 from '../../assets/images/projects/groom/groom1.png'

import { Project } from './projects.type'

export const projectsStyle = {
    MainProjects: {
        width: { sm: '100%', md: '48%' },
        margin: '1%',
    },
    OtherProject: {
        width: '31%',
        margin: '1%',
    },
}

export const projectsData = {
    projects: [
        {
            name: 'Groom',
            type: 'WEB',
            description:
                'Application web de gestion de projet, permettant une communication simplifiée entre les développeurs et les clients.',
            year: '2022',
            stack: [
                { name: 'VueJS', icon: VueIcon },
                {
                    name: 'Firebase authentification/Cloud Firestore',
                    icon: FirebaseIcon,
                },
            ],
            images: [groom1],
        },
        {
            name: 'ESIEE +',
            type: 'MOBILE',
            description:
                "Application mobile du BDE ESIEE Paris, pensée pour tous les étudiants de l'école",
            year: '2019',
            stack: [
                { name: 'Flutter', icon: FlutterIcon },
                { name: 'Firebase authentification', icon: FirebaseIcon },
            ],
            images: [esieeplus1],
        },
        {
            name: 'BDE Django',
            type: 'MOBILE',
            description: '',
            year: '2020',
            stack: [{ name: 'Flutter', icon: FlutterIcon }],
            images: [''],
        },
        {
            name: 'BDE Nova',
            type: 'MOBILE',
            description: '',
            year: '2021',
            stack: [{ name: 'Flutter', icon: FlutterIcon }],
            images: [''],
        },
        {
            name: 'Liste Sparrow',
            type: 'MOBILE',
            description: '',
            year: '2022',
            stack: [{ name: 'Flutter', icon: FlutterIcon }],
            images: [''],
        },
        {
            name: 'BDE Tools',
            type: 'WEB',
            description:
                'Site web regroupant plusieurs outils, afin de gérer de façon simple les prévisions pour les voyages et les soirées, ainsi que les informations des étudiants',
            year: '2019',
            stack: [
                { name: 'VueJS', icon: VueIcon },
                { name: 'Bulma', icon: BulmaIcon },
                {
                    name: 'Firebase (Authentification et Firestore)',
                    icon: FirebaseIcon,
                },
            ],
            images: [''],
        },
        {
            name: 'Liste Sunrise',
            type: 'WEB',
            description:
                "Site web vitrine de présentation de la liste Sunrise, dont je faisais parti dans le cadre de l'élection du BDE ESIEE Paris 2019. Cette liste a par la suite gagné l'élection et s'est renommée BDE Django.",
            year: '2019',
            stack: [
                { name: 'Jquery', icon: undefined },
                { name: 'AJAX', icon: undefined },
                { name: 'Bootstrap', icon: BootstrapIcon },
            ],
            images: [''],
        },
        {
            name: 'Treasure hunt',
            type: 'APP',
            description: '',
            year: '2023',
            stack: [{ name: 'Java 21', icon: JavaIcon }],
            images: [''],
        },
        {
            name: 'VO2Max',
            type: 'WEB',
            description: 'Site web vitrine pour un coach sportif',
            year: '2019',
            stack: [
                { name: 'PHP 5', icon: undefined },
                { name: 'Javascript', icon: JavascriptIcon },
                { name: 'Jquery', icon: undefined },
                { name: 'AJAX', icon: undefined },
                { name: 'Bootstrap', icon: BootstrapIcon },
            ],
            images: [''],
        },
        {
            name: 'Cotisants BDE ESIEE Paris',
            type: 'WEB',
            description:
                "Simple interface connectée à l'API du BDE Django afin de gérer les cotisants de manière simple",
            year: '2019',
            stack: [
                { name: 'VueJS', icon: VueIcon },
                { name: 'Bulma', icon: BulmaIcon },
                { name: 'Jquery', icon: undefined },
            ],
            images: [''],
        },
    ] as Project[],
}
