import { Translations } from '@/i18n'
import { ComponentType, lazy, LazyExoticComponent } from 'react'

// Lazy load all sections for code splitting
const ExperiencesSection = lazy(() =>
    import('./ExperiencesSection').then((m) => ({ default: m.ExperiencesSection }))
)
const ProjectsSection = lazy(() =>
    import('./ProjectsSection').then((m) => ({ default: m.ProjectsSection }))
)
const SkillsSection = lazy(() =>
    import('./SkillsSection').then((m) => ({ default: m.SkillsSection }))
)
const CoursesSection = lazy(() =>
    import('./CoursesSection').then((m) => ({ default: m.CoursesSection }))
)
const ContactSection = lazy(() =>
    import('./ContactSection').then((m) => ({ default: m.ContactSection }))
)

export interface Section {
    nameKey: keyof Translations['nav']
    target: string
    element: LazyExoticComponent<ComponentType>
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
