import React from "react";
import { AppBar, Box, Typography, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            style={{
              textDecoration: "none",
              color: "#fff",
              marginRight: "10px",
            }}
            variant="h6"
            component={Link}
            to="/"
          >
            Home
          </Typography>
          <Typography
            style={{
              textDecoration: "none",
              color: "#fff",
              marginRight: "10px",
            }}
            variant="h6"
            component={Link}
            to="/search"
          >
            Search
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
