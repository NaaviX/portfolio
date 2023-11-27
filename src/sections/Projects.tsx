import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
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
            <Typography gutterBottom variant="h2">
              {project.name} {project.type} {project.year}
            </Typography>
            {project.description}
            {project.stack.map((stack: string) => (
              <div key={stack}>{stack}</div>
            ))}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button>Exemple</Button>
        </CardActions>
      </Card>
    </Grid>
  ));
};

export default Projects;
