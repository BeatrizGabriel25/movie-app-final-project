import { Link } from "react-router-dom";
import type { Tv } from "../types/media";

interface Props {
  tv: Tv;
}

const AiringTodayCard = ({ tv }: Props) => {
  const stars = Math.round(tv.vote_average / 2);

  return (
    <Link
      to={`/tv/${tv.id}`}
      style={{ textDecoration: "none", color: "white" }}
    >
      <div
        style={{
          width: "180px",
          minWidth: "180px",
          height: "380px",
          cursor: "pointer",
          transition: "0.3s",
          position: "relative",
          zIndex: 1,
          isolation: "isolate",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.zIndex = "10";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.zIndex = "1";
        }}
      >
        {/* POSTER */}
        <img
          src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
          alt={tv.name}
          style={{
            width: "100%",
            height: "270px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />

        {/* TITLE */}
        <p
          style={{
            marginTop: "22px",
            fontSize: "14px",
            fontWeight: "500",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "100%",
            textAlign: "center",
          }}
        >
          {tv.name}
        </p>

        {/*RATING*/}
        <div
          style={{
            marginTop: "-12px",
            fontSize: "24px",
            color: "gold",
            display: "flex",
            justifyContent: "center",
            gap: "2px",
            width: "100%",
            height: "20px",
          }}
        >
          {"★".repeat(stars)}
          {"☆".repeat(5 - stars)}
        </div>
      </div>
    </Link>
  );
};

export default AiringTodayCard;