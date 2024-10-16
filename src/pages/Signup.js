import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Container, Box, TextField, Button, Typography, Paper } from "@mui/material";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password); 
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 4,
            background: "rgba(0, 0, 0, 0.6)", 
            color: "#fff",
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#fff" }}
            >
              Sign Up
            </Typography>
            <TextField
              margin="normal"
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputLabelProps={{ style: { color: "#fff" } }}
              sx={{
                input: { color: "#fff" },
                fieldset: { borderColor: "#fff" },
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputLabelProps={{ style: { color: "#fff" } }}
              sx={{
                input: { color: "#fff" },
                fieldset: { borderColor: "#fff" },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                backgroundColor: "#961313", 
                color: "#fff",
                fontWeight: "bold",
                ":hover": {
                  backgroundColor: "#ea4343",
                },
              }}
            >
              Sign Up
            </Button>
            <Box textAlign="center">
              <NavLink to="/" style={{ color: "#ffff", textDecoration: "none" ,fontSize:"20px"}}>
               Login
              </NavLink>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Signup;
