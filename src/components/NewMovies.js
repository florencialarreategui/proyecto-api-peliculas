import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Tarjetas from "./Tarjetas";
import { Link as LinkRouter } from "react-router-dom";
import { Link } from '@mui/material/Link';


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
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
        <Typography variant="h3" gutterBottom component="div">
          Últimos lanzamientos
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {peliculas.map((pelicula) => (
          <LinkRouter key={pelicula.id} to={`/movie/${pelicula.id}`}>
            <Tarjetas
              titulo={pelicula.title}
              imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
            ></Tarjetas>
          </LinkRouter>
        ))}
      </Box>
    </Box>
  );
};

export default NewMovies;
