import { Box, Typography } from "@mui/material";
import { Articles } from "../utils/FetchApi";

interface ThirdContainerProps {
  business: Articles[];
}
const ThirdContainer = ({ business }: ThirdContainerProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="4em"
      gap={1}
      sx={{ flexDirection: { xs: "column", md: "row" } }}
    >
      <Box
        className="card-container card"
        height="30em"
        sx={{
          width: { xs: "18em", md: "32em", xl: "52em" },
          backgroundImage: `url(${business[0]?.urlToImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box className="label-container">
          <Typography variant="body1">Business</Typography>
        </Box>
        <Box className="title-container">
          <Typography variant="subtitle2">{business[0]?.title}</Typography>
        </Box>
      </Box>
      <Box
        height="30em"
        sx={{
          background: "black",
          width: { xs: "18em" },
        }}
      >
        Our Socials
      </Box>
    </Box>
  );
};

export default ThirdContainer;
