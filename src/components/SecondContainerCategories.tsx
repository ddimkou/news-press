import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const categories = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

const SecondContainerCategories = () => {
  // Navigate
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/articles/${category.toLowerCase()}`);
  };
  return (
    <Box
      className="card-container category-container"
      height="22em"
      display="flex"
      justifyContent="center"
      sx={{
        width: { xs: "18em" },
      }}
    >
      <Stack direction="column" spacing={1.5}>
        {categories.map((category) => (
          <Box
            className="category-box"
            onClick={() => handleCategoryClick(category)}
          >
            <Typography variant="body1">{category}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default SecondContainerCategories;
