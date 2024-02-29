import { Box, Stack, Typography } from "@mui/material";

const socials = [
  "Facebook",
  "Instagram",
  "TikTok",
  "Youtube",
  "X",
  "Pinterest",
];

const ThirdContainerSocial = () => {
  return (
    <Box
      className="card-container category-container"
      height="22em"
      display="flex"
      justifyContent="center"
      sx={{
        width: { xs: "18em" },
      }}
    >
      <Stack direction="column" spacing={1.5}>
        {socials.map((social) => (
          <Box className="category-box">
            <Typography variant="body1">{social}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ThirdContainerSocial;
