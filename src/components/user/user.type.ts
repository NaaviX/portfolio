import { Skill } from '../skills'

interface Address {
    zip: string
    city: string
}

export interface User {
    firstname: string
    lastname: string
    birthDate: Date
    drivingLicenceKey: string
    car: boolean
    jobTitleKey: string
    description1Key: string
    description2Key: string
    description3Key: string
    email: string
    address: Address
    linkedin: string
    mainSkills: Skill[]
    languageKeys: string[]
}
