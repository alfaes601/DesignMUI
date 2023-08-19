import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const SyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SearchContainer = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const IconsBox = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "15px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "5px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  return (
    <AppBar position="sticky">
      <SyledToolBar>
        <Typography
          variant="h5"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          ALFA DEV
        </Typography>
        <Pets
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
        <SearchContainer>
          <InputBase placeholder="Search..." />
        </SearchContainer>
        <IconsBox>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={1} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e) => {
              setOpen(true);
            }}
            sx={{ width: 30, height: 30 }}
            src="https://lh3.googleusercontent.com/a/AAcHTtfVJlzjPGlgynrmwiyaXNMqU-X8jh-efV3K5PCv99wX2-I=s288-c-no"
          />
        </IconsBox>
        <UserBox>
          <Avatar
            onClick={(e) => {
              setOpen(true);
            }}
            sx={{ width: 30, height: 30 }}
            src="https://lh3.googleusercontent.com/a/AAcHTtfVJlzjPGlgynrmwiyaXNMqU-X8jh-efV3K5PCv99wX2-I=s288-c-no"
          />
          <Typography variant="span" sx={{ color: lightGreen[900] }}>
            EA
          </Typography>
        </UserBox>
      </SyledToolBar>
      <Menu
        id="demo-positioned-menu"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
