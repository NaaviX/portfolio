import { Skill } from '../skills'

export type ProjectId =
    | 'too-many-cooks'
    | 'og-spot'
    | 'at-the-mos-bar'
    | 'spotiflem'
    | 'flatty'
    | 'wiki-pulse'
    | 'harnessable'
    | 'obsidian-dashboard'
    | 'portfolio'
    | 'yams'
    | 'groom'
    | 'teedly'
    | 'esiee-plus'
    | 'old-portfolio'

export interface Project {
    id: ProjectId
    name: string
    type: 'WEB' | 'MOBILE' | 'APP'
    descriptionKey: keyof typeof import('@/i18n/translations').translations.en.projects
    year: string
    skills: Skill[]

    images: string[]
    previewLink?: string
    gitLink?: string
    gitStatsPath?: string
    membersCount: number
}

export interface ProjectSection {
    projects: Project[]
}
