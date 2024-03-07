import { Box, Typography, Grid } from "@mui/material";
import { Articles } from "../../utils/FetchApi";

interface ArticlesFeedProps {
  articles: Articles[];
}

const ArticlesFeed = ({ articles }: ArticlesFeedProps) => {
  return (
    <Grid container spacing={2}>
      {articles.map((article, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={article.urlToImage || "/NoImgFound.png"}
              alt={article.title}
              style={{ width: "100%", height: "auto", maxWidth: "200px" }}
            />
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
