import { Box, Typography } from "@mui/material";

export const Home = () => {
  return (
    <div style={{ height: "100%", width: "100%", marginBottom: 350 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: 3,
            width: "100%",
          }}
        >
          <Typography
            sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
            variant="h3"
          >
            {"Thanks for taking a look at my portfolio!"}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2, textAlign: "center", paddingLeft: 5, paddingRight: 5 }}>
            <Typography variant="h6">
              Click "Request Code Review" if you'd like to learn
              more about my contributions to that specfic project, or "Contact" to send
              me an email. You can also check out my LinkedIn and GitHub profiles via the icon links below!
            </Typography>
          </Box>
        </Box>
    </div>
  );
};
