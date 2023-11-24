import "moment/locale/fr";
import ExperiencesTimelineItem from "./ExperiencesTimelineItem";
import { Experience } from "../experiences.type";
import { getExperiences } from "../experiences.utils";
import { Timeline, timelineOppositeContentClasses } from "@mui/lab";

const ExperiencesTimeline = () => {
  const experiences: Experience[] = getExperiences();
  return (
    <>
      <Timeline
        position="alternate"
        sx={{ width: "100%", display: { xs: "none", lg: "block" } }}
      >
        {experiences.map((exp: Experience) => (
          <ExperiencesTimelineItem experience={exp} key={exp.title} />
        ))}
      </Timeline>
      <Timeline
        sx={{
          width: "100%",
          display: { xs: "block", lg: "none" },
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.3,
          },
        }}
      >
        {experiences.map((exp: Experience) => (
          <ExperiencesTimelineItem experience={exp} key={exp.title} />
        ))}
      </Timeline>
    </>
  );
};

export default ExperiencesTimeline;
