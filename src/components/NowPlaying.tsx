import NowPlayingCard from "./NowPlayingCard";
import type { Movie } from "../types/media";

interface Props {
  movies: Movie[];
  title?: string;
}

const NowPlaying = ({ movies, title = "Now Playing" }: Props) => {
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

          

    // esconder scrollbar
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // IE/Edge antigo
  }}
  className="no-scrollbar"


      >
        {movies.map((movie) => (
          <NowPlayingCard key={movie.id} movie={movie} />
        ))}

        

        
      </div>
    </div>
  );
};

export default NowPlaying;