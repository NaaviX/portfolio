import {Box, Typography} from "@mui/material";
import Paper from "../components/base/components/Paper";
import {projectsData} from "../components/projects/projects.data";
import {Project} from "../components/projects/projects.type";

const Projects = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}>
      {projectsData.MAIN.map((project: Project) => (
        <Paper key={project.name}>
          <Typography gutterBottom variant="h2">
            {project.name} {project.type} {project.year}
          </Typography>
          {project.description}
          {project.stack.map(stack => (
            <div key={stack}>{stack}</div>
          ))}
        </Paper>
      ))}
    </Box>
    /*<Grid container spacing={2}>
      {projectsData.MAIN.map(project => (
        <Grid item xs={12} key={project.name}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h2">
                  {project.name} {project.type} {project.year}
                </Typography>
                {project.description}
                {project.stack.map(stack => (
                  <div key={stack}>{stack}</div>
                ))}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button>Exemple</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );*/
  );
};

export default Projects;
