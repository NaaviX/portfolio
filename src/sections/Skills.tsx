import {Box} from "@mui/material";
import {useScroll} from "framer-motion";
import {useRef} from "react";
import SkillsCard from "../components/skills/components/SkillsCard";
import {skillsData} from "../components/skills/skills.data";
import {SkillCategory} from "../components/skills/skills.type";

const Skills = () => {
  const container = useRef(null);

  const {scrollYProgress} = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  return (
    <Box
      ref={container}
      sx={{my: "50px", display: "block", width: "100%"}}
      id="skills">
      {skillsData.map((skillCategory: SkillCategory, i: number) => {
        const targetScale = 1 - (skillsData.length - i) * 0.05;
        return (
          <SkillsCard
            skillCategory={skillCategory}
            i={i}
            key={"skill_cat_" + skillCategory.name.toString()}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}></SkillsCard>
        );
      })}
    </Box>
  );
};

/*const skillVariants = {
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
};*/

/*const SkillCategory = ({ category }: { category: SKILL_TYPE }) => {
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
};*/

export default Skills;
