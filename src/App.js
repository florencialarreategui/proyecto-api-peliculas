import Search from "./components/Search";
import Popular from "./components/Popular";
import NewMovies from "./components/NewMovies";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import DetallePelicula from "./components/DetallePelicula";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const urlFetch =
  "https://api.themoviedb.org/3/movie/550?api_key=a956e692d7f996ce28c6cca9dfa978ce";
const App = () => {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/new-movies" element={<NewMovies />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:idMovie" element={<DetallePelicula />} />
        </Routes>

        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
