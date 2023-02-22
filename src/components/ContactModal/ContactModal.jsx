import { Box, Typography } from "@mui/material";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons";

export const ContactModal = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Typography style={{ paddingBottom: 10 }} variant="h4">
        Want to get in touch?
      </Typography>
      <Typography style={{ paddingBottom: 10 }} variant="h6">
        You'll find a copy of my resume and projects at the following links
      </Typography>
      <IconContext.Provider value={{ color: "grey", size: "50px" }}>
        <Box sx={{ marginLeft: 3, marginRight: 3 }}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kyle-williams-software-engineer/"
          >
            <AiFillLinkedin />
          </a>
          <Typography> </Typography>
        </Box>
        <Box sx={{ marginRight: 3 }}>
          <a target="_blank" href="https://github.com/KWilliams-dev">
            <AiFillGithub />
          </a>
          <Typography> </Typography>
        </Box>
      </IconContext.Provider>
    </Box>
  );
};
