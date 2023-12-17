// when user loged in = User HomePage

import { useState, useEffect } from "react";
import axios from "axios";
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
import logo from "./photos/blackLogo.png";
import { useNavigate } from "react-router-dom";
import { stepClasses } from "@mui/material";
import SearchResult from "./SearchResult";

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
    backgroundColor: alpha(theme.palette.common.black, 0.25),
    color: "#000",
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
  const navigate = useNavigate();
  const [userPhoto, setUserPhoto] = useState([]);
  const userLoged = localStorage.getItem("user");
  const [userLog, setUserlogged] = useState(
    userLoged ? JSON.parse(userLoged) : null
  );
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/users/getOneUserid/${userLog.idUsers}`)
      .then((result) => {
        console.log(result.data);
        setUserPhoto(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [userLog.idUsers]); // Ensure this useEffect runs when userLog changes

  useEffect(() => {
    fetchData();
  }, []);

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
  const handleClick = () => {
    console.log("clicked");
    navigate("/all-posts");
  };
  const handleRahma = () => {
    console.log("clicked");
    navigate("/createPost");
  };
  const handleGoToProfile = () => {
    navigate("/profile");
  };
  const handleLogout = () => {
    axios
      .post("http://localhost:8800/api/users/logout")
      .then((response) => {
        console.log(response.data);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });

    handleMenuClose();
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
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
      <StyledMenuItem onClick={handleMenuClose && handleGoToProfile}>
        Profile
      </StyledMenuItem>

      <StyledMenuItem onClick={handleMenuClose && handleLogout}>
        log out
      </StyledMenuItem>
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
        <Avatar onClick={handleProfileMenuOpen} />
        <p>Profile</p>
      </StyledMenuItem>
    </Menu>
  );

  const fetchData = (value = null) => {
    fetch("http://localhost:8800/api/users/getAllPosts")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((post) => {
          return post && post.categories;
        });

        setCategories(results);
        if (value)
          setResults(
            results.filter((post) => {
              return post.categories.toLowerCase().includes(value);
            })
          );
        else setResults([]);
      });
  };
  return (
    <div>
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
              sx={{
                display: { xs: "none", sm: "block" },
                color: "black",
                marginLeft: "10px",
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              PinTastic
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="type to search"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => handleChange(e.target.value)}
                onFocus={(e) => setCategory(true)}
                // onBlur={(e) => setCategory(false)}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <StyledIconButton
                size="large"
                aria-label="show all posts"
                color="inherit"
                onClick={handleClick}
              >
                <Badge color="error">
                  <HomeIcon />
                </Badge>
              </StyledIconButton>
              <StyledIconButton
                size="large"
                aria-label="Create post"
                color="inherit"
                onClick={handleRahma}
              >
                <Badge color="error">
                  <CreateIcon />
                </Badge>
              </StyledIconButton>
              {userPhoto.map((el, i) => (
                <Avatar
                  key={i}
                  src={userLog.photo}
                  onClick={handleProfileMenuOpen}
                />
              ))}
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
      <div className="Search-container">
        <SearchResult
          results={results}
          categories={categories}
          category={category}
        />
      </div>
    </div>
  );
}
