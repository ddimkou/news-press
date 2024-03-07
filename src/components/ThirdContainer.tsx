import { Box, Typography } from "@mui/material";
import { Articles } from "../utils/FetchApi";
import ThirdContainerSocial from "./ThirdContainerSocial";
import { useNavigate } from "react-router-dom";

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

  // Navigate to category's page
  const navigate = useNavigate();
  const navigateToCategory = (category: string) => {
    navigate(`/articles/${category.toLowerCase()}`);
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
        className="card-container card"
        height="30em"
        sx={{
          width: { xs: "18em", md: "32em", xl: "52em" },
          backgroundImage: `url(${getImageUrl(business[0]?.urlToImage)})`,
        }}
      >
        <Box
          className="label-container"
          onClick={() => navigateToCategory("Business")}
        >
          <Typography variant="body1">Business</Typography>
        </Box>
        <Box
          className="title-container"
          onClick={() => business[0]?.url && handleOpenArticle(business[0].url)}
        >
          <Typography variant="subtitle2">{business[0]?.title}</Typography>
        </Box>
      </Box>

      <ThirdContainerSocial />
    </Box>
  );
};

export default ThirdContainer;
