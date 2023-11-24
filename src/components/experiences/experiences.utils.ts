import { Experience } from "./experiences.type";
import { experiencesData } from "./experiences.data";

export function getExperiences(): Experience[] {
  return experiencesData.sort(
    (e1: Experience, e2: Experience) =>
      e2.dateFrom.getTime() - e1.dateFrom.getTime()
  );
}
