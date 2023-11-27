import { SKILL_TYPE, SKILL_NAME, Skill, SkillCategory } from "./skills.type";
import { ReactComponent as VueIcon } from "../../assets/icons/vue-svgrepo-com.svg";
import { ReactComponent as NuxtIcon } from "../../assets/icons/nuxt-icon-svgrepo-com.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/react-svgrepo-com.svg";
import { ReactComponent as SpringBootIcon } from "../../assets/icons/spring-icon-svgrepo-com.svg";

import { ReactComponent as BulmaIcon } from "../../assets/icons/bulma-svgrepo-com.svg";
import { ReactComponent as PostgreSQLIcon } from "../../assets/icons/postgresql-svgrepo-com.svg";
import { ReactComponent as JavascriptIcon } from "../../assets/icons/javascript-svgrepo-com.svg";
import { ReactComponent as TypescriptIcon } from "../../assets/icons/typescript-icon-svgrepo-com.svg";
import { ReactComponent as JavaIcon } from "../../assets/icons/java-svgrepo-com.svg";
import { ReactComponent as CssIcon } from "../../assets/icons/css-3-svgrepo-com.svg";
import { ReactComponent as BootstrapIcon } from "../../assets/icons/bootstrap-svgrepo-com.svg";
import { ReactComponent as TailwindIcon } from "../../assets/icons/tailwindcss-icon-svgrepo-com.svg";
import { ReactComponent as MuiIcon } from "../../assets/icons/material-ui-svgrepo-com.svg";
import { ReactComponent as FirebaseIcon } from "../../assets/icons/firebase-svgrepo-com.svg";
import { ReactComponent as FlutterIcon } from "../../assets/icons/flutter-svgrepo-com.svg";
import { ReactComponent as AndroidIcon } from "../../assets/icons/android-icon-svgrepo-com.svg";
import { ReactComponent as SwaggerIcon } from "../../assets/icons/swagger-svgrepo-com.svg";
import { ReactComponent as PostmanIcon } from "../../assets/icons/postman-icon-svgrepo-com.svg";
import { ReactComponent as GitIcon } from "../../assets/icons/git-icon-svgrepo-com.svg";

import { ReactComponent as SkillFrontImage } from "../../assets/images/skillFront.svg";
import { ReactComponent as SkillBackImage } from "../../assets/images/skillback.svg";
import { ReactComponent as SkillDataImage } from "../../assets/images/skillData.svg";
import { ReactComponent as SkillDevToolsImage } from "../../assets/images/skillDevTools.svg";
import { ReactComponent as SkillMobileImage } from "../../assets/images/skillFront.svg";

export const javaSkill: Skill = {
  name: SKILL_NAME.JAVA,
  about: "Lombok, Junit, Mockito",
  icon: JavaIcon,
};

export const springbootSkill: Skill = {
  name: SKILL_NAME.SPRINGBOOT,
  about: "",
  icon: SpringBootIcon,
};

export const UXSkill: Skill = {
  name: SKILL_NAME.UX,
  about: "",
  icon: undefined,
};

export const javascriptSkill: Skill = {
  name: SKILL_NAME.JAVASCRIPT,
  about: "",
  icon: JavascriptIcon,
};

export const typescriptSkill: Skill = {
  name: SKILL_NAME.TYPESCRIPT,
  about: "",
  icon: TypescriptIcon,
};

export const vueSkill: Skill = {
  name: SKILL_NAME.VUE,
  about: "",
  icon: VueIcon,
};

export const nuxtSkill: Skill = {
  name: SKILL_NAME.NUXT,
  about: "",
  icon: NuxtIcon,
};

export const reactSkill: Skill = {
  name: SKILL_NAME.REACT,
  about: "",
  icon: ReactIcon,
};

export const cssSkill: Skill = {
  name: SKILL_NAME.CSS,
  about: "",
  icon: CssIcon,
};

export const bootstrapSkill: Skill = {
  name: SKILL_NAME.BOOTSTRAP,
  about: "",
  icon: BootstrapIcon,
};

export const bulmaSkill: Skill = {
  name: SKILL_NAME.BULMA,
  about: "",
  icon: BulmaIcon,
};

export const tailwindSkill: Skill = {
  name: SKILL_NAME.TAILWIND,
  about: "",
  icon: TailwindIcon,
};

export const muiSkill: Skill = {
  name: SKILL_NAME.MUI,
  about: "",
  icon: MuiIcon,
};

export const postgresqlSkill: Skill = {
  name: SKILL_NAME.POSTGRESQL,
  about: "",
  icon: PostgreSQLIcon,
};

export const jpqlSkill: Skill = {
  name: SKILL_NAME.JPQL,
  about: "",
  icon: undefined,
};

export const firebaseSkill: Skill = {
  name: SKILL_NAME.FIREBASE,
  about: "Authentification, Cloud firestore, Storage",
  icon: FirebaseIcon,
};

export const flutterSkill: Skill = {
  name: SKILL_NAME.FLUTTER,
  about: "",
  icon: FlutterIcon,
};

export const androidSkill: Skill = {
  name: SKILL_NAME.ANDROID,
  about: "",
  icon: AndroidIcon,
};

export const restSkill: Skill = {
  name: SKILL_NAME.REST,
  about: "",
  icon: undefined,
};

export const swaggerSkill: Skill = {
  name: SKILL_NAME.SWAGGER,
  about: "",
  icon: SwaggerIcon,
};

export const postmanSkill: Skill = {
  name: SKILL_NAME.POSTMAN,
  about: "",
  icon: PostmanIcon,
};

export const gitSkill: Skill = {
  name: SKILL_NAME.GIT,
  about: "",
  icon: GitIcon,
};
export const linuxSkill: Skill = {
  name: SKILL_NAME.LINUX,
  about: "Ubuntu, Debian",
  icon: undefined,
};
export const jenkinsSkill: Skill = {
  name: SKILL_NAME.JENKINS,
  about: "",
  icon: undefined,
};
export const sonarSkill: Skill = {
  name: SKILL_NAME.SONARQUBE,
  about: "",
  icon: undefined,
};
export const nexusSkill: Skill = {
  name: SKILL_NAME.NEXUS,
  about: "",
  icon: undefined,
};

export const frontSkillCategory: SkillCategory = {
  name: SKILL_TYPE.WEBFRONT,
  description: "blabla",
  color: "rgb(43, 93, 108)",
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
};

export const backSkillCategory: SkillCategory = {
  name: SKILL_TYPE.WEBBACK,
  description: "blabla",
  color: "#0f172a",
  skills: [javaSkill, springbootSkill],
  image: SkillBackImage,
};

export const dataSkillCategory: SkillCategory = {
  name: SKILL_TYPE.DATA,
  description: "blabla",
  color: "#0f172a",
  skills: [postgresqlSkill, jpqlSkill, firebaseSkill, restSkill],
  image: SkillDataImage,
};

export const devToolsSkillCategory: SkillCategory = {
  name: SKILL_TYPE.DEVTOOLS,
  description: "blabla",
  color: "#0f172a",
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
};

export const mobileSkillCategory: SkillCategory = {
  name: SKILL_TYPE.MOBILE,
  description: "blabla",
  color: "#0f172a",
  skills: [flutterSkill, androidSkill],
  image: SkillMobileImage,
};

export const skillsData: SkillCategory[] = [
  frontSkillCategory,
  backSkillCategory,
  dataSkillCategory,
  devToolsSkillCategory,
  mobileSkillCategory,
  /*javaSkill,
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
];
