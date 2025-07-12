import { reactSkill } from '../skills'
import {
    cssSkill,
    javaSkill,
    nodeSkill,
    sqlSkill,
    typescriptSkill,
    vueSkill,
} from '../skills/skills.data'
import { User } from './user.type'

export const userData: User = {
    firstname: 'Antoine',
    lastname: 'Legrand',
    birthDate: new Date('1998-06-08'),
    drivingLicence: 'Permis B',
    car: true,
    jobTitle: 'Ingénieur conception & développement',
    mainDescription1: 'Ingénieur conception & développement Java/Js',
    mainDescription2: "Passionné d'informatique et de nouvelles technologies",
    mainDescription3: "Actuellement en mission chez Amundi",
    email: 'antoine.legrand77@gmail.com',
    address: {
        zip: '77500',
        city: 'Chelles',
    },
    linkedin: 'https://linkedin.com/in/antoine-legrand1',
    mainSkills: [
        javaSkill,
        typescriptSkill,
        reactSkill,
        nodeSkill,
        sqlSkill,
        cssSkill,
        vueSkill,
    ],
    languages: [
        {
            name: 'Français',
            level: 'Langue maternelle',
            certifications: [],
        },
        {
            name: 'Anglais',
            level: 'Niveau C1',
            certifications: ['TOEIC: 930/990'],
        },
    ],
}
