import Box from "@mui/material/Box";
import ItemPelicula from "./ItemPelicula";
import { useState, useEffect } from "react";

const HomeSection = ({ titulo, url }) => {
  const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${url}?api_key=a956e692d7f996ce28c6cca9dfa978ce`
    )
      .then((res) => res.json())
      .then((data) => {
        setPeliculas(data.results);
      });
  }, []);

  return (
    <Box
      sx={{
        width: 500,
        height: 500,
        backgroundColor: "primary.dark",
        overflow: "scroll",
      }}
    >
      <Box
        sx={{
          width: 500,
          height: 70,
          backgroundColor: "secondary.main",
        }}
      ></Box>

      {peliculas.map((pelicula) => (
        <ItemPelicula
          key={pelicula.id}
          titulo={pelicula.title}
          imagen={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
        ></ItemPelicula>
      ))}
    </Box>
  );
};

export default HomeSection;
