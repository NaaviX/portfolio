import SectionLayout from "../components/sections/SectionLayout";
import SectionTitle from "../components/sections/components/SectionTitle";
import CoursesTimeline from "../components/courses/components/CoursesTimeline";
import CoursesBackground from "../components/courses/components/CoursesBackground";

const Courses = () => {
  return (
    <>
      <CoursesBackground />
      <CoursesTimeline />
    </>
  );
};

export default Courses;
