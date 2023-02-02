import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { RequestCodeReviewButton } from "../RequestCodeReview/RequestCodeReviewButton";

export const ProjectPanel = ({title, info, technologies, image, listOfProjects}) => {

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
            borderBottom: "1px solid"
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
            <Typography sx={{ marginTop: 1 }}>
              {info}
            </Typography>
            <List>
              <Typography sx={{marginTop: 1, marginBottom: 1}} variant="h5">My Accomplishments On This Project</Typography>
              <ListItem >
                <ListItemText>Implemented searchable dropdown menu that populated with grocery items (queried from MongoDB via GraphQL).</ListItemText>
              </ListItem>
              <ListItem >
                <ListItemText>Wrote code that sorted the users grocery list in order of proximity.</ListItemText>
              </ListItem>
              <ListItem >
                <ListItemText>Implemented React-Redux into the project. I used this to update the users grocery list and time spent shopping.</ListItemText>
              </ListItem>
              <ListItem >
                <ListItemText>Designed the architecture of the app.</ListItemText>
              </ListItem>
              <ListItem >
                <ListItemText>Ensured my sprint tasks were completed on time.</ListItemText>
              </ListItem>
            </List>
          </CardContent>
          <CardActions>
            <RequestCodeReviewButton />
          </CardActions>
          <Stack sx={{paddingLeft: 2, paddingBottom: 2, paddingTop: 2}} direction={"row"} spacing={1}>
            <Chip label={technologies[0]}/>
            <Chip label={technologies[1]}/>
            <Chip label={technologies[2]}/>
            <Chip label={technologies[3]}/>
          </Stack>
        </Card>
      </Box>
  );
};
