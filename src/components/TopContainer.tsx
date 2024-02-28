import { Box, Typography } from "@mui/material";
import { Articles } from "../utils/FetchApi";

interface TopContainerProps {
  general: Articles[];
  sports: Articles[];
  technology: Articles[];
}

// img null?
const getImageUrl = (imageUrl: string | null | undefined): string => {
  return imageUrl || "/NoImgFound.png";
};
const TopContainer = ({ general, sports, technology }: TopContainerProps) => {
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
          width: { xs: "18em", md: "25em", xl: "35em" },
          backgroundImage: `url(${getImageUrl(general[0]?.urlToImage)})`,
        }}
      >
        <Box className="label-container">
          <Typography variant="body1">General</Typography>
        </Box>
        <Box className="title-container">
          <Typography variant="subtitle2">{general[0]?.title}</Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        height="30em"
        sx={{ gap: { sm: "8px", md: "16px" } }}
      >
        <Box
          className="card-container card"
          sx={{
            width: { xs: "18em", md: "25em", xl: "35em" },
            height: "calc(50% - 0.5em)",
            backgroundImage: `url(${getImageUrl(sports[0]?.urlToImage)})`,
          }}
        >
          <Box className="label-container">
            <Typography variant="body1">Sports</Typography>
          </Box>
          <Box className="title-container">
            <Typography variant="subtitle2">{sports[0]?.title}</Typography>
          </Box>
        </Box>
        <Box
          className="card-container card"
          sx={{
            width: { xs: "18em", md: "25em", xl: "35em" },
            height: "calc(50% - 0.5em)",
            backgroundImage: `url(${getImageUrl(technology[0]?.urlToImage)})`,
          }}
        >
          <Box className="label-container">
            <Typography variant="body1">Technology</Typography>
          </Box>
          <Box className="title-container">
            <Typography variant="subtitle2">{technology[0]?.title}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopContainer;
