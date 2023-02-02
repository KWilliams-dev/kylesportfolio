import { Box } from "@mui/material";
import { AcademicCard } from "../components/AcademicCard/AcademicCard";
import Fade from "react-reveal/Fade";

export const Academics = () => {
  return (
    <Fade>
      <Box>
        <AcademicCard />
      </Box>
    </Fade>
  );
};
