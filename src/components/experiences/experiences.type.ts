import { Skill } from "../skills/skills.type";

export interface Experience {
  title: string;
  contract: string;
  company: string;
  city: string;
  dateFrom: Date;
  dateTo: Date;
  activities: string[];
  skills: Skill[];
}
