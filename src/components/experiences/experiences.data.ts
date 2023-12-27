import {
    bulmaSkill,
    javascriptSkill,
    jpqlSkill,
    postgresqlSkill,
    springbootSkill,
    vueSkill,
} from '../skills/skills.data'
import { Experience } from './experiences.type'

export const experiencesData: Experience[] = [
    {
        title: 'Ingénieur conception & développement junior',
        contract: 'Apprentissage',
        company: 'CASDEN',
        city: 'Champs-sur-Marne',
        dateFrom: new Date('2017-09-01'),
        dateTo: new Date('2021-09-01'),
        activities: [
            'Refonte page principale "Comptes, points et prêts"',
            'Évolutions sur les outils "Moteur d\'éligibilité" et "Infonet POM" (destiné aux Banques Populaires d\'Outre Mer)',
            "Évolutions de micro-services, de bases de données et du système d'information",
            'Méthode AGILE',
            'Stack technique : Springboot, VueJS, Bulma, Sass, PostgreSQL',
        ],
        skills: [springbootSkill, vueSkill, bulmaSkill, postgresqlSkill],
    },
    {
        title: 'Ingénieur études & développement',
        contract: 'CDI',
        company: 'Axelor',
        city: 'Champs-sur-Marne',
        dateFrom: new Date('2021-09-20'),
        dateTo: new Date('2023-08-23'),
        activities: [
            "Evolutions et corrections sur l'ERP AOS",
            "Evolutions d'applications spécifiques pour divers clients (SD Services, Thissenkrupp, Orpéa, Groupe Sigma...)",
            'Lead dev temporaire sur le projet du client Stock B',
            "Stack technique : Springboot, Javascript, Groovy, AOP (Framework d'AOS)",
            'Scripts avancés JPQL et SQL',
        ],
        skills: [springbootSkill, javascriptSkill, jpqlSkill],
    },
]
