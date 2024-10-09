import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import "@fontsource/poppins";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <Box 
      className="ms-2" 
      sx={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        mt: 4 
      }}
    >
      <Typography variant="h4" className="mb-4">
        Log In
      </Typography>

      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 400 }}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          helperText="We'll never share your details with anyone else."
        />
        
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 2 }}
        >
          Log In
        </Button>
      </form>
    </Box>
  );
};

export default Login;

