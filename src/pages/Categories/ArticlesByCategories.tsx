import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTopHeadlinesByCategory, Articles } from "../../utils/FetchApi";
import { Box, Typography } from "@mui/material";

const ArticlesByCategories = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    if (category) {
      fetchTopHeadlinesByCategory(category)
        .then(setArticles)
        .catch(console.error);
    }
  }, [category]);

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
