import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "var(--accent-color)",
        py: 3,
        mt: "3em",
      }}
    >
      <Typography variant="body1" align="center">
        The Future of News, Today
      </Typography>
      <Typography variant="body2" align="center" sx={{ mt: 1 }}>
        © 2024 News Press. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
