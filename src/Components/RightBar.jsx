import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";

function RightBar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box
        sx={{
          position: "fixed",
          paddingRight: "30px",
        }}
      >
        <Typography variant="h6" fontWeight={"200"} mt={2} mb={2}>
          Friends
        </Typography>
        <Box height={"50px"}>
          <AvatarGroup
            max={6}
            sx={{
              position: "absolute",
              left: "0",
            }}
          >
            <Avatar alt="Remy Sharp" src="/public/KARTHIK.jpg" />
            <Avatar alt="Travis Howard" src="/public/KRISHNAPRIYA P.jpg" />
            <Avatar alt="Cindy Baker" src="/public/PRATHEEKSHA.jpg" />
            <Avatar alt="Agnes Walker" src="" />
            <Avatar alt="Trevor Henderson" src="/public/THOMAS PRASAD.jpg" />
            <Avatar alt="Agnes Walker" src="" />
            <Avatar alt="Agnes Walker" src="" />
            <Avatar alt="Agnes Walker" src="" />
          </AvatarGroup>
        </Box>
        <Typography variant="h6" fontWeight={"200"} mt={2} mb={2}>
          Latest Posts
        </Typography>
        <ImageList gap={5} cols={3} rowHeight={100}>
          <ImageListItem>
            <img src="/public/THOMAS PRASAD.jpg" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="/public/SHAHANA.jpg" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="/public/UBAID.jpg" loading="lazy" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={"200"} mt={2}>
          Latest Conversations
        </Typography>


        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default RightBar;
