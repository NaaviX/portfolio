import { TimelineExperience } from '../common/timeline/timeline.type'

export const coursesData: TimelineExperience[] = [
    {
        titleKey: 'engineer',
        institution: 'ESIEE Paris',
        city: 'Noisy-le-grand (93)',
        dateFrom: new Date('2018-09-01'),
        dateTo: new Date('2021-08-31'),
        activitiesKey: 'engineer',
        typeKey: 'engineer',
        skills: [],
    },
    {
        titleKey: 'dut',
        institution: 'IUT de Marne-La-Vallée',
        city: 'Champs-sur-Marne (77)',
        dateFrom: new Date('2016-09-01'),
        dateTo: new Date('2018-08-31'),
        activitiesKey: 'dut',
        typeKey: 'dut',
        skills: [],
    },
    {
        titleKey: 'bac',
        institution: 'Lycée Gaston Bachelard',
        city: 'Chelles (77)',
        dateFrom: new Date('2013-09-01'),
        dateTo: new Date('2016-08-31'),
        activitiesKey: 'bac',
        typeKey: 'bac',
        skills: [],
    },
].sort(
    (c1: TimelineExperience, c2: TimelineExperience) =>
        c2.dateFrom.getTime() - c1.dateFrom.getTime()
)
