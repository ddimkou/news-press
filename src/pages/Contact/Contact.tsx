import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [emailError, setEmailError] = useState<string>("");

  // email regex
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError(""); // Reset email error

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address!");
      return;
    }

    if (name && email && message) {
      setName("");
      setEmail("");
      setMessage("");
      setOpenSnackbar(true);
    } else {
      console.log("All fields are required");
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="md">
      <Paper
        elevation={3}
        sx={{
          padding: "1em",
          margin: "2em 1em",
          backgroundColor: "rgba(20, 20, 20, 0.8)",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "1em", color: "#ff8c00" }}>
          Contact Form
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "40em" },
          }}
          noValidate
          autoComplete="off"
          display="flex"
          flexDirection="column"
          alignItems="center"
          onSubmit={handleSubmit}
        >
          <TextField
            id="outlined-name"
            label="Name:"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            error={!!emailError}
            id="outlined-email"
            label="Email:"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={emailError}
          />
          <TextField
            id="outlined-message"
            label="Your Message:"
            multiline
            rows={6}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Send
          </Button>
        </Box>
      </Paper>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        message={`Thank you for your message!`}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        ContentProps={{
          sx: {
            justifyContent: "center", // Center the message
          },
        }}
      />
    </Container>
  );
};

export default Contact;
