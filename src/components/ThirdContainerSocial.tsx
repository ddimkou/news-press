import { Box, Stack, Typography } from "@mui/material";
type SocialColors = {
  [key: string]: string;
};
const socialColors: SocialColors = {
  Facebook: "#3b5998",
  Instagram: "#E1306C",
  TikTok: "#69C9D0",
  Youtube: "#FF0000",
  X: "#000",
  Pinterest: "#E60023",
};

const socials = [
  "X",
  "Pinterest",
  "Youtube",
  "Instagram",
  "Facebook",
  "TikTok",
];

const ThirdContainerSocial = () => {
  return (
    <Box
      className="card-container social-container"
      height="30em"
      display="flex"
      sx={{
        width: { xs: "18em" },
      }}
    >
      <Stack direction="column" spacing={1.5}>
        {socials.map((social) => (
          <Box
            key={social}
            className="category-box social-box"
            sx={{
              backgroundColor: socialColors[social],
            }}
          >
            <Typography variant="body1">{social}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ThirdContainerSocial;
