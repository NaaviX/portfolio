import { FC, FunctionComponent, ReactComponentElement, SVGProps } from "react";

export enum SKILL_TYPE {
  WEBBACK = "Backend",
  WEBFRONT = "Frontend",
  DATA = "Données",
  DEVTOOLS = "Outils de développement",
  MOBILE = "Mobile",
  OTHER = "Autres",
}

export enum SKILL_NAME {
  JAVA = "Java",
  SPRINGBOOT = "Spring Boot",
  UX = "Notions UI/UX",
  JAVASCRIPT = "Javascript",
  TYPESCRIPT = "Typescript",
  VUE = "Vue",
  NUXT = "Nuxt",
  REACT = "React",
  CSS = "CSS",
  BOOTSTRAP = "Bootstrap",
  BULMA = "Bulma",
  TAILWIND = "TailwindCSS",
  MUI = "Material UI",
  POSTGRESQL = "PostgreSQL",
  JPQL = "JPQL",
  FIREBASE = "Firebase",
  FLUTTER = "Flutter",
  ANDROID = "Android",
  REST = "REST",
  SWAGGER = "Swagger",
  POSTMAN = "Postman",
  GIT = "GIT",
  SVN = "SVN",
  LINUX = "Linux",
  JENKINS = "Jenkins",
  SONARQUBE = "SonarQUBE",
  NEXUS = "Nexus",
  SOLID = "Principes CRAFT & SOLID",
}

export interface Skill {
  name: string;
  type: SKILL_TYPE | keyof typeof SKILL_TYPE;
  about: string;
  icon: FC<SVGProps<SVGSVGElement>> | undefined;
}
