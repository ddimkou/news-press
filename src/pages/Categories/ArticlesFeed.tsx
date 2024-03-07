import React from "react";
import { Box, Typography } from "@mui/material";
import { Articles } from "../../utils/FetchApi";

interface ArticlesFeedProps {
  articles: Articles[];
}

const ArticlesFeed = ({ articles }: ArticlesFeedProps) => {
  return (
    <Box>
      {articles.map((article, index) => (
        <Box key={index} m={2}>
          <Typography variant="h6">{article.title}</Typography>
          <Typography variant="body1">{article.description}</Typography>
          {/* You can add more article details here */}
        </Box>
      ))}
    </Box>
  );
};

export default ArticlesFeed;
