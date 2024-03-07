import { useEffect, useState } from "react";
import { fetchTopHeadlinesByCategory, Articles } from "./FetchApi";
import { Box, CircularProgress } from "@mui/material";

interface FetchedDataProps {
  children: (data: {
    businessNews: Articles[];
    entertainmentNews: Articles[];
    generalNews: Articles[];
    healthNews: Articles[];
    scienceNews: Articles[];
    sportsNews: Articles[];
    technologyNews: Articles[];
  }) => JSX.Element;
}

const FetchedData = ({ children }: FetchedDataProps) => {
  const [businessNews, setBusinessNews] = useState<Articles[]>([]);
  const [entertainmentNews, setEntertainmentNews] = useState<Articles[]>([]);
  const [generalNews, setGeneralNews] = useState<Articles[]>([]);
  const [healthNews, setHealthNews] = useState<Articles[]>([]);
  const [scienceNews, setScienceNews] = useState<Articles[]>([]);
  const [sportsNews, setSportsNews] = useState<Articles[]>([]);
  const [technologyNews, setTechnologyNews] = useState<Articles[]>([]);
  // loading spinner
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const business = await fetchTopHeadlinesByCategory("business");
        const entertainment = await fetchTopHeadlinesByCategory(
          "entertainment"
        );
        const general = await fetchTopHeadlinesByCategory("general");
        const health = await fetchTopHeadlinesByCategory("health");
        const science = await fetchTopHeadlinesByCategory("science");
        const sports = await fetchTopHeadlinesByCategory("sports");
        const technology = await fetchTopHeadlinesByCategory("technology");

        setBusinessNews(business);
        setEntertainmentNews(entertainment);
        setGeneralNews(general);
        setHealthNews(health);
        setScienceNews(science);
        setSportsNews(sports);
        setTechnologyNews(technology);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return children({
    businessNews,
    entertainmentNews,
    generalNews,
    healthNews,
    scienceNews,
    sportsNews,
    technologyNews,
  });
};

export default FetchedData;
