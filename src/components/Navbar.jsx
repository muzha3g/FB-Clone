import React, { useState } from "react";
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
import {
  SentimentSatisfiedAlt,
  Mail,
  Notifications,
} from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  width: "40%",
  padding: "10px",
  borderRadius: theme.shape.borderRadius,
}));

const Icon = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "25px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" color="warning">
      <StyledToolbar>
        <Typography
          variant="h4"
          sx={{
            display: {
              xs: "none",
              sm: "block",
              fontWeight: "500",
            },
          }}
        >
          Material UI
        </Typography>
        <SentimentSatisfiedAlt
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
        <Search>
          <InputBase placeholder="Search Something Here...">Search</InputBase>
        </Search>

        <Icon>
          <Badge badgeContent={3} color="error">
            <Mail sx={{ width: "40px", height: "40px" }} />
          </Badge>
          <Badge badgeContent={5} color="error">
            <Notifications sx={{ width: "40px", height: "40px" }} />
          </Badge>
          <Avatar
            src="https://upload.cc/i1/2019/03/27/dV5SU9.jpg"
            sx={{ width: "50px", height: "50px" }}
            onClick={(e) => setOpen(true)}
          />
        </Icon>
        <UserBox>
          <Avatar
            src="https://upload.cc/i1/2019/03/27/dV5SU9.jpg"
            sx={{ width: "50px", height: "50px" }}
            onClick={(e) => setOpen(true)}
          />
          <Typography variant="h6">Mimi</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
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
};

export default Navbar;
