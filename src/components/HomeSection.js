import Box from "@mui/material/Box";
import ItemPelicula from "./ItemPelicula";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Dialog from '@mui/material/Dialog';

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
    <Box>
      <Box
        sx={{
          width: 500,
          height: 70,
          backgroundColor: "warning.dark",
          boxShadow: 6,
          border: 0.5,
          borderColor: "warning.dark"
        }}
      >
        <Typography variant="h5" color="#fafafa">
          {titulo}
        </Typography>
      </Box>


      <Box scroll="paper"
        sx={{
          width: 500,
          height: 500,
          backgroundColor: "warning.light",
          overflow: "scroll"
        }}
      >


        {peliculas.map((pelicula) => (
          <ItemPelicula
            key={pelicula.id}
            titulo={pelicula.title}
            imagen={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}
          ></ItemPelicula>
        ))}
      </Box>
    </Box>
  );
};

export default HomeSection;
