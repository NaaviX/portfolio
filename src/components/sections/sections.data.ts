import Contact from "../../sections/Contact";
import Courses from "../../sections/Courses";
import Experiences from "../../sections/Experiences";
import Projects from "../../sections/Projects";
import Skills from "../../sections/Skills";

export interface Section {
  name: string;
  target: string;
  element: () => React.JSX.Element;
}

export const sectionsData: Section[] = [
  {name: "Compétences & technos", target: "skills", element: Skills},
  {name: "Expériences", target: "experiences", element: Experiences},
  {name: "Formations & Diplômes", target: "courses", element: Courses},
  {name: "Projets principaux", target: "projects", element: Projects},
  {name: "Me contacter", target: "contact", element: Contact},
];
