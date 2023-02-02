import { Tabs, Tab, Box, Typography } from "@mui/material";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SchoolIcon from "@mui/icons-material/School";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { ContactModal } from "../ContactModal/ContactModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = useState("1");

  const routes = ["/", "/projects", "/academics", "/about"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: 3,
      }}
    >
      <Tabs value={value} onChange={handleChange}>
        <Tab
          value={"1"}
          sx={{ marginRight: 3, marginLeft: 3 }}
          icon={<HomeIcon />}
          label="Home"
          LinkComponent={Link}
          to={routes[0]}
        />
        <Tab
          value={2}
          sx={{ marginRight: 3, marginLeft: 3 }}
          icon={<AccountTreeIcon />}
          label="Projects"
          LinkComponent={Link}
          to={routes[1]}
        />
        <button onClick={handleOpen}>
        <Tab
          sx={{ marginRight: 3, marginLeft: 3 }}
          icon={<SendIcon />}
          label="Contact"
        />
        </button>
        {open && (
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <ContactModal />
              </Box>
            </Modal>
          </div>
        )}
        <Tab
          value={3}
          sx={{ marginRight: 3, marginLeft: 3 }}
          icon={<SchoolIcon />}
          label="Academics"
          LinkComponent={Link}
          to={routes[2]}
        />
        <Tab
          value={4}
          sx={{ marginRight: 3, marginLeft: 3 }}
          icon={<InfoIcon />}
          label="About"
          LinkComponent={Link}
          to={routes[3]}
        />
      </Tabs>
    </Box>
  );
};
