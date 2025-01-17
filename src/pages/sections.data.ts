import { ContactSection } from './ContactSection'
import { CoursesSection } from './CoursesSection'
import { ExperiencesSection } from './ExperiencesSection'
import { ProjectsSection } from './ProjectsSection'
import { SkillsSection } from './SkillsSection'

export interface Section {
    name: string
    target: string
    element: () => React.JSX.Element
}

export const sectionsData: Section[] = [
    { name: 'Expériences', target: 'experiences', element: ExperiencesSection },
    {
        name: 'Projets principaux',
        target: 'projects',
        element: ProjectsSection,
    },
    { name: 'Compétences & technos', target: 'skills', element: SkillsSection },

    {
        name: 'Formations & Diplômes',
        target: 'courses',
        element: CoursesSection,
    },

    { name: 'Me contacter', target: 'contact', element: ContactSection },
]
