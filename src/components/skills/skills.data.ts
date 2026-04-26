import SkillBackImage from '@/assets/images/skillData.svg?react'
import SkillDevToolsImage from '@/assets/images/skillDevTools.svg?react'
import SkillFrontImage from '@/assets/images/skillFront.svg?react'
import SkillMobileImage from '@/assets/images/skillMobile.svg?react'

import {
    AndroidIcon,
    AngularIcon,
    BootstrapIcon,
    BulmaIcon,
    CICDIcon,
    CSSIcon,
    CursorIcon,
    DockerIcon,
    ElasticsearchIcon,
    ExpressIcon,
    FirebaseIcon,
    FlutterIcon,
    GitIcon,
    IntellijIcon,
    JasmineIcon,
    JavaIcon,
    JenkinsIcon,
    JestIcon,
    JqueryIcon,
    JsIcon,
    KarmaIcon,
    LinuxIcon,
    NextjsIcon,
    NodeIcon,
    NuxtIcon,
    PostgresqlIcon,
    ReactIcon,
    RestIcon,
    SonarIcon,
    SpringIcon,
    SqlIcon,
    SupabaseIcon,
    TailwindIcon,
    TsIcon,
    VsCodeIcon,
    VueIcon,
} from '@/assets/icons'
import { SiChakraui, SiNginx } from 'react-icons/si'
import { SKILL_NAME, SKILL_TYPE, Skill, SkillCategory } from './skills.type'

export const javaSkill: Skill = {
    name: SKILL_NAME.JAVA,
    about: 'Lombok, Junit, Mockito',
    icon: JavaIcon,
    isImportant: true,
}

export const springbootSkill: Skill = {
    name: SKILL_NAME.SPRINGBOOT,
    icon: SpringIcon,
    isImportant: true,
}

export const sqlSkill: Skill = {
    name: SKILL_NAME.SQL,
    icon: SqlIcon,
    isImportant: true,
}

export const noSqlSkill: Skill = {
    name: SKILL_NAME.NOSQL,
    icon: SqlIcon,
    isImportant: true,
}

export const UXSkill: Skill = {
    name: SKILL_NAME.UX,
    icon: undefined,
}

export const javascriptSkill: Skill = {
    name: SKILL_NAME.JAVASCRIPT,
    icon: JsIcon,
}

export const nodeSkill: Skill = {
    name: SKILL_NAME.NODE,
    icon: NodeIcon,
    isImportant: true,
}

export const typescriptSkill: Skill = {
    name: SKILL_NAME.TYPESCRIPT,
    icon: TsIcon,
    isImportant: true,
}

export const jquerySkill: Skill = {
    name: SKILL_NAME.JQUERY,
    icon: JqueryIcon,
}

export const vueSkill: Skill = {
    name: SKILL_NAME.VUE,
    icon: VueIcon,
    isImportant: true,
}

export const nuxtSkill: Skill = {
    name: SKILL_NAME.NUXT,
    icon: NuxtIcon,
}

export const reactSkill: Skill = {
    name: SKILL_NAME.REACT,
    icon: ReactIcon,
    isImportant: true,
}

export const nextjsSkill: Skill = {
    name: SKILL_NAME.NEXTJS,
    icon: NextjsIcon,
    isImportant: true,
}

