import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMovies } from "../hooks/movies/useMovies";
import Credits from "../components/Credits";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { getMoviesDetalhes, moviesDetalhes, getMoviesCredits, cast, crew } =
    useMovies();

  useEffect(() => {
    if (!id) return;

    getMoviesDetalhes(id);
    getMoviesCredits(id);
  }, [id]);

  if (!moviesDetalhes) {
    return <p style={{ color: "white", padding: "2rem" }}>Loading...</p>;
  }


  return (
    <div
      style={{
        background: "#1c1c25",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* 🎬 BACKDROP */}
      <div
        style={{
          position: "relative",
          height: "80vh",
          backgroundImage: `url(https://image.tmdb.org/t/p/original${moviesDetalhes.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
          }}
        />

        {/* botão voltar */}
        <button
          onClick={() => navigate(-1)}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            background: "#3c3c40",
            border: "none",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          ⬅
        </button>

        {/* 🎥 POSTER SOBREPOSTO */}
        <img
          src={`https://image.tmdb.org/t/p/w500${moviesDetalhes.poster_path}`}
          alt={moviesDetalhes.title}
          style={{
            position: "absolute",
            bottom: "-130px",
            left: "110px",
            width: "260px",
            borderRadius: "12px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
            zIndex: 2,
          }}
        />
      </div>

      {/* 📄 CONTEÚDO */}
      <div
        style={{
          padding: "2rem",
          paddingTop: "180px", // 🔥 espaço para o poster
          marginLeft: "80px", // 🔥 espaço ao lado do poster
          maxWidth: "1000px",
        }}
      >


{/* 🎯 INFO CARDS */}
<div
  style={{
    display: "flex",
    gap: "15px",
    marginBottom: "1.5rem",
    flexWrap: "wrap",
    /*justifyContent: "space-between",
    alignItems: "center",*/
  }}
>
  {/* RATING */}
  <div
  style={{
    background: "#3c3c40",
    padding: "12px 16px",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  }}
>
  <span style={{ color: "gold", fontSize: "18px", lineHeight: 1, display: "flex", alignItems: "center"  }}>★</span>
  {(moviesDetalhes.vote_average / 2).toFixed(1)}
</div>

  {/* DATA */}
  <div
    style={{
      background: "#3c3c40",
      padding: "12px 16px",
      borderRadius: "10px",
     /* boxShadow: "0 8px 20px rgba(0,0,0,0.5)",*/
      fontSize: "14px",
      fontWeight: "500",
      display: "flex",
    alignItems: "center",
    gap: "6px",
    }}
  >
    {moviesDetalhes.release_date}
  </div>

  {/* DURAÇÃO */}
  <div
    style={{
      background: "#3c3c40",
      padding: "12px 16px",
      borderRadius: "10px",
      /*boxShadow: "0 8px 20px rgba(0,0,0,0.5)",*/
      fontSize: "14px",
      fontWeight: "500",
       display: "flex",
    alignItems: "center",
    gap: "6px",
    }}
  >
    {moviesDetalhes.runtime} min
  </div>

  {/* Favorito */}
  <div
  style={{
    /*background: "#3c3c40",
    padding: "12px 18px",
    borderRadius: "10px",*/
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "0.2s",
  }}
>
  <span style={{ fontSize: "28px", color: "red" }}>❤</span>
</div>

</div>

{/* TÍTULO */}
<h1 style={{ marginBottom: "1rem" }}>
  {moviesDetalhes.title}
</h1>

        {/* TAGLINE */}
        <p style={{ opacity: 0.5, marginBottom: "1rem" }}>
          {moviesDetalhes.tagline}
        </p>

        {/* DESCRIÇÃO */}
        <p
          style={{
            lineHeight: "1.6",
            marginBottom: "1.5rem",
          }}
        >
          {moviesDetalhes.overview}
        </p>

        {/* GÉNEROS */}
        <p style={{ marginBottom: "0.5rem" }}>
          <strong>Category:</strong>{" "}
          {moviesDetalhes.genres?.map((g) => g.name).join(", ")}
        </p>

        {/* LÍNGUAS */}
        <p style={{ marginBottom: "0.5rem" }}>
          <strong>Original Language:</strong>{" "}
          {moviesDetalhes.spoken_languages
            ?.map((l) => l.english_name)
            .join(", ")}
        </p>

        {/* PRODUTORAS */}
        <p style={{ marginBottom: "1rem" }}>
          <strong>Production:</strong>{" "}
          {moviesDetalhes.production_companies?.map((c) => c.name).join(", ")}
        </p>

        {/* BOTÃO */}
        {moviesDetalhes.homepage && (
          <a
            href={moviesDetalhes.homepage}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              background: "gold",
              padding: "10px 20px",
              borderRadius: "6px",
              color: "white",
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            Open IMDb
          </a>
        )}
      </div>

      {/* 🎭 CAST */}
      <Credits dados={cast} type="movie" titulo="Cast" />

      {/* 🛠 CREW */}
      <Credits dados={crew} type="movie" titulo="Crew" variant="crew"/>
    </div>
  );
};

export default MovieDetails;
