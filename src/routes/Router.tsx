import { Routes, Route } from "react-router-dom";

/*import HomePage from "../pages/Homepage";*/
import Movies from "../pages/Movies";
import Tv from "../pages/Tv";
import MovieDetalhes from "../pages/MovieDetalhes";
import TvDetalhes from "../pages/TvDetalhes";

export default function Router() {
  return (
    <Routes>
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv" element={<Tv />} />
      <Route path="/movie/:id" element={<MovieDetalhes />} />
      <Route path="/tv/:id" element={<TvDetalhes />} />
    </Routes>
  );
}