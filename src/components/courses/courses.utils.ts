import {coursesData} from "./courses.data";
import {Course} from "./courses.type";

export function getCourses(): Course[] {
  return coursesData.sort(
    (c1: Course, c2: Course) => c2.dateFrom.getTime() - c1.dateFrom.getTime(),
  );
}
