import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import diploma from "../../assets/diploma.png";

export const AcademicCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        marginBottom: 5
      }}
    >
      <Card
        sx={{
          width: "95%",
          marginTop: 5,
          boxShadow: "20px 20px 10px grey",
        }}
      >
        <CardMedia
          component={"img"}
          alt="QuicKart Image"
          height={"140"}
          width="55%"
          image={diploma}
        />
        <CardContent>
          <Typography variant="h4">{"Georgia Gwinnett College"}</Typography>
          <Typography sx={{ marginTop: 1 }} variant="h5">
            {
              "Major: Information Technology - Software Development Concentration"
            }
          </Typography>
          
          <Typography sx={{ marginTop: 1 }} variant="h6">
            {"Awards: Presidents List, Deans List"}
          </Typography>
          <Typography sx={{ marginTop: 1 }} variant="h6">
            {"GPA: 3.78"}
          </Typography>
          <Typography sx={{ marginTop: 2 }} variant="h6">
            GGC has offered me the opportunity to earn a B.S. that is largly
            focused in Software Devlopment. The curriculum for my concentration
            has also enabled me to gain academic and proffesional experience in Agile
            methodologies. As well as many different technologies, including:
          </Typography>
          <Stack
            sx={{ paddingLeft: 2, paddingTop: 2 }}
            direction={"row"}
            spacing={1}
          >
            <Chip label="Java" />
            <Chip label="SQL" />
            <Chip label="SQLite" />
            <Chip label="MongoDB" />
            <Chip label="GraphQL" />
            <Chip label="Node.js" />
            <Chip label="Javascript" />
            <Chip label="ReactJS" />
            <Chip label="HTML" />
            <Chip label="CSS" />
          </Stack>
        </CardContent>
        <CardActions>
          <Button>Contact Me</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
