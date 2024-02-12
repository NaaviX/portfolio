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
    FirebaseIcon,
    FlutterIcon,
    GitIcon,
    JavaIcon,
    JenkinsIcon,
    JestIcon,
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
    SwaggerIcon,
    TailwindIcon,
    TsIcon,
    VueIcon,
} from '@/assets/icons'
import { SKILL_NAME, SKILL_TYPE, Skill, SkillCategory } from './skills.type'

export const javaSkill: Skill = {
    name: SKILL_NAME.JAVA,
    about: 'Lombok, Junit, Mockito',
    icon: JavaIcon,
}

export const springbootSkill: Skill = {
    name: SKILL_NAME.SPRINGBOOT,
    about: '',
    icon: SpringIcon,
}

export const UXSkill: Skill = {
    name: SKILL_NAME.UX,
    about: '',
    icon: undefined,
}

export const javascriptSkill: Skill = {
    name: SKILL_NAME.JAVASCRIPT,
    about: '',
    icon: JsIcon,
}

export const typescriptSkill: Skill = {
    name: SKILL_NAME.TYPESCRIPT,
    about: '',
    icon: TsIcon,
}

export const vueSkill: Skill = {
    name: SKILL_NAME.VUE,
    about: '',
    icon: VueIcon,
}

export const nuxtSkill: Skill = {
    name: SKILL_NAME.NUXT,
    about: '',
    icon: NuxtIcon,
}

export const reactSkill: Skill = {
    name: SKILL_NAME.REACT,
    about: '',
    icon: ReactIcon,
}

export const cssSkill: Skill = {
    name: SKILL_NAME.CSS,
    about: '',
    icon: CSSIcon,
}

export const bootstrapSkill: Skill = {
    name: SKILL_NAME.BOOTSTRAP,
    about: '',
    icon: BootstrapIcon,
}

export const bulmaSkill: Skill = {
    name: SKILL_NAME.BULMA,
    about: '',
    icon: BulmaIcon,
}

export const tailwindSkill: Skill = {
    name: SKILL_NAME.TAILWIND,
    about: '',
    icon: TailwindIcon,
}

export const muiSkill: Skill = {
    name: SKILL_NAME.MUI,
    about: '',
    icon: MuiIcon,
}

export const postgresqlSkill: Skill = {
    name: SKILL_NAME.POSTGRESQL,
    about: '',
    icon: PostgresqlIcon,
}

export const jpqlSkill: Skill = {
    name: SKILL_NAME.JPQL,
    about: '',
    icon: undefined,
}

export const firebaseSkill: Skill = {
    name: SKILL_NAME.FIREBASE,
    about: 'Authentification, Cloud firestore, Storage',
    icon: FirebaseIcon,
}

export const flutterSkill: Skill = {
    name: SKILL_NAME.FLUTTER,
    about: '',
    icon: FlutterIcon,
}

export const androidSkill: Skill = {
    name: SKILL_NAME.ANDROID,
    about: '',
    icon: AndroidIcon,
}

export const restSkill: Skill = {
    name: SKILL_NAME.REST,
    about: '',
    icon: RestIcon,
}

export const swaggerSkill: Skill = {
    name: SKILL_NAME.SWAGGER,
    about: '',
    icon: SwaggerIcon,
}

export const postmanSkill: Skill = {
    name: SKILL_NAME.POSTMAN,
    about: '',
    icon: PostmanIcon,
}

export const gitSkill: Skill = {
    name: SKILL_NAME.GIT,
    about: '',
    icon: GitIcon,
}
export const linuxSkill: Skill = {
    name: SKILL_NAME.LINUX,
    about: 'Ubuntu, Debian',
    icon: LinuxIcon,
}
export const jenkinsSkill: Skill = {
    name: SKILL_NAME.JENKINS,
    about: '',
    icon: JenkinsIcon,
}
export const sonarSkill: Skill = {
    name: SKILL_NAME.SONARQUBE,
    about: '',
    icon: SonarIcon,
}
export const nexusSkill: Skill = {
    name: SKILL_NAME.NEXUS,
    about: '',
    icon: undefined,
}

export const CICDSkill: Skill = {
    name: SKILL_NAME.CICD,
    about: '',
    icon: CICDIcon,
}

export const dockerSkill: Skill = {
    name: SKILL_NAME.DOCKER,
    about: '',
    icon: DockerIcon,
}

export const jestSkill: Skill = {
    name: SKILL_NAME.JEST,
    about: '',
    icon: JestIcon,
}

export const frontSkillCategory: SkillCategory = {
    name: SKILL_TYPE.WEBFRONT,
    description:
        "Création d'interfaces utilisateur web ou mobile ergonomiques, optimisation de l'expérience utilisateur.",
    color: 'rgb(43, 93, 108)',
    skills: [
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
    ],
    image: SkillFrontImage,
}

export const backSkillCategory: SkillCategory = {
    name: SKILL_TYPE.WEBBACK,
    description: 'blabla',
    color: '#0f172a',
    skills: [
        javaSkill,
        springbootSkill,
        postgresqlSkill,
        jpqlSkill,
        firebaseSkill,
        restSkill,
    ],
    image: SkillBackImage,
}

export const devToolsSkillCategory: SkillCategory = {
    name: SKILL_TYPE.DEVTOOLS,
    description: 'blabla',
    color: '#0f172a',
    skills: [
        swaggerSkill,
        postmanSkill,
        gitSkill,
        linuxSkill,
        jenkinsSkill,
        sonarSkill,
        nexusSkill,
    ],
    image: SkillDevToolsImage,
}

export const mobileSkillCategory: SkillCategory = {
    name: SKILL_TYPE.MOBILE,
    description: 'blabla',
    color: '#0f172a',
    skills: [flutterSkill, androidSkill],
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
