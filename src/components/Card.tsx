/*import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  title?: string;
  name?: string;
  rating: number;
  poster: string | null;
  date?: string;
  type: "movie" | "tv";
}

const Card = ({
  id,
  title,
  name,
  rating,
  poster,
  date,
  type,
}: CardProps) => {
  const displayName = title || name;

  return (
    <Link
      to={`/${type}/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="card-item"
        style={{
          width: "220px",
          minWidth: "220px", // 🔥 essencial para carrossel
          height: "420px",
          border: "1px solid #b2b2b2",
          padding: "1rem",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
          transition: "0.2s",
        }}
      >
        {/* IMAGEM *//*}
        <img
          alt={displayName}
          src={
            poster
              ? `https://image.tmdb.org/t/p/w500${poster}`
              : "/no-image.png"
          }
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderRadius: "6px",
          }}
        />

        {/* TÍTULO *//*}
        <h4
          style={{
            fontSize: "14px",
            margin: "10px 0",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {displayName}
        </h4>

        {/* RATING *//*}
        <div>⭐ {rating ? rating.toFixed(1) : "N/A"}</div>

        {/* DATA *//*}
        {date && (
          <div style={{ fontSize: "12px", color: "#666" }}>
            {new Date(date).toLocaleDateString()}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card; */

import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  title?: string;
  name?: string;
  rating: number;
  poster: string | null;
  date?: string;
  type: "movie" | "tv";
}

const Card = ({
  id,
  title,
  name,
  rating,
  poster,
  type,
}: CardProps) => {
  const displayName = title || name;

  const stars = Math.round(rating / 2);

  return (
    <Link
      to={`/${type}/${id}`}
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

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.zIndex = "10";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.zIndex = "1";
        }}
      >
        {/* POSTER */}
        <img
          src={
            poster
              ? `https://image.tmdb.org/t/p/w300${poster}`
              : "/no-image.png"
          }
          alt={displayName}
          style={{
            width: "100%",
            height: "260px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />

    

        {/* TITLE */}
        <p
          title={displayName}
          style={{
            marginTop: "22px",
            fontSize: "14px",
            fontWeight: "500",
            width: "100%",
            textAlign: "center",

            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}

        >
          {displayName}
        </p>

           {/* STARS */}
        <div
          style={{
            fontSize: "24px",
            opacity: 0.9,
            color: "gold",
            display: "flex",
            justifyContent: "center",
            gap: "2px",
            marginTop: "-12px",
            width: "100%",
            height: "20px",
          }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i}>
              {i <= stars ? "★" : "☆"}
            </span>
          ))}
        </div>


      </div>
    </Link>
  );
};

export default Card;