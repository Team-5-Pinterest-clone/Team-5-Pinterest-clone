// when user loged in = User HomePage

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import logo from "./photos/blackLogo.png"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "#000",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    color: "#fff",
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: "#000",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    color: "#000",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.black,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.common.black,
  "& input::placeholder": {
    color: theme.palette.common.black,
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "500px !important",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <StyledMenuItem onClick={handleMenuClose}>Profile</StyledMenuItem>
      <StyledMenuItem onClick={handleMenuClose}>Edit profile</StyledMenuItem>
      <StyledMenuItem onClick={handleMenuClose}>log out</StyledMenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <StyledMenuItem>
        <StyledIconButton
          size="large"
          aria-label="show all posts"
          color="inherit"
        >
          <Badge color="error">
            <HomeIcon />
          </Badge>
        </StyledIconButton>
        <p>All Posts</p>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledIconButton
          size="large"
          aria-label="Create post "
          color="inherit"
        >
          <Badge color="error">
            <CreateIcon />
          </Badge>
        </StyledIconButton>
        <p>Create</p>
      </StyledMenuItem>
      <StyledMenuItem>
        <Avatar
          onClick={handleProfileMenuOpen}
          alt="Remy Sharp"
          href="https://pin.it/5LeSeoE"
        />
        <p>Profile</p>
      </StyledMenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "rgba(251, 251, 251, 1)" }}
      >
        <Toolbar>
        <img src={logo} alt="bug" width={50} height={50} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, color: "black", marginLeft: '10px', }}
          >
            PinTastic
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search user"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <StyledIconButton
              size="large"
              aria-label="show all posts"
              color="inherit"
            >
              <Badge color="error">
                <HomeIcon />
              </Badge>
            </StyledIconButton>
            <StyledIconButton
              size="large"
              aria-label="Create post"
              color="inherit"
            >
              <Badge color="error">
                <CreateIcon />
              </Badge>
            </StyledIconButton>
            <Avatar
              onClick={handleProfileMenuOpen}
              alt="Remy Sharp"
              href="https://pin.it/5LeSeoE"
            />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <StyledIconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </StyledIconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
