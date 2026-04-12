import { Link } from "react-router-dom";
import type { Movie, Tv } from "../types/media";

type TopRatedCardProps = {
  item: Movie | Tv;
  type: "movie" | "tv";
};

const TopRatedCard = ({ item, type }: TopRatedCardProps) => {
  const title = "title" in item ? item.title : item.name;

    const date =
    "release_date" in item
      ? item.release_date
      : item.first_air_date;

  const year = date ? new Date(date).getFullYear() : "";

  // ⭐ rating em formato 4.7
  //const rating = item.vote_average.toFixed(1);

  // 🎬 géneros (até 2 para não ficar gigante)
  const genres =
    item.genres?.slice(0, 2).map((g) => g.name).join(", ") || "";

  return (
    <Link
      to={`/${type}/${item.id}`}
      style={{
        textDecoration: "none",
        color: "white",
        flex: "0 0 100%", // 🔥 1 CARD = 1 PAGE FULL WIDTH
        scrollSnapAlign: "center",
      }}
    >
      <div
        style={{
          height: "400px",
          position: "relative",
          borderRadius: "12px",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        {/* BACKDROP GRANDE */}
        <img
          src={
            item.backdrop_path
              ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
              : `https://image.tmdb.org/t/p/w500${item.poster_path}`
          }
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.8), transparent)",
          }}
        />

           {/* 🟥 TOP LEFT */}
        <span
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            background: "#e50914",
            padding: "5px 10px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          Top Rated
        </span>

        {/* ⭐ TOP RIGHT (SEM BACKGROUND) */}
       <div
  style={{
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "rgba(60, 60, 64, 0.2)",
    padding: "10px 12px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    fontWeight: "bold",
    fontSize: "12px",
  }}
>
  <span
    style={{
      color: "gold",
      fontSize: "18px",
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
    }}
  >
    ★
  </span>

  {((item.vote_average ?? 0) / 2).toFixed(1)}
</div>

        {/* 🎬 BOTTOM INFO */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            color: "white",
            maxWidth: "60%",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "22px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </h2>

          <p style={{ fontSize: "13px", opacity: 0.8 }}>
  {year}
  {genres ? ` • ${genres}` : ""}
</p>
        
          </div>

          {/* ▶️ PLAY BUTTON (BOTTOM RIGHT - OUTSIDE INFO) */}
<div
  style={{
    position: "absolute",
    bottom: "20px",
    right: "20px",
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    background: "rgba(229, 9, 20, 0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 18px rgba(0,0,0,0.5)",
    cursor: "default",
  }}
>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
    <path d="M8 5v14l11-7z" />
  </svg>
</div>
      </div>
    </Link>
  );
};

export default TopRatedCard; 

