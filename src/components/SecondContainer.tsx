import { Box, Typography } from "@mui/material";
import { Articles } from "../utils/FetchApi";

interface SecondContainerProps {
  entertainment: Articles[];
}
const SecondContainer = ({ entertainment }: SecondContainerProps) => {
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
          backgroundImage: `url(${entertainment[0]?.urlToImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box className="label-container">
          <Typography variant="body1">Entertainment</Typography>
        </Box>
        <Box className="title-container">
          <Typography variant="subtitle2">{entertainment[0]?.title}</Typography>
        </Box>
      </Box>
      <Box
        height="30em"
        sx={{
          background: "black",
          width: { xs: "18em" },
        }}
      >
        Categories
      </Box>
    </Box>
  );
};

export default SecondContainer;
