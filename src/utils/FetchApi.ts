import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// Interface
export interface Articles {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: Articles[];
}

// base
const api = axios.create({
  baseURL: "https://newsapi.org/v2/",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

// ENDPOINT: top-headlines
export const fetchTopHeadlines = async (country: string = "us") => {
  try {
    const response = await api.get(`top-headlines?country=${country}`);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    throw error;
  }
};

// ENDPORT: category
export const fetchTopHeadlinesByCategory = async (
  category: string,
  country: string = "us"
) => {
  try {
    const response = await api.get(
      `top-headlines?country=${country}&category=${category}`
    );
    return response.data.articles;
  } catch (error) {
    console.error(
      `Error fetching top headlines for category ${category}:`,
      error
    );
    throw error;
  }
};
