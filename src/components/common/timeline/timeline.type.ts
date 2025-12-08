import { Skill } from '@/components/skills'

export type TimelineExperience = {
    title: string
    type: string
    institution?: string
    city: string
    dateFrom: Date
    dateTo?: Date
    activities: string[]
    skills: Skill[]
}
