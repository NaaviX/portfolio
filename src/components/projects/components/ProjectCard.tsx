import {Theme} from "@emotion/react";
import CodeIcon from "@mui/icons-material/Code";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import {Box, Button, SxProps, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Chip from "../../base/components/Chip";
import Paper from "../../base/components/Paper";
import {Project} from "../projects.type";

const ProjectCard = ({
  project,
  sx,
}: {
  project: Project;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Paper key={project.name} sx={sx}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}>
        <img
          src={project.images[0]}
          alt={project.name}
          style={{
            width: "100%",
            height: "350px",
            borderRadius: "20px",
            objectFit: "cover",
            objectPosition: "center 0",
          }}
        />
        <Box
          sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography variant="h2">{project.name}</Typography>
          <Typography variant="body2">{project.year}</Typography>
        </Box>
        <Typography
          variant="body1"
          component="p"
          style={{width: "85%", textAlign: "center"}}>
          {project.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}>
          <Link to={`/project/${project.name}`}>
            <Button
              variant="outlined"
              endIcon={<PlayCircleOutlineIcon />}
              size="small">
              Démo
            </Button>
          </Link>
          <Button
            variant="outlined"
            endIcon={<CodeIcon />}
            size="small"
            href="">
            Code
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            flexWrap: "wrap",
          }}>
          {project.stack.map(stack => (
            <Chip
              sx={{letterSpacing: "normal", pl: "4px"}}
              label={stack.name}
              icon={
                stack.icon ? (
                  <stack.icon style={{width: "1rem", height: "1rem"}} />
                ) : (
                  <span />
                )
              }
              key={stack.name}></Chip>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default ProjectCard;
