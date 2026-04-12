import { useEffect, useState } from "react";
import { useTv } from "../hooks/tv/useTv";
import TopRated from "../components/TopRated";
import AiringToday from "../components/AiringToday";
import Card from "../components/Card";
import CategoryFilter from "../components/CategoryFilter";
import { tvCategories } from "../types/media";

const Tv = () => {
  const {
    getTv,
    getTvByGenre,
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

  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  useEffect(() => {
    const load = async () => {
      await getTv();
      await getTvTopRated();
      await getTvNowAiring();
      await getTvOnAir();
    };

    load();
  }, []);


  useEffect(() => {
    getTvByGenre(selectedGenre);
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
      {/* LOADING */}
      {loading && (
        <p style={{ textAlign: "center", padding: "1rem", opacity: 0.6 }}>
          Loading...
        </p>
      )}

      {/* ERROR */}
      {error && (
        <p style={{ textAlign: "center", color: "red", padding: "1rem" }}>
          {error}
        </p>
      )}

      {/* TOP RATED */}
      {tvTop?.length > 0 && (
        <TopRated tops={tvTop} type="tv" title="" />
      )}

      {/* AIRING TODAY */}
      {airingToday?.length > 0 && (
        <AiringToday tvs={airingToday} />
      )}

      {/* HEADER */}
      <div style={{ padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "5px" }}>
          Popular Series
        </h1>
        <p style={{ opacity: 0.7 }}>
          What the world is binge-watching right now.
        </p>
      </div>

      {/* BOTÕES DE CATEGORIA */}
      <CategoryFilter
        categories={tvCategories}
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
          !loading && <p style={{ opacity: 0.6 }}>No series found</p>
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

