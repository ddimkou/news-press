import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email && message) {
      console.log(`Form: ${name}, ${email}, ${message}`);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      console.log("fields are required");
    }
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
            id="outlined-email"
            label="Email:"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
    </Container>
  );
};

export default Contact;