export const cssSkill: Skill = {
    name: SKILL_NAME.CSS,
    icon: CSSIcon,
    isImportant: true,
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

export const shadcnSkill: Skill = {
    name: SKILL_NAME.SHADCN_UI,
    icon: undefined,
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

export const nginxSkill: Skill = {
    name: SKILL_NAME.NGINX,
    icon: SiNginx,
}

export const expressSkill: Skill = {
    name: SKILL_NAME.EXPRESS,
    icon: ExpressIcon,
}

export const reactNativeSkill: Skill = {
    name: SKILL_NAME.REACT_NATIVE,
    icon: ReactIcon,
}

export const angularSkill: Skill = {
    name: SKILL_NAME.ANGULAR,
    icon: AngularIcon,
    isImportant: true,
}

export const jasmineSkill: Skill = {
    name: SKILL_NAME.JASMINE,
    icon: JasmineIcon,
}

export const karmaSkill: Skill = {
    name: SKILL_NAME.KARMA,
    icon: KarmaIcon,
}

export const elasticsearchSkill: Skill = {
    name: SKILL_NAME.ELASTICSEARCH,
    icon: ElasticsearchIcon,
}

export const intellijSkill: Skill = {
    name: SKILL_NAME.INTELLIJ,
    icon: IntellijIcon,
}

export const vscodeSkill: Skill = {
    name: SKILL_NAME.VSCODE,
    icon: VsCodeIcon,
}

export const cursorSkill: Skill = {
    name: SKILL_NAME.CURSOR,
    icon: CursorIcon,
}

export const agileSkill: Skill = {
    name: SKILL_NAME.AGILE,
    about: 'Scrum, Kanban',
    icon: undefined,
}

export const TDDskill: Skill = {
    name: SKILL_NAME.TDD,
    about: 'Test Driven Development',
    icon: undefined,
}

export const BDDskill: Skill = {
    name: SKILL_NAME.BDD,
    about: 'Behavior Driven Development',
    icon: undefined,
}

export const CleanCodeSkill: Skill = {
    name: SKILL_NAME.CLEAN_CODE,
    icon: undefined,
}

export const CleanArchitectureSkill: Skill = {
    name: SKILL_NAME.CLEAN_ARCHITECTURE,
    icon: undefined,
}

export const ArchitectureHexagonaleSkill: Skill = {
    name: SKILL_NAME.HEXAGONAL,
    about: 'Architecture Hexagonale',
    icon: undefined,
}

export const CRAFTSkill: Skill = {
    name: SKILL_NAME.CRAFT,
    icon: undefined,
}

export const SOLIDSkill: Skill = {
    name: SKILL_NAME.SOLID,
    icon: undefined,
}

export const DesignsPatternsSkill: Skill = {
    name: SKILL_NAME.DESIGN_PATTERNS,
    icon: undefined,
}

export const quarkusSkill: Skill = {
    name: SKILL_NAME.QUARKUS,
    icon: undefined,
}

export const traefikSkill: Skill = {
    name: SKILL_NAME.TRAEFIK,
    icon: undefined,
}

export const JUnitSkill: Skill = {
    name: SKILL_NAME.JUNIT,
    about: 'Tests unitaires Java',
    icon: undefined,
}

export const MockitoSkill: Skill = {
    name: SKILL_NAME.MOCKITO,
    about: 'Framework de mock pour Java',
    icon: undefined,
}

export const frontSkillCategory: SkillCategory = {
    nameKey: SKILL_TYPE.WEBFRONT,
    color: 'rgb(43, 93, 108)',
    skills: [
        typescriptSkill,
        javascriptSkill,
        reactSkill,
        nextjsSkill,
        vueSkill,
        angularSkill,
        cssSkill,
        tailwindSkill,
        jestSkill,
        jasmineSkill,
        karmaSkill,
    ],
    image: SkillFrontImage,
}

export const backSkillCategory: SkillCategory = {
    nameKey: SKILL_TYPE.WEBBACK,
    color: '#0f172a',
    skills: [
        javaSkill,
        springbootSkill,
        nodeSkill,
        expressSkill,
        sqlSkill,
        noSqlSkill,
        elasticsearchSkill,
        JUnitSkill,
        MockitoSkill,
    ],
    image: SkillBackImage,
}

export const devToolsSkillCategory: SkillCategory = {
    nameKey: SKILL_TYPE.DEVTOOLS,
    color: '#0f172a',
    skills: [
        gitSkill,
        jenkinsSkill,
        sonarSkill,
        dockerSkill,
        firebaseSkill,
        supabaseSkill,
        intellijSkill,
        vscodeSkill,
        cursorSkill,
    ],
    image: SkillDevToolsImage,
}

export const practicesSkillCategory: SkillCategory = {
    nameKey: SKILL_TYPE.PRACTICES,
    color: '#0f172a',
    skills: [
        agileSkill,
        TDDskill,
        BDDskill,
        CleanCodeSkill,
        CleanArchitectureSkill,
        ArchitectureHexagonaleSkill,
        CRAFTSkill,
        SOLIDSkill,
        DesignsPatternsSkill,
    ],
    image: SkillMobileImage,
}

export const mobileSkillCategory: SkillCategory = {
    nameKey: SKILL_TYPE.MOBILE,
    color: '#0f172a',
    skills: [reactNativeSkill, flutterSkill, androidSkill],
    image: SkillMobileImage,
}

export const skillsData: SkillCategory[] = [
    frontSkillCategory,
    backSkillCategory,
    devToolsSkillCategory,
    mobileSkillCategory,
    practicesSkillCategory,
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
