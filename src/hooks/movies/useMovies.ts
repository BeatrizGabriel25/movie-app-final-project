import { useState } from "react";
import { API_URL, TOKEN } from "../../config";
import type { Movie, Cast, Crew } from "../../types/media";

type Images = {
  backdrops: any[];
  posters: any[];
};

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [moviesDetalhes, setMoviesDetalhes] = useState<Movie | null>(null);
  const [moviesTop, setMoviesTop] = useState<Movie[]>([]);
  const [playing, setPlaying] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  const [cast, setCast] = useState<Cast[]>([]);
  const [crew, setCrew] = useState<Crew[]>([]);
  const [images, setImages] = useState<Images | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [genres, setGenres] = useState<{ id: number; name: string }[]>([]); // NEW

  // 🔥 helper base API
  const fetchFromAPI = async (endpoint: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("API error");

      return await response.json();
    } catch (err) {
      console.error(err);
      setError("Erro ao carregar dados");
      return null;
    } finally {
      setLoading(false);
    }
  };

  // 🎬 MOVIES LIST
  const getMovies = async () => {
    const data = await fetchFromAPI("/movie/popular");
    if (data) setMovies(data.results);
  };

  const getMoviesTopRated = async () => {
    const data = await fetchFromAPI("/movie/top_rated");
    if (data) setMoviesTop(data.results);
  };

  const getMoviesNowPlaying = async () => {
    const data = await fetchFromAPI("/movie/now_playing");
    if (data) setPlaying(data.results);
  };

  const getMoviesUpcoming = async () => {
    const data = await fetchFromAPI("/movie/upcoming");
    if (data) setUpcoming(data.results);
  };

  // 🎬 MOVIE DETAILS (FIX: id STRING)
  const getMoviesDetalhes = async (id: string) => {
    const data = await fetchFromAPI(`/movie/${id}`);
    if (data) setMoviesDetalhes(data);
  };

  // 🎭 CREDITS
  const getMoviesCredits = async (id: string) => {
    const data = await fetchFromAPI(`/movie/${id}/credits`);
    if (!data) return;

    setCast(
      data.cast.map((c: Cast) => ({
        ...c,
        profile_path: c.profile_path ?? null,
      }))
    );

    setCrew(
      data.crew.map((c: Crew) => ({
        ...c,
        profile_path: c.profile_path ?? null,
      }))
    );
  };

  // 🖼 IMAGES
  const getMoviesImages = async (id: string) => {
    const data = await fetchFromAPI(`/movie/${id}/images`);
    if (data) setImages(data);
  };

  // 🎬 GENRES (NEW)
const getGenres = async () => {
  const data = await fetchFromAPI("/genre/movie/list");
  if (data) setGenres(data.genres);
};

// Categorias
const getMoviesByGenre = async (genreId: number | null) => {
  const endpoint = genreId
    ? `/discover/movie?with_genres=${genreId}`
    : `/movie/popular`;

  const data = await fetchFromAPI(endpoint);
  if (data) setMovies(data.results);
};

  return {
    movies,
    moviesDetalhes,
    moviesTop,
    playing,
    upcoming,
    cast,
    crew,
    images,
    genres, //New
    loading,
    error,

    getMovies,
    getMoviesDetalhes,
    getMoviesTopRated,
    getMoviesNowPlaying,
    getMoviesUpcoming,
    getMoviesCredits,
    getMoviesImages,
    getGenres, //New
    getMoviesByGenre, // New
  };
}  