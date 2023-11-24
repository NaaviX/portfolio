import { Box, Typography } from "@mui/material";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import "moment/locale/fr";
import PlaceIcon from "@mui/icons-material/Place";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Paper from "../../base/components/Paper";
import SectionSubtitle from "../../sections/components/SectionSubtitle";
import { Course } from "../courses.type";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

interface CoursesTimelineItemProps {
  course: Course;
}

const CoursesTimelineItem = (props: CoursesTimelineItemProps) => {
  const course: Course = props.course;
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ pt: "28px" }}
        variant="h4"
        color="text.secondary"
      >
        {course.dateFrom.getFullYear()} - {course.dateTo.getFullYear()}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ flexGrow: "0.05" }} />
        <TimelineDot variant="outlined">
          <SchoolOutlinedIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent
        sx={{
          py: "22px",
          px: 2,
        }}
        variant="body2"
      >
        <SectionSubtitle>{course.name}</SectionSubtitle>
        <Box
          sx={{
            mt: "20px",
            display: "inline-flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Box sx={{ display: "flex", gap: "3px" }}>
            <ApartmentIcon sx={{ fontSize: "1.2rem" }} />{" "}
            <span>{course.school}</span>
          </Box>
          <Box sx={{ display: "flex", gap: "3px" }}>
            <PlaceIcon sx={{ fontSize: "1.2rem" }} /> <span>{course.city}</span>
          </Box>
          <Box sx={{ display: "flex", gap: "3px" }}>
            <HistoryEduIcon sx={{ fontSize: "1.2rem" }} />{" "}
            <span>{course.diploma}</span>
          </Box>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
};

export default CoursesTimelineItem;
