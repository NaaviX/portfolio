import SkillBackImage from '@/assets/images/skillData.svg?react'
import SkillDevToolsImage from '@/assets/images/skillDevTools.svg?react'
import SkillFrontImage from '@/assets/images/skillFront.svg?react'
import SkillMobileImage from '@/assets/images/skillMobile.svg?react'

import {
    AndroidIcon,
    BootstrapIcon,
    BulmaIcon,
    CICDIcon,
    CSSIcon,
    DockerIcon,
    ExpressIcon,
    FirebaseIcon,
    FlutterIcon,
    GitIcon,
    JavaIcon,
    JenkinsIcon,
    JestIcon,
    JqueryIcon,
    JsIcon,
    LinuxIcon,
    MuiIcon,
    NuxtIcon,
    PostgresqlIcon,
    PostmanIcon,
    ReactIcon,
    RestIcon,
    SonarIcon,
    SpringIcon,
    SupabaseIcon,
    SwaggerIcon,
    TailwindIcon,
    TsIcon,
    VueIcon,
} from '@/assets/icons'
import { SiChakraui } from 'react-icons/si'
import { SKILL_NAME, SKILL_TYPE, Skill, SkillCategory } from './skills.type'

export const javaSkill: Skill = {
    name: SKILL_NAME.JAVA,
    about: 'Lombok, Junit, Mockito',
    icon: JavaIcon,
}

export const springbootSkill: Skill = {
    name: SKILL_NAME.SPRINGBOOT,
    icon: SpringIcon,
}

export const UXSkill: Skill = {
    name: SKILL_NAME.UX,
    icon: undefined,
}

export const javascriptSkill: Skill = {
    name: SKILL_NAME.JAVASCRIPT,
    icon: JsIcon,
}

export const typescriptSkill: Skill = {
    name: SKILL_NAME.TYPESCRIPT,
    icon: TsIcon,
}

export const jquerySkill: Skill = {
    name: SKILL_NAME.JQUERY,
    icon: JqueryIcon,
}

export const vueSkill: Skill = {
    name: SKILL_NAME.VUE,
    icon: VueIcon,
}

export const nuxtSkill: Skill = {
    name: SKILL_NAME.NUXT,
    icon: NuxtIcon,
}

export const reactSkill: Skill = {
    name: SKILL_NAME.REACT,
    icon: ReactIcon,
}

export const cssSkill: Skill = {
    name: SKILL_NAME.CSS,
    icon: CSSIcon,
}

export const bootstrapSkill: Skill = {
    name: SKILL_NAME.BOOTSTRAP,
    icon: BootstrapIcon,
}

export const bulmaSkill: Skill = {
    name: SKILL_NAME.BULMA,
    icon: BulmaIcon,
}

export const tailwindSkill: Skill = {
    name: SKILL_NAME.TAILWIND,
    icon: TailwindIcon,
}

export const muiSkill: Skill = {
    name: SKILL_NAME.MUI,
    icon: MuiIcon,
}

export const postgresqlSkill: Skill = {
    name: SKILL_NAME.POSTGRESQL,
    icon: PostgresqlIcon,
}

export const jpqlSkill: Skill = {
    name: SKILL_NAME.JPQL,
    icon: undefined,
}

export const firebaseSkill: Skill = {
    name: SKILL_NAME.FIREBASE,
    about: 'Authentification, Cloud firestore, Storage',
    icon: FirebaseIcon,
}

export const supabaseSkill: Skill = {
    name: SKILL_NAME.SUPABASE,
    about: 'Authentification, Database, Storage',
    icon: SupabaseIcon,
}

export const flutterSkill: Skill = {
    name: SKILL_NAME.FLUTTER,
    icon: FlutterIcon,
}

export const androidSkill: Skill = {
    name: SKILL_NAME.ANDROID,
    icon: AndroidIcon,
}

export const restSkill: Skill = {
    name: SKILL_NAME.REST,
    icon: RestIcon,
}

export const swaggerSkill: Skill = {
    name: SKILL_NAME.SWAGGER,
    icon: SwaggerIcon,
}

