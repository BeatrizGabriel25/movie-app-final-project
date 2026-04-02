/*export default function Tv() {
  return <h1>TV</h1>;
}*/

import { useEffect } from "react";
import { useTv } from "../hooks/tv/useTv";
import Card from "../components/Card";
import TopRated from "../components/TopRated";

const Tv = () => {
  const {
    getTv,
    tv,
    getTvTopRated,
    tvTop,
    getTvNowAiring,
    airingToday,
    getTvOnAir,
    onAir,
    loading,
    error,
  } = useTv();

  useEffect(() => {
    getTv();
    getTvTopRated();
    getTvNowAiring();
    getTvOnAir();
  }, []);

  return (
    <div
      style={{
        background: "#0f0f0f",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* ⭐ TOP RATED */}
      <TopRated tops={tvTop} type="tv" title="⭐ Top Rated" />

      {/* 📺 AIRING TODAY */}
      <TopRated tops={airingToday} type="tv" title="📺 Airing Today" />

      {/* 🔥 HEADER */}
      <div style={{ padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "5px" }}>
          📺 Popular Series
        </h1>
        <p style={{ opacity: 0.7 }}>
          Descobre as séries mais populares do momento
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
        {tv.map((serie) => (
          <Card
            key={serie.id}
            id={serie.id}
            name={serie.name}
            rating={serie.vote_average}
            poster={serie.poster_path}
            date={serie.first_air_date}
            type="tv"
          />
        ))}
      </div>

      {/* ⏳ LOADING */}
      {loading && (
        <p style={{ textAlign: "center", padding: "2rem", opacity: 0.6 }}>
          Loading series...
        </p>
      )}

      {/* ❌ ERROR */}
      {error && (
        <p style={{ textAlign: "center", color: "red" }}>{error}</p>
      )}

      {/* 📡 ON THE AIR */}
      <TopRated tops={onAir} type="tv" title="📡 On The Air" />
    </div>
  );
};

export default Tv;