import {
    CICDSkill,
    bulmaSkill,
    dockerSkill,
    javascriptSkill,
    jestSkill,
    jpqlSkill,
    muiSkill,
    postgresqlSkill,
    reactSkill,
    springbootSkill,
    typescriptSkill,
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
        dateTo: new Date('2021-08-31'),
        activities: [
            'Refonte totale de la page principale de la banque',
            'Évolutions des outils internes existants',
            'Développement de micro-services',
            "Évolutions des bases de données existantes et du système d'information",
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
            "Développeur R&D sur l'outil interne",
            'Développements spécifiques pour divers clients (SD Services, Thissenkrupp, Orpéa, Groupe Sigma...)',
            'Lead développeur',
            /*"Evolutions et corrections sur l'ERP AOS",
            "Evolutions d'applications spécifiques pour divers clients (SD Services, Thissenkrupp, Orpéa, Groupe Sigma...)",
            'Lead dev temporaire sur le projet du client Stock B',
            "Stack technique : Springboot, Javascript, Groovy, AOP (Framework d'AOS)",
            'Scripts avancés JPQL et SQL',*/
        ],
        skills: [springbootSkill, javascriptSkill, jpqlSkill],
    },
    {
        title: 'Auto-entrepreneur - Développeur web',
        contract: 'Auto-entrepreneur',
        company: 'Aucune',
        city: 'Chelles',
        dateFrom: new Date('2023-10-01'),
        dateTo: new Date(),
        activities: [
            'Développement de mon portfolio web',
            'Auto formation sur diverses technologies',
            'Développement de plusieurs mini projets',
        ],
        skills: [
            reactSkill,
            typescriptSkill,
            jestSkill,
            muiSkill,
            dockerSkill,
            CICDSkill,
            springbootSkill,
        ],
    },
]
