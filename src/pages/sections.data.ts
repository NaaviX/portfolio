import { Translations } from '@/i18n'
import { ContactSection } from './ContactSection'
import { CoursesSection } from './CoursesSection'
import { ExperiencesSection } from './ExperiencesSection'
import { ProjectsSection } from './ProjectsSection'
import { SkillsSection } from './SkillsSection'

export interface Section {
    nameKey: keyof Translations['nav']
    target: string
    element: () => React.JSX.Element
}

export const sectionsData: Section[] = [
    {
        nameKey: 'experiences',
        target: 'experiences',
        element: ExperiencesSection,
    },
    { nameKey: 'projects', target: 'projects', element: ProjectsSection },
    { nameKey: 'skills', target: 'skills', element: SkillsSection },
    { nameKey: 'courses', target: 'courses', element: CoursesSection },
    { nameKey: 'contact', target: 'contact', element: ContactSection },
]