export const postmanSkill: Skill = {
    name: SKILL_NAME.POSTMAN,
    icon: PostmanIcon,
}

export const gitSkill: Skill = {
    name: SKILL_NAME.GIT,
    icon: GitIcon,
}
export const linuxSkill: Skill = {
    name: SKILL_NAME.LINUX,
    about: 'Ubuntu, Debian',
    icon: LinuxIcon,
}
export const jenkinsSkill: Skill = {
    name: SKILL_NAME.JENKINS,
    icon: JenkinsIcon,
}
export const sonarSkill: Skill = {
    name: SKILL_NAME.SONARQUBE,
    icon: SonarIcon,
}
export const nexusSkill: Skill = {
    name: SKILL_NAME.NEXUS,
    icon: undefined,
}

export const CICDSkill: Skill = {
    name: SKILL_NAME.CICD,
    icon: CICDIcon,
}

export const dockerSkill: Skill = {
    name: SKILL_NAME.DOCKER,
    icon: DockerIcon,
}

export const jestSkill: Skill = {
    name: SKILL_NAME.JEST,
    icon: JestIcon,
}

export const chakraSkill: Skill = {
    name: SKILL_NAME.CHAKRA,
    icon: SiChakraui,
}

export const expressSkill: Skill = {
    name: SKILL_NAME.EXPRESS,
    icon: ExpressIcon,
}

export const reactNativeSkill: Skill = {
    name: SKILL_NAME.REACT_NATIVE,
    icon: ReactIcon,
}

export const frontSkillCategory: SkillCategory = {
    name: SKILL_TYPE.WEBFRONT,
    description:
        "Interfaces utilisateur web ou mobile ergonomiques, optimisation de l'expérience utilisateur.",
    color: 'rgb(43, 93, 108)',
    skills: [
        javascriptSkill,
        typescriptSkill,
        vueSkill,
        nuxtSkill,
        reactSkill,
        cssSkill,
        chakraSkill,
        tailwindSkill,
        muiSkill,
    ],
    image: SkillFrontImage,
}

export const backSkillCategory: SkillCategory = {
    name: SKILL_TYPE.WEBBACK,
    description:
        'Couche responsable de la gestion de données et de la logique métier.',
    color: '#0f172a',
    skills: [
        javaSkill,
        springbootSkill,
        sqlSkill,
        nosqlSkill,
        jpqlSkill,
        restSkill,
    ],
    image: SkillBackImage,
}

export const devToolsSkillCategory: SkillCategory = {
    name: SKILL_TYPE.DEVTOOLS,
    description: 'Divers outils utilisés lors de mes précédents projets.',
    color: '#0f172a',
    skills: [
        gitSkill,
        jenkinsSkill,
        sonarSkill,
        dockerSkill,
        firebaseSkill,
        supabaseSkill,
        copilotSkill,
        vscodeSkill,
        intellijSkill
    ],
    image: SkillDevToolsImage,
}

export const mobileSkillCategory: SkillCategory = {
    name: SKILL_TYPE.MOBILE,
    description: 'Applications mobiles Android et iOS.',
    color: '#0f172a',
    skills: [flutterSkill, androidSkill, reactNativeSkill],
    image: SkillMobileImage,
}

export const skillsData: SkillCategory[] = [
    frontSkillCategory,
    backSkillCategory,
    devToolsSkillCategory,
    mobileSkillCategory,
    /* javaSkill,
  springbootSkill,
  UXSkill,
  javascriptSkill,
  typescriptSkill,
  vueSkill,
  nuxtSkill,
  reactSkill,
  cssSkill,
  bootstrapSkill,
  bulmaSkill,
  tailwindSkill,
  muiSkill,
  postgresqlSkill,
  jpqlSkill,
  firebaseSkill,
  flutterSkill,
  androidSkill,
  restSkill,
  swaggerSkill,
  postmanSkill,
  gitSkill,
  linuxSkill,
  jenkinsSkill,
  sonarSkill,
  nexusSkill,
  solidSkill,*/
]
