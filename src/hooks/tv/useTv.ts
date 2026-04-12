/*import { useState } from "react";
import { API_URL, TOKEN } from "../../config";
import type { Tv, Cast, Crew } from "../../types/media";

export function useTv() {
  const [tv, setTv] = useState<Tv[]>([]);
  const [tvDetalhes, setTvDetalhes] = useState<Tv | null>(null);
  const [tvTop, setTvTop] = useState<Tv[]>([]);

  const [airingToday, setAiringToday] = useState<Tv[]>([]);
  const [onAir, setOnAir] = useState<Tv[]>([]);

  const [cast, setCast] = useState<Cast[]>([]);
  const [crew, setCrew] = useState<Crew[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 🔥 BASE FETCH
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

  // 📺 TV LISTS
  const getTv = async () => {
    const data = await fetchFromAPI("/tv/popular");
    if (data) setTv(data.results);
  };

  const getTvTopRated = async () => {
    const data = await fetchFromAPI("/tv/top_rated");
    if (data) setTvTop(data.results);
  };

  const getTvNowAiring = async () => {
    const data = await fetchFromAPI("/tv/airing_today");
    if (data) setAiringToday(data.results);
  };

  const getTvOnAir = async () => {
    const data = await fetchFromAPI("/tv/on_the_air");
    if (data) setOnAir(data.results);
  };

  // 📺 TV DETAILS (FIX: string ID)
  const getTvDetalhes = async (id: string) => {
    const data = await fetchFromAPI(`/tv/${id}`);
    if (data) setTvDetalhes(data);
  };


   // TV Idade Novo
const getTvRating = async (id: string) => {
  const data = await fetchFromAPI(`/tv/${id}/content_ratings`);
  if (!data) return;

  // tenta Portugal → depois US → fallback null
  const pt = data.results.find((r: any) => r.iso_3166_1 === "PT");
  const us = data.results.find((r: any) => r.iso_3166_1 === "US");

  const rating = pt?.rating || us?.rating || null;

  setTvDetalhes((prev) => {
    if (!prev) return prev;
    return {
      ...prev,
      content_rating: rating,
    };
  });
};



  // 🎭 CREDITS
  const getTvCredits = async (id: string) => {
    const data = await fetchFromAPI(`/tv/${id}/credits`);
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

  return {
    tv,
    tvDetalhes,
    tvTop,
    airingToday,
    onAir,
    cast,
    crew,
    loading,
    error,

    getTv,
    getTvDetalhes,
    getTvTopRated,
    getTvNowAiring,
    getTvOnAir,
    getTvCredits,
    getTvRating, // Novo Idade
  };
} */

import { useState } from "react";
import { API_URL, TOKEN } from "../../config";
import type { Tv, Cast, Crew } from "../../types/media";

export function useTv() {
  const [tv, setTv] = useState<Tv[]>([]);
  const [tvDetalhes, setTvDetalhes] = useState<Tv | null>(null);
  const [tvTop, setTvTop] = useState<Tv[]>([]);
  const [airingToday, setAiringToday] = useState<Tv[]>([]);
  const [onAir, setOnAir] = useState<Tv[]>([]);

  const [cast, setCast] = useState<Cast[]>([]);
  const [crew, setCrew] = useState<Crew[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 🔥 BASE FETCH
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

  // 📺 TV LISTS
  const getTv = async () => {
    const data = await fetchFromAPI("/tv/popular");
    if (data) setTv(data.results);
  };

  const getTvTopRated = async () => {
    const data = await fetchFromAPI("/tv/top_rated");
    if (data) setTvTop(data.results);
  };

  const getTvNowAiring = async () => {
    const data = await fetchFromAPI("/tv/airing_today");
    if (data) setAiringToday(data.results);
  };

  const getTvOnAir = async () => {
    const data = await fetchFromAPI("/tv/on_the_air");
    if (data) setOnAir(data.results);
  };

  // 📺 TV DETAILS
  const getTvDetalhes = async (id: string) => {
    const data = await fetchFromAPI(`/tv/${id}`);
    if (data) setTvDetalhes(data);
  };

  // ⭐ RATING / CONTENT RATING
  const getTvRating = async (id: string) => {
    const data = await fetchFromAPI(`/tv/${id}/content_ratings`);
    if (!data) return;

    const pt = data.results.find((r: any) => r.iso_3166_1 === "PT");
    const us = data.results.find((r: any) => r.iso_3166_1 === "US");

    const rating = pt?.rating || us?.rating || null;

    setTvDetalhes((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        content_rating: rating,
      };
    });
  };

  // 🎭 CREDITS
  const getTvCredits = async (id: string) => {
    const data = await fetchFromAPI(`/tv/${id}/credits`);
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

  // Categorias
  const getTvByGenre = async (genreId: number | null) => {
  const endpoint = genreId
    ? `/discover/tv?with_genres=${genreId}`
    : `/tv/popular`;

  const data = await fetchFromAPI(endpoint);
  if (data) setTv(data.results);
};

  return {
    tv,
    tvDetalhes,
    tvTop,
    airingToday,
    onAir,
    cast,
    crew,
    loading,
    error,

    getTv,
    getTvTopRated,
    getTvNowAiring,
    getTvOnAir,
    getTvDetalhes,
    getTvCredits,
    getTvRating,

    // 🔥 NOVO EXPORT
    getTvByGenre,
  };
}