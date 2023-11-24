export enum PROJECT_SIZE {
  SMALL = 0.4,
  MEDIUM = 0.6,
  LARGE = 0.8,
  MAIN = 1,
}

export interface Project {
  name: string;
  type: "WEB" | "MOBILE" | "APP";
  description: string;
  year: string;
  stack: string[];
  scale: PROJECT_SIZE | typeof PROJECT_SIZE;
}
