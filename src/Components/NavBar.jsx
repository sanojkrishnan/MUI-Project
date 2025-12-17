import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
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
const Icon = styled(Box)(({ theme }) => ({
  display: "none",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "25px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "10%",
  paddingRight: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function NavBar() {
  const [open, setOpen] = useState(false);
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
          <Avatar
            sx={{
              width: "30px",
              height: "30px",
            }}
            src="/public/download.jfif"
            onClick={()=> setOpen(true) }
          />
        </Icon>
        <UserBox>
          <Avatar
            sx={{
              width: "30px",
              height: "30px",
            }}
            src="/public/download.jfif"
            onClick={()=> setOpen(true) }
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
      top: "30px"
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default NavBar;
