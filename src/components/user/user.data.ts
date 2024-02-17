import { User } from './user.type'

export const userData: User = {
    firstname: 'Antoine',
    lastname: 'Legrand',
    birthDate: new Date('1998-06-08'),
    drivingLicence: 'Permis B',
    car: true,
    jobTitle: 'Ingénieur conception & développement full stack Java/JS',
    mainDescription: "En recherche active d'un CDI",
    email: 'portfolio.antoinelegrand@gmail.com',
    address: {
        zip: '77500',
        city: 'Chelles',
    },
    linkedin: 'https://linkedin.com/in/antoine-legrand1',
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
