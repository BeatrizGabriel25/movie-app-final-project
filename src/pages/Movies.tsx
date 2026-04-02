/*export default function Movies() {
  return <h1>Home</h1>;
}*//*import { useEffect } from "react";
import { useMovies } from "../hooks/movies/useMovies";

import Card from "../components/Card";
import Navbar from "../components/Navbar";
import TopRated from "../components/TopRated";

const Movies = () => {
  const {
    movies,
    getMovies,
    moviesTop,
    getMoviesTopRated,
    getMoviesNowPlaying,
    playing,
    upcoming,
    getMoviesUpcoming,
  } = useMovies();

  useEffect(() => {
    getMovies();
    getMoviesTopRated();
    getMoviesNowPlaying();
    getMoviesUpcoming();
  }, []);

  return (
    <>
      <Navbar />

      <div style={{ background: "#0f0f0f", minHeight: "100vh", color: "white" }}>
        <TopRated tops={moviesTop} type="movie" title="⭐ Top Rated" />
        <TopRated tops={playing} type="movie" title="Now Playing" />

        {/* HEADER *//*}
        <div style={{ padding: "2rem" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "5px" }}>
            🎬 Popular Movies
          </h1>
          <p style={{ opacity: 0.7 }}>
            Descobre os filmes mais populares do momento
          </p>
        </div>

        {/* GRID *//*}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "25px",
            padding: "2rem",
            justifyItems: "center",
          }}
        >
          {movies?.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              name={movie.title}
              rating={movie.vote_average}
              poster={movie.poster_path}
              type="movie"
            />
          ))}
        </div>

        {!movies?.length && (
          <p style={{ textAlign: "center", padding: "2rem", opacity: 0.6 }}>
            Loading movies...
          </p>
        )}

        <TopRated tops={upcoming} type="movie" title="Upcoming" />
      </div>
    </>
  );
};

export default Movies; */

/*import { useEffect } from "react";
import { useMovies } from "../hooks/movies/useMovies";
import Card from "../components/Card";

const Movies = () => {
  const {
    moviesTop,
    upcoming,
    getMoviesTopRated,
    getMoviesUpcoming,
    loading,
    error,
  } = useMovies();

  useEffect(() => {
    getMoviesTopRated();
    getMoviesUpcoming();
  }, []);

  const carouselStyle = {
    display: "flex",
    gap: "16px",
    overflowX: "auto" as const,
    overflowY: "hidden" as const,
    padding: "20px 10px",
  };

  const itemStyle = {
    minWidth: "220px",
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* 🎬 TOP RATED *//*}
      <h1>Top Rated Movies</h1>

      {loading && <p>A carregar...</p>}
      {error && <p>{error}</p>}

      <div style={carouselStyle}>
        {moviesTop.map((movie) => (
          <div key={movie.id} style={itemStyle}>
            <Card
              id={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              poster={movie.poster_path}
              date={movie.release_date}
              type="movie"
            />
          </div>
        ))}
      </div>

      {/* 🎬 UPCOMING *//*}
      <h1 style={{ marginTop: "40px" }}>Upcoming Movies</h1>

      <div style={carouselStyle}>
        {upcoming.map((movie) => (
          <div key={movie.id} style={itemStyle}>
            <Card
              id={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              poster={movie.poster_path}
              date={movie.release_date}
              type="movie"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies; */

import { useEffect } from "react";
import { useMovies } from "../hooks/movies/useMovies";
import Card from "../components/Card";
import TopRated from "../components/TopRated";
import NowPlaying from "../components/NowPlaying";

const Movies = () => {
  const {
    movies,
    getMovies,
    moviesTop,
    getMoviesTopRated,
    getMoviesNowPlaying,
    playing,
    upcoming,
    getMoviesUpcoming,
    loading,
    error,
    getGenres, // New
  } = useMovies();

  useEffect(() => {
    getMovies();
    getMoviesTopRated();
    getMoviesNowPlaying();
    getMoviesUpcoming();
    getGenres(); // New
  }, []);

  return (
    <div
      style={{
        background: "#1c1c25",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* ⭐ TOP RATED */}
      <TopRated tops={moviesTop} type="movie" title=" Top Rated" />

      {/* 🔥 NOW PLAYING *//*}
      <TopRated tops={playing} type="movie" title="🔥 Now Playing" />
      {/* 🔥 NOW PLAYING */}
      <NowPlaying movies={playing} />

      {/* 🎬 POPULAR HEADER */}
      <div style={{ padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "5px" }}>
          🎬 Popular Movies
        </h1>
        <p style={{ opacity: 0.7 }}>
          Descobre os filmes mais populares do momento
        </p>
      </div>

      {/* 🎥 GRID */}
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
            /*date={movie.release_date}*/
            type="movie"
          />
        ))}
      </div>

      {/* ⏳ LOADING */}
      {loading && (
        <p style={{ textAlign: "center", padding: "2rem", opacity: 0.6 }}>
          Loading movies...
        </p>
      )}

      {/* ❌ ERROR */}
      {error && (
        <p style={{ textAlign: "center", color: "red" }}>{error}</p>
      )}

      {/* 🎬 UPCOMING */}
      <NowPlaying movies={upcoming} title="Upcoming" />
    </div>
  );
};

export default Movies;