import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTopHeadlinesByCategory, Articles } from "../../utils/FetchApi";
import { Box, Typography, CircularProgress } from "@mui/material";

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
    <Box>
      <Typography variant="h4">{category} News</Typography>
      {articles.map((article, index) => (
        <Box key={index} m={2}>
          <Typography variant="h6">{article.title}</Typography>
          <Typography variant="body1">{article.description}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ArticlesByCategories;
