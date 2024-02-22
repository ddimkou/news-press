import { useEffect, useState } from "react";

import { Container } from "@mui/material";

import SecondContainer from "../../components/SecondContainer";
import TopContainer from "../../components/TopContainer";
import ThirdContainer from "../../components/ThirdContainer";
import { fetchTopHeadlines } from "../../FetchApi";

export interface Articles {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
export interface FetchHeadlinesProps {
  status: string;
  totalResults: number;
  articles: Articles[];
}

const HomePage = () => {
  const [topHeadlines, setTopHeadlines] = useState<Articles[]>([]);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const headlines = await fetchTopHeadlines();
        setTopHeadlines(headlines);
      } catch (error) {
        console.error("Failed to fetch the data", error);
      }
    };
    fetchHeadlines();
  }, []);

  return (
    <Container>
      <TopContainer topHeadlines={topHeadlines} />
      <SecondContainer />
      <ThirdContainer />
    </Container>
  );
};

export default HomePage;
