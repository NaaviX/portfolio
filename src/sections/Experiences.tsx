import SectionLayout from "../components/sections/SectionLayout";
import "moment/locale/fr";
import SectionTitle from "../components/sections/components/SectionTitle";
import ExperiencesBackground from "../components/experiences/components/ExperiencesBackground";
import ExperiencesTimeline from "../components/experiences/components/ExperiencesTimeline";

const Experiences = () => {
  return (
    <>
      <ExperiencesTimeline />
      <ExperiencesBackground />
    </>
  );
};

export default Experiences;
