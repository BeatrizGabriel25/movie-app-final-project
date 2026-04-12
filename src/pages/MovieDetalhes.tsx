/*import { useEffect } from "react";
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
      {/* 🎬 BACKDROP *//*}
      <div
        style={{
          position: "relative",
          height: "80vh",
          backgroundImage: `url(https://image.tmdb.org/t/p/original${moviesDetalhes.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay *//*}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
          }}
        />

        {/* botão voltar *//*}
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

        {/* 🎥 POSTER SOBREPOSTO *//*}
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

      {/* 📄 CONTEÚDO *//*}
      <div
        style={{
          padding: "2rem",
          paddingTop: "180px", // 🔥 espaço para o poster
          marginLeft: "80px", // 🔥 espaço ao lado do poster
          maxWidth: "1000px",
        }}
      >


{/* 🎯 INFO CARDS *//*}
<div
  style={{
    display: "flex",
    gap: "15px",
    marginBottom: "1.5rem",
    flexWrap: "wrap",
    /*justifyContent: "space-between",
    alignItems: "center",
  }} 
>
  {/* RATING *//*}
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

  {/* DATA *//*}
  <div
    style={{
      background: "#3c3c40",
      padding: "12px 16px",
      borderRadius: "10px",
     /* boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
      fontSize: "14px",
      fontWeight: "500",
      display: "flex",
    alignItems: "center",
    gap: "6px",
    }}
  >
    {moviesDetalhes.release_date}
  </div>

  {/* DURAÇÃO *//*}
  <div
    style={{
      background: "#3c3c40",
      padding: "12px 16px",
      borderRadius: "10px",
      /*boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
      fontSize: "14px",
      fontWeight: "500",
       display: "flex",
    alignItems: "center",
    gap: "6px",
    }}
  >
    {moviesDetalhes.runtime} min
  </div>

  {/* Favorito *//*}
  <div
  style={{
    /*background: "#3c3c40",
    padding: "12px 18px",
    borderRadius: "10px",
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

{/* TÍTULO *//*}
<h1 style={{ marginBottom: "1rem" }}>
  {moviesDetalhes.title}
</h1>

        {/* TAGLINE *//*}
        <p style={{ opacity: 0.5, marginBottom: "1rem" }}>
          {moviesDetalhes.tagline}
        </p>

        {/* DESCRIÇÃO *//*}
        <p
          style={{
            lineHeight: "1.6",
            marginBottom: "1.5rem",
          }}
        >
          {moviesDetalhes.overview}
        </p>

        {/* GÉNEROS *//*}
        <p style={{ marginBottom: "0.5rem" }}>
          <strong>Category:</strong>{" "}
          {moviesDetalhes.genres?.map((g) => g.name).join(", ")}
        </p>

        {/* LÍNGUAS *//*}
        <p style={{ marginBottom: "0.5rem" }}>
          <strong>Original Language:</strong>{" "}
          {moviesDetalhes.spoken_languages
            ?.map((l) => l.english_name)
            .join(", ")}
        </p>

        {/* PRODUTORAS *//*}
        <p style={{ marginBottom: "1rem" }}>
          <strong>Production:</strong>{" "}
          {moviesDetalhes.production_companies?.map((c) => c.name).join(", ")}
        </p>

        {/* BOTÃO *//*}
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

      {/* 🎭 CAST *//*}
      <Credits dados={cast} type="movie" titulo="Cast" />

      {/* 🛠 CREW *//*}
      <Credits dados={crew} type="movie" titulo="Crew" variant="crew"/>
    </div>
  );
};

export default MovieDetails; */

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMovies } from "../hooks/movies/useMovies";
import Credits from "../components/Credits";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [showMore, setShowMore] = useState(false); // New

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
        fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
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
            background: "rgba(60, 60, 64, 0.2)",
            border: "none",
            color: "white",
            padding: "5px 10px",
            borderRadius: "8px",
            cursor: "pointer",
            zIndex: 2,
            fontSize: "20px",
            alignItems: "center",
      justifyContent: "center",
          }}
        >
          ⬅
        </button>

         {/* 🔗 LINK BUTTON (top right) */}
{/* 🔗 SHARE / LINK BUTTON (decorativo) */}
<button
  style={{
    position: "absolute",
    top: "20px",
    right: "20px",
    background: "rgba(60, 60, 64, 0.2)",
    border: "none",
    color: "white",
    padding: "10px",
    borderRadius: "10px",
    cursor: "default",
    zIndex: 2,
    backdropFilter: "blur(6px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {/* ícone share (3 nós ligados) */}
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
</button>

{/* ▶️ PLAY BUTTON (center overlay) */}
{/* ▶️ PLAY BUTTON (center overlay) */}
<div
  style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <button
    style={{
      width: "55px",
      height: "55px",
      borderRadius: "50%",
      background: "rgba(229, 9, 20, 0.9)", // vermelho Netflix
      border: "1px solid rgba(255,255,255,0.2)",
      cursor: "default",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
    }}
  >
    {/* ícone play */}
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="white"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  </button>
</div>

        {/* poster */}
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

{/*LANÇAMENTO*/}
<div
  style={{
    position: "absolute",
    bottom: "10px",
    right: "110px",
    display: "flex",
    gap: "10px",
    zIndex: 2,
    fontSize: "12px",
  }}
>

      {/* 📺 SEASONS */}
  <div
    style={{
      background: "rgba(60, 60, 64, 0.2)",
      backdropFilter: "blur(6px)",
      padding: "10px 12px",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",
      fontWeight: "bold",
    }}
  >
    Min {moviesDetalhes.runtime}
  </div>
  {/* 🎞 DATA DE LANÇAMENTO */}
  <div
    style={{
      background: "rgba(60, 60, 64, 0.2)",
      backdropFilter: "blur(6px)",
      padding: "10px 12px",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",
      fontWeight: "bold",
    }}
  >
     {moviesDetalhes.release_date}
  </div>
</div>

      </div>


      {/* 📄 CONTEÚDO */}
      <div
        style={{
          padding: "2rem",
          paddingTop: "180px",
          marginLeft: "80px",
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
  }}
>

             {/* IDADE */}
<div
  style={{
    background: "#3c3c40",
    padding: "12px 16px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    fontWeight: "bold",
    fontSize: "12px",
  }}
>
  <span>+</span>
  {(() => {
    const rating = moviesDetalhes.content_rating;

    if (!rating) return "N/A";

    if (rating.includes("MA")) return "18";
    if (rating.includes("17")) return "17";
    if (rating.includes("14")) return "14";
    if (rating.includes("13")) return "13";
    if (rating.includes("PG")) return "10";

    return rating.replace(/\D/g, "") || "N/A";
  })()}
</div>

  {/* CATEGORY */}
  <div
    style={{
    background: "#3c3c40",
    padding: "12px 16px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    fontWeight: "bold",
    fontSize: "12px",
    }}
  >
    {moviesDetalhes.genres?.map((g) => g.name).join(", ") || "N/A"}
  </div>

  {/* RATING */}
  <div
    style={{
    background: "#3c3c40",
    padding: "12px 16px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    fontWeight: "bold",
    fontSize: "12px",
    }}
  >
    <span style={{ color: "gold", fontSize: "18px", lineHeight: 1, display: "flex", alignItems: "center" }}>★</span>
    {(moviesDetalhes.vote_average / 2).toFixed(1)}
  </div>

  

  {/* FAVORITE */}
  <div
    style={{
      padding: "12px 18px",
      borderRadius: "10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
    }}
  >
    <span style={{ fontSize: "28px", color: "red" }}>❤</span>
  </div>
</div>

        {/* TITLE */}
        <h1 style={{ marginBottom: "1rem" }}>
          {moviesDetalhes.title}
        </h1>

        {/* TAGLINE */}
        <p style={{ opacity: 0.5, marginBottom: "1rem" }}>
          {moviesDetalhes.tagline}
        </p>

        {/* OVERVIEW *//*}
        <p style={{ lineHeight: "1.6", marginBottom: "1.5rem" }}>
          {moviesDetalhes.overview}
        </p>

        {/* LANGUAGES *//*}
        <p style={{ marginBottom: "0.5rem" }}>
          <strong>Original Language:</strong>{" "}
          {moviesDetalhes.spoken_languages
            ?.map((l) => l.english_name)
            .join(", ")}
        </p>

        {/* PRODUCERS *//*}
        <p style={{ marginBottom: "1rem" }}>
          <strong>Production:</strong>{" "}
          {moviesDetalhes.production_companies
            ?.map((c) => c.name)
            .join(", ")}
        </p>

        {/* 📖 DESCRIÇÃO + INFO EXPANDÍVEL NOVO CONTEÚDO!! */}
<div style={{ marginBottom: "1.5rem" }}>
  {/* DESCRIÇÃO */}
  <p
    style={{
      lineHeight: "1.6",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: showMore ? "unset" : 2,
      overflow: "hidden",
      fontSize: "14px",
      textAlign: "justify",
      maxWidth: "2200px"
    }}
  >
    {moviesDetalhes.overview}
  </p>

  {/* CONTEÚDO EXTRA (só aparece quando expandido) */}
  {showMore && (
    <div style={{ marginTop: "10px" }}>


      {/* LÍNGUAS */}
      <p style={{ marginBottom: "0.5rem", fontSize: "14px", }}>
        <strong>Original Language:</strong>{" "}
        {moviesDetalhes.spoken_languages
          ?.map((l) => l.english_name)
          .join(", ")}
      </p>

      {/* PRODUTORAS */}
      <p style={{ marginBottom: "1rem", fontSize: "14px", }}>
        <strong>Production:</strong>{" "}
        {moviesDetalhes.production_companies
          ?.map((c) => c.name)
          .join(", ")}
      </p>
    </div>
  )}

  {/* BOTÃO TOGGLE */}
  <button
    onClick={() => setShowMore(!showMore)}
    style={{
      marginTop: "8px",
      background: "none",
      border: "none",
      color: "red",
      fontWeight: "bold",
      cursor: "pointer",
      padding: 0,
      fontSize: "14px",
    }}
  >
    {showMore ? "Show Less" : "Show More"}
  </button>
</div>

        {/* BUTTON */}
        {moviesDetalhes.homepage && (
          <a
            href={moviesDetalhes.homepage}
            target="_blank"
            rel="noreferrer"
            style={{
               display: "inline-block",
              background: "gold",
              padding: "15px 60px",
              borderRadius: "6px",
              color: "white",
              textDecoration: "none",
              marginBottom: "2rem",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Open IMDb
          </a>
        )}
      </div>

      {/* CAST */}
      <Credits dados={cast} type="movie" titulo="Cast" />

      {/* CREW */}
      <Credits dados={crew} type="movie" titulo="Crew" variant="crew" />
    </div>
  );
};

export default MovieDetails;

