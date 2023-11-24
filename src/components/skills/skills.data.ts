import { SKILL_TYPE, SKILL_NAME, Skill } from "./skills.type";
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

export const javaSkill: Skill = {
  name: SKILL_NAME.JAVA,
  type: SKILL_TYPE.WEBBACK,
  about: "Lombok, Junit, Mockito",
  icon: JavaIcon,
};

export const springbootSkill: Skill = {
  name: SKILL_NAME.SPRINGBOOT,
  type: SKILL_TYPE.WEBBACK,
  about: "",
  icon: SpringBootIcon,
};

export const UXSkill: Skill = {
  name: SKILL_NAME.UX,
  type: SKILL_TYPE.WEBFRONT,
  about: "",
  icon: undefined,
};

export const javascriptSkill: Skill = {
  name: SKILL_NAME.JAVASCRIPT,
  type: SKILL_TYPE.WEBFRONT,
  about: "",
  icon: JavascriptIcon,
};

export const typescriptSkill: Skill = {
  name: SKILL_NAME.TYPESCRIPT,
  type: SKILL_TYPE.WEBFRONT,
  about: "",
  icon: TypescriptIcon,
};

export const vueSkill: Skill = {
  name: SKILL_NAME.VUE,
  type: SKILL_TYPE.WEBFRONT,
  about: "",
  icon: VueIcon,
};

export const nuxtSkill: Skill = {
  name: SKILL_NAME.NUXT,
  type: SKILL_TYPE.WEBFRONT,
  about: "",
  icon: NuxtIcon,
};

export const reactSkill: Skill = {
  name: SKILL_NAME.REACT,
  type: SKILL_TYPE.WEBFRONT,
  about: "",
  icon: ReactIcon,
};

export const cssSkill: Skill = {
  name: SKILL_NAME.CSS,
  type: SKILL_TYPE.WEBFRONT,
  about: "",
  icon: CssIcon,
};

export const bootstrapSkill: Skill = {
  name: SKILL_NAME.BOOTSTRAP,
  type: SKILL_TYPE.WEBFRONT,
  about: "",
  icon: BootstrapIcon,
};

export const bulmaSkill: Skill = {
  name: SKILL_NAME.BULMA,
  type: SKILL_TYPE.WEBFRONT,
  about: "",
  icon: BulmaIcon,
};

export const tailwindSkill: Skill = {
  name: SKILL_NAME.TAILWIND,
  type: SKILL_TYPE.WEBFRONT,
  about: "",
  icon: TailwindIcon,
};

export const muiSkill: Skill = {
  name: SKILL_NAME.MUI,
  type: SKILL_TYPE.WEBFRONT,
  about: "",
  icon: MuiIcon,
};

export const postgresqlSkill: Skill = {
  name: SKILL_NAME.POSTGRESQL,
  type: SKILL_TYPE.DATA,
  about: "",
  icon: PostgreSQLIcon,
};

export const jpqlSkill: Skill = {
  name: SKILL_NAME.JPQL,
  type: SKILL_TYPE.DATA,
  about: "",
  icon: undefined,
};

export const firebaseSkill: Skill = {
  name: SKILL_NAME.FIREBASE,
  type: SKILL_TYPE.DATA,
  about: "Authentification, Cloud firestore, Storage",
  icon: FirebaseIcon,
};

export const flutterSkill: Skill = {
  name: SKILL_NAME.FLUTTER,
  type: SKILL_TYPE.MOBILE,
  about: "",
  icon: FlutterIcon,
};

export const androidSkill: Skill = {
  name: SKILL_NAME.ANDROID,
  type: SKILL_TYPE.MOBILE,
  about: "",
  icon: AndroidIcon,
};

export const restSkill: Skill = {
  name: SKILL_NAME.REST,
  type: SKILL_TYPE.DATA,
  about: "",
  icon: undefined,
};

export const swaggerSkill: Skill = {
  name: SKILL_NAME.SWAGGER,
  type: SKILL_TYPE.DATA,
  about: "",
  icon: SwaggerIcon,
};

export const postmanSkill: Skill = {
  name: SKILL_NAME.POSTMAN,
  type: SKILL_TYPE.DATA,
  about: "",
  icon: PostmanIcon,
};

export const gitSkill: Skill = {
  name: SKILL_NAME.GIT,
  type: SKILL_TYPE.DEVTOOLS,
  about: "",
  icon: GitIcon,
};
export const linuxSkill: Skill = {
  name: SKILL_NAME.LINUX,
  type: SKILL_TYPE.DEVTOOLS,
  about: "Ubuntu, Debian",
  icon: undefined,
};
export const jenkinsSkill: Skill = {
  name: SKILL_NAME.JENKINS,
  type: SKILL_TYPE.DEVTOOLS,
  about: "",
  icon: undefined,
};
export const sonarSkill: Skill = {
  name: SKILL_NAME.SONARQUBE,
  type: SKILL_TYPE.DEVTOOLS,
  about: "",
  icon: undefined,
};
export const nexusSkill: Skill = {
  name: SKILL_NAME.NEXUS,
  type: SKILL_TYPE.DEVTOOLS,
  about: "",
  icon: undefined,
};
export const solidSkill: Skill = {
  name: SKILL_NAME.SOLID,
  type: SKILL_TYPE.OTHER,
  about: "",
  icon: undefined,
};

export const skillsData: Skill[] = [
  javaSkill,
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
  solidSkill,
];
