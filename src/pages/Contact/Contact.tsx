import { Box, Container, Paper, TextField, Typography } from "@mui/material";

const Contact = () => {
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
          Contact form
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
        >
          <TextField
            id="outlined-multiline-flexible"
            label="Name:"
            multiline
            maxRows={4}
          />
          <TextField id="outlined-textarea" label="Email:" multiline />
          <TextField
            id="outlined-multiline-static"
            label="Your Message:"
            multiline
            rows={6}
            defaultValue=""
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;
