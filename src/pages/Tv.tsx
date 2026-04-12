/*import { useEffect } from "react";
import { useTv } from "../hooks/tv/useTv";
import TopRated from "../components/TopRated";
import AiringToday from "../components/AiringToday";
import Card from "../components/Card";

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
        background: "#1c1c25",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* ⭐ TOP RATED (mantém TopRated) *//*}
      <TopRated tops={tvTop} type="tv" title="" />

      {/* 📺 AIRING TODAY (NOVO LAYOUT) *//*}
      <AiringToday tvs={airingToday} />

      {/* 🔥 HEADER *//*}
      <div style={{ padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "5px" }}>
          Popular Series
        </h1>
        <p style={{ opacity: 0.7 }}>
          Find the moment most popular series 
        </p>
      </div>

      {/* 🎥 GRID (mantém Card normal) *//*}
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

      {/* ⏳ LOADING *//*}
      {loading && (
        <p style={{ textAlign: "center", padding: "2rem", opacity: 0.6 }}>
          Loading series...
        </p>
      )}

      {/* ❌ ERROR *//*}
      {error && (
        <p style={{ textAlign: "center", color: "red" }}>{error}</p>
      )}

      {/* 📡 ON THE AIR (NOVO LAYOUT TAMBÉM se quiseres depois) *//*}
      <AiringToday tvs={onAir} title="On The Air" />
    </div>
  );
};

export default Tv; */

import { useEffect } from "react";
import { useTv } from "../hooks/tv/useTv";
import TopRated from "../components/TopRated";
import AiringToday from "../components/AiringToday";
import Card from "../components/Card";

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
  const load = async () => {
    await getTv();
    await getTvTopRated();
    await getTvNowAiring();
    await getTvOnAir();

    console.log("TV:", tv);
    console.log("TOP:", tvTop);
  };

  load();
}, []);

  return (
    <div
      style={{
        background: "#1c1c25",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* ⏳ LOADING GLOBAL (não bloqueia UI inteira) */}
      {loading && (
        <p style={{ textAlign: "center", padding: "1rem", opacity: 0.6 }}>
          Loading...
        </p>
      )}

      {/* ❌ ERROR */}
      {error && (
        <p style={{ textAlign: "center", color: "red", padding: "1rem" }}>
          {error}
        </p>
      )}

      {/* ⭐ TOP RATED */}
      {tvTop?.length > 0 && (
        <TopRated tops={tvTop} type="tv" title="" />
      )}

      {/* 📺 AIRING TODAY */}
      {airingToday?.length > 0 && (
        <AiringToday tvs={airingToday} />
      )}

      {/* 🔥 HEADER */}
      <div style={{ padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "5px" }}>
          Popular Series
        </h1>
        <p style={{ opacity: 0.7 }}>
          Find the most popular series
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
        {tv?.length > 0 ? (
          tv.map((serie) => (
            <Card
              key={serie.id}
              id={serie.id}
              name={serie.name}
              rating={serie.vote_average}
              poster={serie.poster_path}
              date={serie.first_air_date}
              type="tv"
            />
          ))
        ) : (
          !loading && (
            <p style={{ opacity: 0.6 }}>No series found</p>
          )
        )}
      </div>

      {/* 📡 ON THE AIR */}
      {onAir?.length > 0 && (
        <AiringToday tvs={onAir} title="On The Air" />
      )}
    </div>
  );
};

export default Tv;

