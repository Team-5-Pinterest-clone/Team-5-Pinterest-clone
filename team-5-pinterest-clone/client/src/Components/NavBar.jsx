// when user logs out = landingPage = for All visitors
import React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import logo from "./photos/blueLogo.png";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[200]
      : theme.palette.grey[900];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CustomizedNavbar() {
  const navigate = useNavigate();
   
        
    
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "rgba(251, 251, 251, 1)" }}
    >
      <Toolbar>
        <img src={logo} alt="bug" width={50} height={50} />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "black", marginLeft: "10px" }}
        >
          Pintastic
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography
          variant="body1"
          sx={{
            marginRight: "20px",
            color: "black",
            borderRadius: "8px",
            padding: "8px 12px",
            transition: "background-color 0.3s, color 0.3s",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          About Us
        </Typography>
        <div role="presentation" onClick={handleClick}>
          <Typography variant="body1">
            <Breadcrumbs aria-label="breadcrumb">
              <StyledBreadcrumb  label="Log in"  onClick={()=>navigate('/login')}/>
              <StyledBreadcrumb  label="Sign up" onClick={()=>navigate('/register')}/>
            </Breadcrumbs>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}
