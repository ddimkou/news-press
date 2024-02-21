import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

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
