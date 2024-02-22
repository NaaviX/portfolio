import { Skill } from '../skills'

export interface Project {
    name: string
    type: 'WEB' | 'MOBILE' | 'APP'
    description: string
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
