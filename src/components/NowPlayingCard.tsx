import { Link } from "react-router-dom";
import type { Movie } from "../types/media";

interface Props {
  movie: Movie;
}

const NowPlayingCard = ({ movie }: Props) => {
  const stars = Math.round(movie.vote_average / 2); // converter 10 → 5

  return (
    <Link
      to={`/movie/${movie.id}`}
      style={{ textDecoration: "none", color: "white" }}
    >
      <div
        style={{
          width: "180px",
          minWidth: "180px",
          height: "380px",
          cursor: "pointer",
          transition: "0.3s", // transição
          position: "relative",
          zIndex: 1,
          isolation: "isolate",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center"
          
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
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{
            width: "100%",
            height: "270px",
            objectFit: "cover",
            borderRadius: "10px",
            /*boxShadow: "0 10px 25px rgba(0,0,0,0.6)", */
          }} 
        /> 

        {/* TITLE */}
        <p
          style={{
            marginTop: "22px",
            fontSize: "14px",
            fontWeight: "500",
            overflow: "hidden",  //
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "100%",
            textAlign: "center",

          }}
        >
          {movie.title}
        </p>

        {/* ⭐ STARS */}
        <div style={{ marginTop: "-12px", 
            fontSize: "24px", opacity: 0.9, 
            color: "gold", display: "flex", 
            justifyContent: "center", 
            gap: "2px", 
            width: "100%", 
            height: "20px", }}>
          {"★".repeat(stars)}
          {"☆".repeat(5 - stars)}
        </div>
      </div>
    </Link>
  );
};

export default NowPlayingCard; 

/*import { Link } from "react-router-dom";
import type { Movie, Tv } from "../types/media";

interface Props {
  item: Movie | Tv;
  type: "movie" | "tv";
}

const NowPlayingCard = ({ item, type }: Props) => {
  const stars = Math.round(item.vote_average / 2);

  const title = type === "movie" ? item.title : item.name;

  return (
    <Link
      to={`/${type}/${item.id}`}
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
        {/* POSTER *//*}
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt={title}
          style={{
            width: "100%",
            height: "270px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />

        {/* TITLE *//*}
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
          {title}
        </p>

        {/* ⭐ STARS *//*}
        <div
          style={{
            marginTop: "-12px",
            fontSize: "24px",
            opacity: 0.9,
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

export default NowPlayingCard; */
