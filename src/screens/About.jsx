import { Box } from "@mui/material";
import { LeftInfoBlock } from "../components/InfoBlock/LeftInfoBlock";
import { RightInfoBlock } from "../components/InfoBlock/RightInfoBlock";
import Fade from "react-reveal/Fade";

const aspireInfo =
  "My current goals are to graduate in August of 2023, and start my career as a Software Engineer imediately after. I've been coding " +
  "for almost three years and have gained experience in Java, JS, React, HTML, CSS, SQL, MongoDB, and Node.js. I thouroughly enjoy the problem solving aspect " +
  " of this field. I always try to find the most efficient process for solving business problems in tech.";

const skillsInfo =
  "My current goals are to graduate in August of 2023, and start my career as a Software Engineer imediately after. I've been coding " +
  "for almost three years and have gained experience in Java, JS, React, HTML, CSS, SQL, MongoDB, and Node.js. I thouroughly enjoy the problem solving aspect " +
  " of this field. I always try to find the most efficient process for solving business problems in tech.";

export const About = () => {
  return (
    <Box
      sx={{
        paddingLeft: 2,
        paddingRight: 2,
        marginBottom: 25
      }}
    >
      <Fade left>
        <LeftInfoBlock title={"Aspirations"} info={aspireInfo} />
      </Fade>

      <Fade right>
        <RightInfoBlock title={"Skills"} info={aspireInfo} />
      </Fade>
    </Box>
  );
};
