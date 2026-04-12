import { useRef, useState, useEffect } from "react";
import TopRatedCard from "./TopRatedCard";
import type { Movie, Tv } from "../types/media";

type TopRatedProps = {
  tops: Movie[] | Tv[];
  type: "movie" | "tv";
  title: string;
};

const TopRated = ({ tops, type, title }: TopRatedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);

  

  const itemsPerPage = 4;
  const totalPages = Math.ceil(tops.length / itemsPerPage);

  const scrollToPage = (page: number) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.offsetWidth;

    container.scrollTo({
      left: page * width,
      behavior: "smooth",
    });

    setActivePage(page);
  };

 
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const width = container.offsetWidth;
      const page = Math.round(container.scrollLeft / width);
      setActivePage(page);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ color: "white", marginBottom: "1rem" }}>
        {title}
      </h2>

      {/* CAROUSEL */}
      <div
        ref={containerRef}
        className="top-rated-carousel"
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          paddingBottom: "10px",

        // SCROLL BAR ESCONDIDO
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {tops.map((item) => (
          <TopRatedCard key={item.id} item={item} type={type}/>
        ))}
      </div>

      {/* DOTS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "12px",
        }}
      >
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            onClick={() => scrollToPage(i)}
            style={{
              width: activePage === i ? "20px" : "8px",
              height: "8px",
              borderRadius: "10px",
              background: activePage === i ? "#3b82f6" : "#3c3c40",
              cursor: "pointer",
              transition: "0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TopRated;



