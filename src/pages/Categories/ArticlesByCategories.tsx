import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTopHeadlinesByCategory, Articles } from "../../utils/FetchApi";
import { Box, Typography, CircularProgress } from "@mui/material";
import ArticlesFeed from "./ArticlesFeed";
import SecondContainerCategories from "../../components/SecondContainerCategories";

import ThirdContainerSocial from "../../components/ThirdContainerSocial";

const ArticlesByCategories = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState<Articles[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (category) {
      setIsLoading(true);
      fetchTopHeadlinesByCategory(category)
        .then((articles) => {
          setArticles(articles);
          setIsLoading(false);
        })
        .catch(console.error);
    }
  }, [category]);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Box mt={2}>
      <Typography variant="h4" textAlign="center">
        {category} News
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="start"
        mt={4}
        gap={1}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <ArticlesFeed articles={articles} />
        <Box>
          <SecondContainerCategories />
          <Box mt={2}>
            <ThirdContainerSocial />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ArticlesByCategories;
