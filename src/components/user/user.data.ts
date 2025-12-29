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
    drivingLicenceKey: 'drivingLicence',
    car: true,
    jobTitleKey: 'jobTitle',
    description1Key: 'description1',
    description2Key: 'description2',
    description3Key: 'description3',
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
    languageKeys: ['french', 'english'],
}
