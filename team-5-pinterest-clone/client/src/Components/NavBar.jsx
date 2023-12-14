// when user logs out
import React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

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
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "rgba(251, 251, 251, 1)" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "black" }}
        >
          Pintastic
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginRight: "20px", color: "black" }}
        >
          About Us
        </Typography>
        <div role="presentation" onClick={handleClick}>
          <Typography variant="body1">
            <Breadcrumbs aria-label="breadcrumb">
              <StyledBreadcrumb component="a" href="#" label="Log in" />
              <StyledBreadcrumb component="a" href="#" label="Sign up" />
            </Breadcrumbs>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}
