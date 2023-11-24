import {
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
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
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { Experience } from "../experiences.type";
import {
  formatDateMonthYear,
  formatDurationMonthYear,
} from "../../../utils/Utils";
import Paper from "../../base/components/Paper";
import SectionSubtitle from "../../sections/components/SectionSubtitle";
import { Skill } from "../../skills/skills.type";
import { ReactElement } from "react";

interface ExperiencesTimelineItemProps {
  experience: Experience;
}

const ExperiencesTimelineItem = (props: ExperiencesTimelineItemProps) => {
  const exp: Experience = props.experience;
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ py: "20px" }}
        variant="h4"
        color="text.secondary"
      >
        {formatDateMonthYear(exp.dateFrom)} - {formatDateMonthYear(exp.dateTo)}
        <br />
        {formatDurationMonthYear(exp.dateFrom, exp.dateTo)}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ flexGrow: "0.05" }} />
        <TimelineDot variant="outlined">
          <ComputerIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent
        sx={{
          pt: "30px",
          pb: "80px",
          px: 2,
        }}
      >
        <Paper>
          <SectionSubtitle>{exp.title}</SectionSubtitle>
          <Box
            sx={{
              display: "flex",
              marginBottom: "10px",
              gap: "10px",
            }}
          >
            <Box sx={{ display: "flex", gap: "3px" }}>
              <ApartmentIcon fontSize="small" />{" "}
              <Typography>{exp.company}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "3px" }}>
              <PlaceIcon fontSize="small" /> <Typography>{exp.city}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "3px" }}>
              <BusinessCenterIcon fontSize="small" />{" "}
              <Typography>{exp.contract}</Typography>
            </Box>
          </Box>
          <List sx={{ listStyle: "disc", pl: 2 }}>
            {exp.activities.map((activity: string) => (
              <ListItem
                disablePadding
                disableGutters
                key={activity}
                sx={{ display: "list-item" }}
              >
                <ListItemText
                  sx={{ margin: "0", textAlign: "justify" }}
                  primary={activity}
                />
              </ListItem>
            ))}
          </List>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "2px",
              mt: "20px",
            }}
          >
            {exp.skills.map((skill: Skill) => (
              <Chip
                label={skill.name}
                icon={
                  skill.icon ? (
                    <skill.icon style={{ width: "1rem" }} />
                  ) : (
                    <ApartmentIcon />
                  )
                }
                key={skill.name}
                sx={{ pl: "4px" }}
              ></Chip>
            ))}
          </Box>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default ExperiencesTimelineItem;
