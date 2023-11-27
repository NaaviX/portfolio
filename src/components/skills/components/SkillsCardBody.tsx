import { Box, Typography } from "@mui/material";
import { Skill, SkillCategory } from "../skills.type";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import Chip from "../../base/components/Chip";

const SkillsCardBody = ({
  skillCategory,
  progress,
}: {
  skillCategory: SkillCategory;
  progress: MotionValue;
}) => {
  const imageScale = useTransform(progress, [0.7, 1], [1, 0.8]);
  return (
    <>
      <Box
        className="skillCardBody"
        sx={{
          position: "relative",
          display: "flex",
          height: "100%",
          gap: "50px",
        }}
      >
        <Box
          className="skillCardDescription"
          sx={{
            flex: 1,
            ml: "15px",
            gap: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2">{skillCategory.name.toString()}</Typography>
          <Typography variant="body1">{skillCategory.description}</Typography>
        </Box>

        <Box
          className="skillCategoryImage"
          sx={{
            flex: 1,
            position: "relative",
            width: "100%",
            display: "flex",
            height: "100%",
            alignItems: "center",
          }}
        >
          <motion.div
            style={{ scale: imageScale, width: "100%" }}
            className="skillCategoryInnerImage"
          >
            <skillCategory.image
              style={{ width: "100%", objectFit: "cover" }}
            />
          </motion.div>
        </Box>
      </Box>
      <Box
        className="skillsList"
        sx={{
          width: "100%",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {skillCategory.skills.map((skill: Skill, i: number) => (
          <Chip
            key={skill.name}
            icon={
              skill.icon ? <skill.icon style={{ width: "1rem" }} /> : <span />
            }
            label={skill.name}
          />
        ))}
      </Box>
    </>
  );
};

export default SkillsCardBody;
