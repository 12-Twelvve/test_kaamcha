import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { About } from "./About";
import { Register } from "./Register";
import Search from "./Search";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Footer from "./Footer";

export const Home = () => {
  return (
    <div >
      {/* navigation bar */}
      <Appbar />
      <Router>
            <div className="homepage">
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Search/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
      </Router>
      {/* footer */}
      <div style={{ position: "relative" }}>
        <Footer />
      </div>
    </div>
  );
};
const Appbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#00e5ff", color: "black" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            kAamChha??
          </Typography>

          <Button color="inherit" href="/">
            Home
          </Button>

          <Button color="inherit" href="/about">
            About us
          </Button>

          <Button color="inherit" href="/register">
            Register as a superman
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
