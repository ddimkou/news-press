import { Box, Typography } from "@mui/material";
import { Articles } from "../utils/FetchApi";
import ThirdContainerSocial from "./ThirdContainerSocial";

interface ThirdContainerProps {
  business: Articles[];
}
// img null?
const getImageUrl = (imageUrl: string | null | undefined): string => {
  return imageUrl || "/NoImgFound.png";
};
const ThirdContainer = ({ business }: ThirdContainerProps) => {
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
        onClick={() => business[0]?.url && handleOpenArticle(business[0].url)}
        className="card-container card"
        height="30em"
        sx={{
          width: { xs: "18em", md: "32em", xl: "52em" },
          backgroundImage: `url(${getImageUrl(business[0]?.urlToImage)})`,
          cursor: "pointer",
        }}
      >
        <Box className="label-container">
          <Typography variant="body1">Business</Typography>
        </Box>
        <Box className="title-container">
          <Typography variant="subtitle2">{business[0]?.title}</Typography>
        </Box>
      </Box>
      {/* <Box
        height="30em"
        sx={{
          background: "black",
          width: { xs: "18em" },
        }}
      >
        Our Socials
      </Box> */}
      <ThirdContainerSocial />
    </Box>
  );
};

export default ThirdContainer;
