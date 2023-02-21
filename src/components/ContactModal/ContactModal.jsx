import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";

const textInputStyle = {
  width: "85%",
  padding: "12px 20px",
  margin: "8px 0",
  border: "3px solid #555",
};

const slectionInputStyle = {
  marginTop: "5",
};

export const ContactModal = () => {
  const [submit, setSubmit] = useState(false);
  const handleSubmit = () => {
    setSubmit(true);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {submit === false ? (
        <form name="contact" netlify>
          <input type="hidden" name="form-name" value="contact v1" />
          <Typography variant="h4" style={{ paddingBottom: 20 }}>
            Want to get in touch?
          </Typography>
          <label>
            <Typography>First Name</Typography>

            <input style={textInputStyle} type="text" name="first-name" />
          </label>
          <label>
            <Typography>Last Name</Typography>

            <input style={textInputStyle} type="text" name="last-name" />
          </label>
          <label>
            <Typography>Email</Typography>

            <input style={textInputStyle} type="email" name="e-mail" />
          </label>
          <label style={{ marginTop: 10 }}>
            <Typography>
              Are you interested in learning more about one of the projects?
            </Typography>

            <select
              style={{
                width: "100%",
                padding: "16px 20px",
                border: "none",
                borderRadius: "4px",
                backgroundColor: "#f1f1f1",
              }}
              type="select"
              name="project"
            >
              <option style={slectionInputStyle} value={"QuicKart"}>
                QuicKart
              </option>
              <option style={slectionInputStyle} value={"SoftIQ"}>
                SoftIQ
              </option>
              <option style={slectionInputStyle} value={"Lost Resident"}>
                Lost Resident
              </option>
              <option style={slectionInputStyle} value={"Client Registrar"}>
                Client Registrar
              </option>
            </select>
          </label>
          <Button
            onClick={handleSubmit}
            style={{ marginTop: 20 }}
            variant="outlined"
            type="button"
          >
            Submit
          </Button>
        </form>
      ) : (
        <div style={{ width: "100%" }}>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
            variant="h4"
          >
            Thank you!
          </Typography>
        </div>
      )}
    </Box>
  );
};
