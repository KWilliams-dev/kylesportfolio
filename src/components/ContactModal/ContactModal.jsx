import { Box, Typography } from "@mui/material";
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
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    project: "",
  });

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <Typography variant="h4" style={{ paddingBottom: 20 }}>
          Want to get in touch?
        </Typography>
        <label>
          <Typography>First Name</Typography>

          <input
            value={input.firstName}
            style={textInputStyle}
            type="text"
            name="firstName"
            onChange={(e) => {
              setInput({ ...input, firstName: e.target.value });
            }}
          />
        </label>
        <label>
          <Typography>Last Name</Typography>

          <input
            value={input.lastName}
            style={textInputStyle}
            type="text"
            name="lastName"
            onChange={(e) => {
              setInput({ ...input, lastName: e.target.value });
            }}
          />
        </label>
        <label>
          <Typography>Email</Typography>

          <input
            value={input.email}
            style={textInputStyle}
            type="email"
            name="email"
            onChange={(e) => {
              setInput({ ...input, email: e.target.value });
            }}
          />
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
            value={input.project}
            onChange={(e) => {
              setInput({ ...input, project: e.target.value });
            }}
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
        <button
          type="submit"
          className="w-1/2 mx-auto mt-[25px] p-2 bg-neutral-800 text-white rounded-lg"
        >
          Submit
        </button>
      </form>
    </Box>
  );
};
