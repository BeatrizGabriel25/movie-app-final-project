import AiringTodayCard from "./AiringTodayCard";
import type { Tv } from "../types/media";

interface Props {
  tvs: Tv[];
  title?: string;
}

const AiringToday = ({ tvs, title = "Airing Today" }: Props) => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>{title}</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          overflowY: "visible",
          padding: "40px 10px 60px 10px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="no-scrollbar"
      >
        {tvs.map((tv) => (
          <AiringTodayCard key={tv.id} tv={tv} />
        ))}
      </div>
    </div>
  );
};

export default AiringToday;