import {Box} from "@mui/material";
import OtherProjects from "../components/projects/components/OtherProjects";
import ProjectCard from "../components/projects/components/ProjectCard";
import {
  projectsData,
  projectsStyle,
} from "../components/projects/projects.data";
import {Project} from "../components/projects/projects.type";

const Projects = () => {
  const projects = projectsData.projects;
  const mainProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
        {mainProjects.map((project: Project) => (
          <ProjectCard
            key={project.name}
            project={project}
            sx={projectsStyle.MainProjects}
          />
        ))}
      </Box>

      <br />
      <OtherProjects projects={otherProjects} />
    </Box>
  );
};

export default Projects;
