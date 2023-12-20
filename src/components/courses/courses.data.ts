import { Course } from './courses.type'

export const coursesData: Course[] = [
    {
        name: 'Ingénieur informatique & applications',
        school: 'ESIEE Paris',
        city: 'Noisy-le-grand (93)',
        dateFrom: new Date('2018-09-01'),
        dateTo: new Date('2021-08-31'),
        description: 'Grand admis sur dossier',
        diploma: 'Ingénieur',
    },
    {
        name: 'DUT Informatique',
        school: 'IUT de Marne-La-Vallée',
        city: 'Champs-sur-Marne (77)',
        dateFrom: new Date('2016-09-01'),
        dateTo: new Date('2018-08-31'),
        description: '',
        diploma: 'DUT',
    },
    {
        name: "Baccalauréat scientifique - Sciences de l'ingénieur",
        school: 'Lycée Gaston Bachelard',
        city: 'Chelles (77)',
        dateFrom: new Date('2013-09-01'),
        dateTo: new Date('2016-08-31'),
        description: '',
        diploma: 'BAC',
    },
]
