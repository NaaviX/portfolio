import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import SectionLayout from "../components/sections/SectionLayout";
import React from "react";
import SectionTitle from "../components/sections/components/SectionTitle";
import { SKILL_TYPE } from "../components/skills/skills.type";
import { projectsData } from "../components/projects/projects.data";
import { Project } from "../components/projects/projects.type";

const Projects = () => {
  return (
    <Grid container spacing={2}>
      {getProjectsTemplate()}
    </Grid>
  );
};

const getProjectsTemplate = (): React.JSX.Element[] => {
  return projectsData.map((project: Project) => (
    <Grid item xs={3} key={project.name}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {project.name} {project.type} {project.year}
            </Typography>
            {project.description}
            {project.stack.map((stack: string) => (
              <div key={stack}>{stack}</div>
            ))}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Exemple
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ));
};

export default Projects;
