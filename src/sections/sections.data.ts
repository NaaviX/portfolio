import { ContactSection } from '@/sections/ContactSection'
import { CoursesSection } from '@/sections/CoursesSection'
import { ExperiencesSection } from '@/sections/ExperiencesSection'
import { ProjectsSection } from '@/sections/ProjectsSection'
import { SkillsSection } from '@/sections/SkillsSection'

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
