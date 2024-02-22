import { Box } from "@mui/material";

const SecondContainer = () => {
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
          width: { xs: "18em", md: "25em", xl: "35em" },
        }}
      >
        Box1
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        // gap={2}
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
          Box2
        </Box>
        <Box
          sx={{
            background: "black",
            width: { xs: "18em", md: "25em", xl: "35em" },
            height: "calc(50% - 0.5em)",
          }}
        >
          Box3
        </Box>
      </Box>
    </Box>
  );
};

export default SecondContainer;
