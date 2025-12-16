import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icon = styled(Box)(({theme}) => ({
  display: "none",
  justifyContent: "space-between",
  alignItems : "center",
  gap: "25px",
  [theme.breakpoints.up("sm")]:{
    display : "flex"
  }
}));

const UserBox = styled(Box)(({theme}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems : "center",
  width : "10%",
  paddingRight: "20px",
  [theme.breakpoints.up("sm")]:{
    display : "none"
  }
}));

function NavBar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          DOLLAR
        </Typography>
        <AttachMoneyIcon
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />

        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icon>
          <Badge badgeContent={1000} max={999} color={"error"}>
            <MailIcon />
          </Badge>
          <Badge badgeContent={1000} max={999} color={"error"}>
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{
            width : "30px",
            height : "30px"
          }} src="https://www.instagram.com/p/CzgC2OBvpYv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </Icon>
        <UserBox>
            <Avatar sx={{
            width : "30px",
            height : "30px"
          }} src="https://www.instagram.com/p/CzgC2OBvpYv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
}

export default NavBar;
