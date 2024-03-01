import { Box, Typography } from "@mui/material";
import { Articles } from "../utils/FetchApi";
import SecondContainerCategories from "./SecondContainerCategories";

interface SecondContainerProps {
  entertainment: Articles[];
}
// img null?
const getImageUrl = (imageUrl: string | null | undefined): string => {
  return imageUrl || "/NoImgFound.png";
};
const SecondContainer = ({ entertainment }: SecondContainerProps) => {
  // open article url
  const handleOpenArticle = (articleUrl: string) => {
    window.open(articleUrl, "_blank");
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="8em"
      gap={1}
      sx={{ flexDirection: { xs: "column", md: "row" } }}
    >
      <Box
        onClick={() =>
          entertainment[0]?.url && handleOpenArticle(entertainment[0].url)
        }
        className="card-container card social-container"
        height="22em"
        sx={{
          width: { xs: "18em", md: "32em", xl: "52em" },
          backgroundImage: `url(${getImageUrl(entertainment[0]?.urlToImage)})`,
          cursor: "pointer",
        }}
      >
        <Box className="label-container">
          <Typography variant="body1">Entertainment</Typography>
        </Box>
        <Box className="title-container">
          <Typography variant="subtitle2">{entertainment[0]?.title}</Typography>
        </Box>
      </Box>
      <SecondContainerCategories />
    </Box>
  );
};

export default SecondContainer;
