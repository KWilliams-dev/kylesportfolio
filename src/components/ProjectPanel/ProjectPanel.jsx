import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { RequestCodeReviewButton } from "../RequestCodeReview/RequestCodeReviewButton";

export const ProjectPanel = ({
  title,
  info,
  technologies,
  image,
  listOfAccomplishments,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Card
        sx={{
          width: "85%",
          marginTop: 5,
          boxShadow: "-15px 10px 5px grey",
          borderRight: "1px solid",
          borderBottom: "1px solid",
        }}
      >
        <CardMedia
          component={"img"}
          alt="QuicKart Image"
          height={"140"}
          width="55%"
          image={image}
        />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography sx={{ marginTop: 1 }}>{info}</Typography>
          <List>
            <Typography sx={{ marginTop: 1, marginBottom: 1 }} variant="h5">
              My Accomplishments On This Project
            </Typography>
            {listOfAccomplishments &&
              listOfAccomplishments.map((accomp) => {
                return (
                  <ListItem>
                    <ListItemText>{accomp}</ListItemText>
                  </ListItem>
                );
              })}
          </List>
        </CardContent>
        <CardActions>
          <div style={{ marginLeft: 10 }}>
            <RequestCodeReviewButton />
          </div>
        </CardActions>
        <Stack
          sx={{ paddingLeft: 2, paddingBottom: 2, paddingTop: 2 }}
          direction={"row"}
          spacing={1}
        >
          <Chip label={technologies[0]} />
          <Chip label={technologies[1]} />
          <Chip label={technologies[2]} />
          <Chip label={technologies[3]} />
        </Stack>
      </Card>
    </Box>
  );
};
