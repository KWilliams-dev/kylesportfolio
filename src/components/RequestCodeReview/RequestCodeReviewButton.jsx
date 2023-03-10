import { Box } from "@mui/material";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { ContactModal } from "../ContactModal/ContactModal";
import Button from "@mui/material/Button";

export const style = {
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

export const RequestCodeReviewButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} variant="outlined" color="secondary">
        Request Code Review
      </Button>
      {open && (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <ContactModal handleClose={handleClose} />
            </Box>
          </Modal>
        </div>
      )}
    </>
  );
};
