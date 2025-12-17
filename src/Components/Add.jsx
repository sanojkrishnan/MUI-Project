import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import styled from "@emotion/styled";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ImageIcon from "@mui/icons-material/Image";
import { DateRange } from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
});

function Add() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: {
            xs: "calc(50% - 25px)",
            md: 30,
          },
        }}
      >
        <Fab color="secondary" aria-label="add" onClick={() => setOpen(true)}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          sx={{
            width: "50%",
            height: "45%",
            padding: "30px",
            borderRadius: "5px",
          }}
        >
          <Typography color="gray" textAlign="center" fontSize="50px">
            Hello
          </Typography>
          <hr />
          <br />

          <UserBox>
            <Avatar
              sx={{
                width: "30px",
                height: "30px",
              }}
              src="/public/download.jfif"
              onClick={() => setOpen(true)}
            />
            <Typography variant="span" fontWeight={500}>
              &nbsp; John
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={3}
            columns={50}
            placeholder="Type your thoughts..."
            sx={{ width: "100%" }}
          />
          <Stack direction={"row"} gap={1} mt={2} mb={1}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup variant="contained" fullWidth>
            <Button>Post</Button>
            <Button
              sx={{
                width: "100px",
              }}
            >
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;
