import { Box } from "@mui/material";

const ThirdContainer = () => {
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
          background: "black",
          width: { xs: "18em", md: "32em", xl: "52em" },
        }}
      >
        Business
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

export default ThirdContainer;
