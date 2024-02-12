import { Skill } from '../skills'

export interface Project {
    name: string
    type: 'WEB' | 'MOBILE' | 'APP'
    description: string
    year: string
    skills: Skill[]

    images: string[]
}

export interface ProjectSection {
    projects: Project[]
}
