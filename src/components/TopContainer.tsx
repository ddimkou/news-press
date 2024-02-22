import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Articles } from "../pages/Home/HomePage";

interface TopContainerProps {
  topHeadlines: Articles[];
}
const TopContainer = ({ topHeadlines }: TopContainerProps) => {
  useEffect(() => {
    console.log(topHeadlines);
  }, [topHeadlines]);
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
        height="30em"
        sx={{
          width: { xs: "18em", md: "25em", xl: "35em" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            topHeadlines.length > 0
              ? `url(${topHeadlines[0].urlToImage})`
              : "none",
          backgroundColor: topHeadlines.length > 0 ? "transparent" : "black",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "white", textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
        >
          {topHeadlines.length > 0 ? topHeadlines[0].title : "Loading..."}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        height="30em"
        sx={{ gap: { sm: "8px", md: "16px" } }}
      >
        <Box
          sx={{
            background: "black",
            width: { xs: "18em", md: "25em", xl: "35em" },
            height: "calc(50% - 0.5em)",
          }}
        >
          Sports
        </Box>
        <Box
          sx={{
            background: "black",
            width: { xs: "18em", md: "25em", xl: "35em" },
            height: "calc(50% - 0.5em)",
          }}
        >
          Technologies
        </Box>
      </Box>
    </Box>
  );
};

export default TopContainer;
