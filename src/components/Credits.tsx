import CreditsCard from "./CreditsCard";
import type { Cast, Crew } from "../types/media";

interface CreditsProps {
  dados: Cast[] | Crew[];
  type: "movie" | "tv";
  titulo: string;
  variant?: "cast" | "crew"; 
}

const Credits = ({ dados, titulo, variant = "cast" }: CreditsProps) => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "1rem", color: "white" }}>
        {titulo}
      </h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          paddingBottom: "10px",

          // esconder scrollbar
          scrollbarWidth: "none",
        }}
      >
        <CreditsCard dados={dados} variant={variant} />
      </div>
    </div>
  );
};

export default Credits;