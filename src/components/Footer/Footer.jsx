import * as React from "react";
import { Box, Typography } from "@mui/material";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillCopyrightCircle,
} from "react-icons/ai";
import { IconContext } from "react-icons";

export const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <IconContext.Provider value={{ color: "grey", size: "50px" }}>
        <Box sx={{ marginLeft: 3, marginRight: 3 }}>
          <a target="_blank" href="https://www.linkedin.com/in/kyle-williams-software-engineer/">
            <AiFillLinkedin />
          </a>
          <Typography> </Typography>
        </Box>
        <Box
          sx={{
            marginRight: 3,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AiFillCopyrightCircle />
          <Typography>Kyle Williams</Typography>
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
