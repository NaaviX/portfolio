import { Skill } from '@/components/skills'

export type TimelineExperience = {
    titleKey: string
    typeKey: string
    institution?: string
    city: string
    dateFrom: Date
    dateTo?: Date
    activitiesKey: string
    skills: Skill[]
}
