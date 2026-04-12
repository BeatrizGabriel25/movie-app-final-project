import { useEffect, useState } from "react";
import { useMovies } from "../hooks/movies/useMovies";
import Card from "../components/Card";
import TopRated from "../components/TopRated";
import NowPlaying from "../components/NowPlaying";
import CategoryFilter from "../components/CategoryFilter";
import { movieCategories } from "../types/media";

const Movies = () => {
  const {
    movies,
    getMovies,
    getMoviesByGenre, // NEW
    moviesTop,
    getMoviesTopRated,
    getMoviesNowPlaying,
    playing,
    upcoming,
    getMoviesUpcoming,
    loading,
    error,
  } = useMovies();

  
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  useEffect(() => {
    getMovies();
    getMoviesTopRated();
    getMoviesNowPlaying();
    getMoviesUpcoming();
  }, []);


  useEffect(() => {
    getMoviesByGenre(selectedGenre);
  }, [selectedGenre]);

  return (
    <div
      style={{
        background: "#1c1c25",
        minHeight: "100vh",
        color: "white",
        fontFamily:
          "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* TOP RATED */}
      <TopRated tops={moviesTop} type="movie" title="" />

      {/* NOW PLAYING */}
      <NowPlaying movies={playing} />

      {/* HEADER */}
      <div style={{ padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "5px" }}>
          Popular Movies
        </h1>
        <p style={{ opacity: 0.7 }}>
          Discover the movies everyone is watching right now.
        </p>
      </div>

      {/* BOTÕES DE CATEGORIA */}
      <CategoryFilter
        categories={movieCategories}
        selected={selectedGenre}
        onSelect={setSelectedGenre}
      />

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "25px",
          padding: "2rem",
          justifyItems: "center",
        }}
      >
        {movies.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            poster={movie.poster_path}
            type="movie"
          />
        ))}
      </div>

      {/* LOADING */}
      {loading && (
        <p style={{ textAlign: "center", padding: "2rem", opacity: 0.6 }}>
          Loading movies...
        </p>
      )}

      {/* ERROR */}
      {error && (
        <p style={{ textAlign: "center", color: "red" }}>{error}</p>
      )}

      {/* UPCOMING */}
      <NowPlaying movies={upcoming} title="Upcoming" />
    </div>
  );
};

export default Movies;