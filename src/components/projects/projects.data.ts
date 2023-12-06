import {Project, ProjectSection} from "./projects.type";

export const projectsData = {
  MAIN: {
    title: "Projets Principaux",
    paper: {
      style: {},
    },
    projects: [
      {
        name: "ESIEE +",
        type: "MOBILE",
        description:
          "Application mobile du BDE ESIEE Paris, utile à tous les étudiants de l'école",
        year: "",
        stack: ["Flutter", "Firebase authentification"],
      },
      {
        name: "Groom",
        type: "WEB",
        description:
          "Site web de gestion de projet, permettant une communication simplifiée entre les développeurs et les clients.",
        year: "",
        stack: [
          "VueJS (Composition API)",
          "Firebase authentification, storage, hosting & Cloud Firestore",
        ],
      },
    ],
  } as ProjectSection,
  IMPORTANT: [
    {
      name: "BDE Django",
      type: "MOBILE",
      description: "",
      year: "",
      stack: ["Flutter"],
    },
    {
      name: "BDE Nova",
      type: "MOBILE",
      description: "",
      year: "",
      stack: ["Flutter"],
    },
    {
      name: "Liste Sparrow",
      type: "MOBILE",
      description: "",
      year: "",
      stack: ["Flutter"],
    },
    {
      name: "BDE Tools",
      type: "WEB",
      description:
        "Site web regroupant plusieurs outils, afin de gérer de façon simple les prévisions pour les voyages et les soirées, ainsi que les informations des étudiants",
      year: "2019",
      stack: ["VueJS", "Buefy", "Firebase (Authentification et Firestore)"],
    },
  ] as Project[],
  SIDE: [
    {
      name: "Liste Sunrise",
      type: "WEB",
      description:
        "Site web vitrine de présentation de la liste Sunrise, dont je faisais parti dans le cadre de l'election du BDE ESIEE Paris 2019. Cette liste a par la suite gagné l'élection et s'est renommée BDE Django.",
      year: "2019",
      stack: ["Jquery", "AJAX", "Bootstrap"],
    },
    {
      name: "Treasure hunt",
      type: "APP",
      description: "",
      year: "2023",
      stack: ["Java 21"],
    },
  ] as Project[],
  OTHER: [
    {
      name: "VO2Max",
      type: "WEB",
      description: "Site web vitrine pour un coach sportif",
      year: "2019",
      stack: ["PHP 5", "Javascript", "Jquery", "AJAX", "Bootstrap"],
    },
    {
      name: "Cotisants BDE ESIEE Paris",
      type: "WEB",
      description:
        "Simple interface connectée à l'API du BDE Django afin de gérer les cotisants de manière simple",
      year: "2019",
      stack: ["VueJS", "Buefy", "Jquery"],
    },
  ] as Project[],
};
