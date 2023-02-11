import { Box } from "@mui/material";
import { LeftInfoBlock } from "../components/InfoBlock/LeftInfoBlock";
import { RightInfoBlock } from "../components/InfoBlock/RightInfoBlock";

const aspireInfo =
  "My professional goals are to graduate in August of 2023, and start my career as a Software Engineer imediately after." +
  " I thouroughly enjoy the problem solving aspect of this field, and always try to find the most efficient process for solving " +
  " business problems in tech. The lifelong learning aspect of this field is not a deterrent for me, and I look forward to expanding my knowledge in full stack development and AI over the next few years.";

const technicalSkillsInfo =
  "My frontend experience consists of React, HTML, CSS and JS. As well as React-Router and React-Redux. Backend experience consists of MySQL, " +
  "GraphQL, Node.js, PHP, SQLite, MongoDB, Apollo-Server, JDBC (Java Database Connectivity). As well as data modeling and schema generation. ";

const softSkillsInfo =
"I've been able to work on several different teams and micro teams (two-three people) throughout my professional and academic career. " +
"While interning at Salesloft, I was able to work on a team consisting of QA Engineers, Senior Engineers, UI Engineers and Product/Engineering Managers. " +
"It was a great learning experience to be able to pair program with mid-senior level engineers and also clarify business requirements with product and engineering managers. " +
"Academically, I've worked on micro-teams tasked with creating a database that models and queries data for a mock computer store, and a seperate team tasked with creating a text-based adventure game. " +
"My larger academic team experience as well as professional has enabled me to get a solid grasp of agile methodologies. I have experience working in sprints, participating in daily stand ups, " + 
"pair programming, creating user stories and attending cross-functional team meetings.";

export const About = () => {
  return (
    <Box
      sx={{
        paddingLeft: 2,
        paddingRight: 2,
        marginBottom: 25
      }}
    >
        <LeftInfoBlock title={"Aspirations"} info={aspireInfo} />

        <RightInfoBlock title={"Technical Skills"} info={technicalSkillsInfo} />

        <LeftInfoBlock title={"Soft Skills"} info={softSkillsInfo} />
    </Box>
  );
};
