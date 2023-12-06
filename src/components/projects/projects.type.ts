export interface ProjectPaper {
  style: React.CSSProperties | undefined;
}
export interface Project {
  name: string;
  type: "WEB" | "MOBILE" | "APP";
  description: string;
  year: string;
  stack: string[];
  paper: ProjectPaper;
}

export interface ProjectSection {
  title: string;
  projects: Project[];
  paper: ProjectPaper;
}
