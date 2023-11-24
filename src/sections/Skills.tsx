import { Box } from "@mui/material";
import { SKILL_TYPE, Skill } from "../components/skills/skills.type";
import { skillsData } from "../components/skills/skills.data";
import SectionSubtitle from "../components/sections/components/SectionSubtitle";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Paper from "../components/base/components/Paper";
import { relative } from "path";
import { motion } from "framer-motion";

const skillVariants = {
  hidden: { opacity: 0 },
  visible: ({ i, totalCount }: { i: number; totalCount: number }) => ({
    opacity: 1,
    x: 100 * Math.sin((Math.PI * 2 * ((360 / totalCount) * i)) / 360),
    y: 100 * Math.cos((Math.PI * 2 * ((360 / totalCount) * i)) / 360),
  }),
};

const wrapperSkillVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const Skills = () => {
  return (
    <>
      {Object.keys(SKILL_TYPE).map((skillKey) => {
        const skillType: SKILL_TYPE =
          SKILL_TYPE[skillKey as keyof typeof SKILL_TYPE];
        return <SkillCategory category={skillType}></SkillCategory>;
      })}
    </>
  );
};

const SkillCategory = ({ category }: { category: SKILL_TYPE }) => {
  const skills: Skill[] = skillsData.filter((skill) => skill.type == category);
  return (
    <>
      <Paper sx={{ width: "30%" }}>
        <motion.div
          variants={wrapperSkillVariants}
          initial="hidden"
          whileHover="visible"
        >
          <SectionSubtitle>{category}</SectionSubtitle>
          {skills.map((skill: Skill, i: number) => (
            <motion.div
              variants={skillVariants}
              custom={{ i: i, totalCount: skills.length }}
            >
              <Box
                sx={{
                  fontSize: "1rem",
                  position: "absolute",
                  left: "40%",
                  top: "40%",
                }}
                key={skill.name}
              >
                {skill.icon ? (
                  <skill.icon style={{ width: "1rem", height: "1rem" }} />
                ) : (
                  <ApartmentIcon />
                )}
                {skill.name}
              </Box>
            </motion.div>
          ))}
        </motion.div>
      </Paper>
    </>
  );
};

export default Skills;
