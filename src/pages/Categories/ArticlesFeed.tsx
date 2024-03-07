import { Box, Typography, Grid } from "@mui/material";
import { Articles } from "../../utils/FetchApi";

interface ArticlesFeedProps {
  articles: Articles[];
}

const ArticlesFeed = ({ articles }: ArticlesFeedProps) => {
  // open article url
  const handleOpenArticle = (articleUrl: string) => {
    window.open(articleUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <Grid container spacing={2}>
      {articles.map((article, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Box
            onClick={() => handleOpenArticle(article.url)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "200px",
                height: "150px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={article.urlToImage || "/NoImgFound.png"}
                alt={article.title}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
            </Box>
            <Typography variant="subtitle2" sx={{ mt: 1, textAlign: "center" }}>
              {article.title}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticlesFeed;
