import { FC, SVGProps } from 'react'

export enum SKILL_TYPE {
    WEBFRONT = 'Développement frontend',
    WEBBACK = 'Développement backend & données',
    DEVTOOLS = 'Outils & CI/CD',
    MOBILE = 'Développement mobile',
    PRACTICES = 'Méthodologies et bonnes pratiques',
}

export enum SKILL_NAME {
    NGINX = 'Nginx',
    SQL = 'SQL',
    NOSQL = 'NoSQL',
    JAVA = 'Java',
    SPRINGBOOT = 'Spring Boot',
    UX = 'Notions UI/UX',
    JAVASCRIPT = 'Javascript',
    TYPESCRIPT = 'Typescript',
    VUE = 'Vue',
    NUXT = 'Nuxt',
    REACT = 'React',
    ANGULAR = 'Angular',
    NODE = 'Node',
    CSS = 'CSS',
    BOOTSTRAP = 'Bootstrap',
    BULMA = 'Bulma',
    TAILWIND = 'TailwindCSS',
    MUI = 'Material UI',
    POSTGRESQL = 'PostgreSQL',
    JPQL = 'JPQL',
    FIREBASE = 'Firebase',
    SUPABASE = 'Supabase',
    FLUTTER = 'Flutter',
    ANDROID = 'Android',
    REST = 'REST',
    SWAGGER = 'Swagger',
    POSTMAN = 'Postman',
    GIT = 'GIT',
    SVN = 'SVN',
    LINUX = 'Linux',
    JENKINS = 'Jenkins',
    SONARQUBE = 'SonarQUBE',
    NEXUS = 'Nexus',
    SOLID = 'Principes SOLID',
    CICD = 'CI/CD',
    DOCKER = 'Docker',
    JEST = 'Jest',
    JASMINE = 'Jasmine',
    KARMA = 'Karma',
    JQUERY = 'JQuery',
    CHAKRA = 'Chakra UI',
    EXPRESS = 'ExpressJs',
    REACT_NATIVE = 'React Native',
    ELASTICSEARCH = 'Elasticsearch',
    INTELLIJ = 'IntelliJ IDEA',
    VSCODE = 'VS Code',
    CURSOR = 'Cursor',
    AGILE = 'Agile',
    TDD = 'TDD',
    BDD = 'BDD',
    CLEAN_CODE = 'Clean Code',
    CLEAN_ARCHITECTURE = 'Clean Architecture',
    HEXAGONAL = 'Architecture Hexagonale',
    CRAFT = 'CRAFT',
    DESIGN_PATTERNS = 'Design Patterns',
    JUNIT = 'JUnit',
    MOCKITO = 'Mockito',
}

export interface Skill {
    name: string
    about?: string
    icon: FC<SVGProps<SVGSVGElement>> | undefined
    isImportant?: boolean
}

export interface SkillCategory {
    name: SKILL_TYPE | keyof SKILL_TYPE
    description: string
    color: string
    skills: Array<Skill>
    image: FC<SVGProps<SVGSVGElement>>
}
