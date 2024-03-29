import { Box, Typography } from "@mui/material";
import { Articles } from "../utils/FetchApi";
import { useNavigate } from "react-router-dom";

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
        <Box
          className="label-container"
          onClick={() => navigateToCategory("General")}
        >
          <Typography variant="body1">General</Typography>
        </Box>
        <Box
          className="title-container"
          onClick={() => general[0]?.url && handleOpenArticle(general[0].url)}
        >
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
          <Box
            className="label-container"
            onClick={() => navigateToCategory("Sports")}
          >
            <Typography variant="body1">Sports</Typography>
          </Box>
          <Box
            className="title-container"
            onClick={() => sports[0]?.url && handleOpenArticle(sports[0].url)}
          >
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
          <Box
            className="label-container"
            onClick={() => navigateToCategory("Technology")}
          >
            <Typography variant="body1">Technology</Typography>
          </Box>
          <Box
            className="title-container"
            onClick={() =>
              technology[0]?.url && handleOpenArticle(technology[0].url)
            }
          >
            <Typography variant="subtitle2">{technology[0]?.title}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopContainer;
