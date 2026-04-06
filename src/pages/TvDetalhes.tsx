/*import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTv } from "../hooks/tv/useTv";
import Credits from "../components/Credits";

const TvDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    getTvDetalhes,
    tvDetalhes,
    getTvCredits,
    cast,
    crew,
  } = useTv();

  useEffect(() => {
    if (!id) return;

    getTvDetalhes(id);
    getTvCredits(id);
  }, [id]);

  if (!tvDetalhes) {
    return (
      <p style={{ color: "white", padding: "2rem" }}>
        Loading...
      </p>
    );
  }

  return (
    <div
      style={{
        background: "#0f0f0f",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* 🎬 BACKDROP *//*}
      <div
        style={{
          position: "relative",
          height: "60vh",
          backgroundImage: `url(https://image.tmdb.org/t/p/original${tvDetalhes.backdrop_path})`,
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

        <button
          onClick={() => navigate(-1)}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            background: "rgba(0,0,0,0.7)",
            border: "none",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ⬅ Voltar
        </button>
      </div>

      {/* 📄 INFO *//*}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          padding: "2rem",
          marginTop: "-100px",
          alignItems: "flex-start",
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${tvDetalhes.poster_path}`}
          alt={tvDetalhes.name}
          style={{
            width: "220px",
            borderRadius: "10px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
          }}
        />

        <div style={{ maxWidth: "800px" }}>
          <h1>{tvDetalhes.name}</h1>

          <p style={{ opacity: 0.7 }}>
            {tvDetalhes.tagline}
          </p>

          <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
            {tvDetalhes.overview}
          </p>

          <div style={{ marginTop: "1rem", display: "flex", gap: "15px" }}>
            <span>⭐ {tvDetalhes.vote_average}</span>
            <span>📅 {tvDetalhes.first_air_date}</span>
            <span>⏱ {tvDetalhes.episode_run_time?.[0]} min</span>
          </div>

          <p style={{ marginTop: "1rem" }}>
            <strong>🎭 Genres:</strong>{" "}
            {tvDetalhes.genres?.map((g) => g.name).join(", ")}
          </p>

          <p>
            <strong>📺 Seasons:</strong>{" "}
            {tvDetalhes.number_of_seasons}
          </p>

          <p>
            <strong>🎞 Episodes:</strong>{" "}
            {tvDetalhes.number_of_episodes}
          </p>

          <p>
            <strong>🌍 Línguas:</strong>{" "}
            {tvDetalhes.spoken_languages
              ?.map((l) => l.english_name)
              .join(", ")}
          </p>

          <p>
            <strong>🏢 Produtoras:</strong>{" "}
            {tvDetalhes.production_companies
              ?.map((c) => c.name)
              .join(", ")}
          </p>

          {tvDetalhes.homepage && (
            <a
              href={tvDetalhes.homepage}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: "15px",
                background: "#e50914",
                padding: "10px 15px",
                borderRadius: "6px",
                color: "white",
                textDecoration: "none",
              }}
            >
              🔗 Site oficial
            </a>
          )}
        </div>
      </div>

   {/* 🎭 CAST *//*}
      <Credits dados={cast} type="tv" titulo="🎭 Cast" />

      {/* 🛠 CREW *//*}
      <Credits dados={crew} type="tv" titulo="🛠 Crew" />
    </div>
  );
};

export default TvDetails; */

import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTv } from "../hooks/tv/useTv";
import Credits from "../components/Credits";

const TvDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    getTvDetalhes,
    tvDetalhes,
    getTvCredits,
    cast,
    crew,
  } = useTv();

  useEffect(() => {
    if (!id) return;

    getTvDetalhes(id);
    getTvCredits(id);
  }, [id]);

  if (!tvDetalhes) {
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
          backgroundImage: `url(https://image.tmdb.org/t/p/original${tvDetalhes.backdrop_path})`,
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
          src={`https://image.tmdb.org/t/p/w500${tvDetalhes.poster_path}`}
          alt={tvDetalhes.name}
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
          {/* ⭐ RATING */}
          <div
            style={{
              background: "#3c3c40",
              padding: "12px 16px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span style={{ color: "gold", fontSize: "18px" }}>★</span>
            {(tvDetalhes.vote_average / 2).toFixed(1)}
          </div>

          {/* 📅 DATA */}
          <div
            style={{
              background: "#3c3c40",
              padding: "12px 16px",
              borderRadius: "10px",
            }}
          >
            {tvDetalhes.first_air_date}
          </div>

          {/* ⏱ DURAÇÃO */}
          <div
            style={{
              background: "#3c3c40",
              padding: "12px 16px",
              borderRadius: "10px",
            }}
          >
            {tvDetalhes.episode_run_time?.[0] || "?"} min
          </div>

          {/* ❤️ FAVORITO */}
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "28px", color: "red" }}>❤</span>
          </div>
        </div>

        {/* TÍTULO */}
        <h1 style={{ marginBottom: "1rem" }}>
          {tvDetalhes.name}
        </h1>

        {/* TAGLINE */}
        <p style={{ opacity: 0.5, marginBottom: "1rem" }}>
          {tvDetalhes.tagline}
        </p>

        {/* DESCRIÇÃO */}
        <p style={{ lineHeight: "1.6", marginBottom: "1.5rem" }}>
          {tvDetalhes.overview}
        </p>

        {/* GÉNEROS */}
        <p style={{ marginBottom: "0.5rem" }}>
          <strong>Category:</strong>{" "}
          {tvDetalhes.genres?.map((g) => g.name).join(", ")}
        </p>

        {/* 📺 SEASONS */}
        <p>
          <strong>Seasons:</strong> {tvDetalhes.number_of_seasons}
        </p>

        {/* 🎞 EPISODES */}
        <p>
          <strong>Episodes:</strong> {tvDetalhes.number_of_episodes}
        </p>

        {/* LÍNGUAS */}
        <p style={{ marginBottom: "0.5rem" }}>
          <strong>Original Language:</strong>{" "}
          {tvDetalhes.spoken_languages
            ?.map((l) => l.english_name)
            .join(", ")}
        </p>

        {/* PRODUTORAS */}
        <p style={{ marginBottom: "1rem" }}>
          <strong>Production:</strong>{" "}
          {tvDetalhes.production_companies
            ?.map((c) => c.name)
            .join(", ")}
        </p>

        {/* BOTÃO */}
        {tvDetalhes.homepage && (
          <a
            href={tvDetalhes.homepage}
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
      <Credits dados={cast} type="tv" titulo="Cast" />

      {/* 🛠 CREW */}
      <Credits dados={crew} type="tv" titulo="Crew" variant="crew" />
    </div>
  );
};

export default TvDetails;