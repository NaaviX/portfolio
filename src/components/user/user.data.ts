import { reactSkill } from '../skills'
import {
    cssSkill,
    javaSkill,
    sqlSkill,
    typescriptSkill,
} from '../skills/skills.data'
import { User } from './user.type'

export const userData: User = {
    firstname: 'Antoine',
    lastname: 'Legrand',
    birthDate: new Date('1998-06-08'),
    drivingLicence: 'Permis B',
    car: true,
    jobTitle: 'Ingénieur conception & développement',
    mainDescription1:
        'Ingénieur développeur frontend & backend passionné, avec un intérêt marqué pour le Web3.',
    mainDescription2:
        'En recherche active d\'un CDI à partir de janvier',
    email: 'portfolio.antoinelegrand@gmail.com',
    address: {
        zip: '77500',
        city: 'Chelles',
    },
    linkedin: 'https://linkedin.com/in/antoine-legrand1',
    mainSkills: [typescriptSkill, reactSkill, sqlSkill, cssSkill, javaSkill],
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
