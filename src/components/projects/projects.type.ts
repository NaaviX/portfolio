import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'
import { Skill } from 'components/skills/skills.type'
export interface Project {
    name: string
    type: 'WEB' | 'MOBILE' | 'APP'
    description: string
    year: string
    skills: Skill[]

    images: string[]
}

export interface ProjectSection {
    style: SxProps<Theme>
    projects: Project[]
}
