import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Tarjetas from "./Tarjetas";
import Container from "@mui/material/Container";

const NewMovies = ({ titulo, imagen }) => {
  const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=a956e692d7f996ce28c6cca9dfa978ce`
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
          Últimos lanzamientos
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {peliculas.map((pelicula) => (
          <Tarjetas
            key={pelicula.id}
            titulo={pelicula.title}
            imagen={pelicula.poster_path}
          ></Tarjetas>
        ))}
      </Box>
    </Container>
  );
};

export default NewMovies;
