// src/services/movieService.ts
import axios from "axios";
import type { Movie } from "../types/movie";

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export  interface MoviesResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}

export const fetchMovies = async (
  query: string,
  page = 1
): Promise<MoviesResponse> => {
  const response = await axios.get<MoviesResponse>(BASE_URL, {
    params: {
      query,
      page,
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`, // Используем Bearer токен
    },
  });

  return response.data;
};