import React, { useState, useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"; 

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    logout(); 
    navigate("/"); 
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Fitness Tracker
      </Typography>
      <List>
        <ListItem button onClick={() => navigate("/dashboard")}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => navigate("/workout-log")}>
          <ListItemText primary="Workout Log" />
        </ListItem>
        <ListItem button onClick={() => navigate("/statistics")}>
          <ListItemText primary="Statistics" />
        </ListItem>
        <ListItem button onClick={handleLogout}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#961313" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/dashboard"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
            }}
          >
            Fitness Tracker
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              component={Link}
              to="/dashboard"
              sx={{ color: "#fff", fontWeight: "bold" }}
            >
              Dashboard
            </Button>
            <Button
              component={Link}
              to="/workout-log"
              sx={{ color: "#fff", fontWeight: "bold" }}
            >
              Workout Log
            </Button>
            <Button
              component={Link}
              to="/statistics"
              sx={{ color: "#fff", fontWeight: "bold" }}
            >
              Statistics
            </Button>
            <Button
              onClick={handleLogout}
              sx={{ color: "#fff", fontWeight: "bold" }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>


      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
