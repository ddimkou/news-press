import { useEffect, useState } from "react";
import { fetchTopHeadlinesByCategory, Articles } from "./FetchApi";

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

  useEffect(() => {
    const fetchNews = async () => {
      const business = await fetchTopHeadlinesByCategory("business");
      const entertainment = await fetchTopHeadlinesByCategory("entertainment");
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
    };
    fetchNews();
  }, []);

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
