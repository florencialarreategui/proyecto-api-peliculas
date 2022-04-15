import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Tarjetas from "./Tarjetas";
import Container from "@mui/material/Container";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
const Popular = () => {
  const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=a956e692d7f996ce28c6cca9dfa978ce`
    )
      .then((res) => res.json())
      .then((data) => {
        setPeliculas(data.results);
      });
  }, []);
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
        <Typography variant="h3" gutterBottom component="div">
          Más populares
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {peliculas.map((pelicula) => (
          <Link key={pelicula.id} to={`/movie/${pelicula.id}`}>
            <Tarjetas
              titulo={pelicula.title}
              imagen={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
            ></Tarjetas>
          </Link>
        ))}
      </Box>
    </Container>
  );
};
export default Popular;
