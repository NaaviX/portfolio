import { Skill } from '../skills'

export interface Project {
    name: string
    type: 'WEB' | 'MOBILE' | 'APP'
    descriptionKey: keyof typeof import('@/i18n/translations').translations.en.projects
    year: string
    skills: Skill[]

    images: string[]
    previewLink?: string
    gitLink?: string
    membersCount: number
}

export interface ProjectSection {
    projects: Project[]
}
