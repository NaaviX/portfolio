interface Address {
    zip: string
    city: string
}

interface Language {
    name: string
    level: string
    certifications: string[]
}

export interface User {
    firstname: string
    lastname: string
    birthDate: Date
    drivingLicence: string
    car: boolean
    jobTitle: string
    mainDescription: string
    email: string
    address: Address
    linkedin: string
    languages: Language[]
}
