import Box from '@mui/material/Box';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
const DetallePelicula = () => {

  const params = useParams();
  const [pelicula, setPelicula] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.idPelicula}?api_key=a956e692d7f996ce28c6cca9dfa978ce`
    )
      .then((res) => res.json())
      .then((data) => setPelicula(data));
  }, [params.idPelicula]);
  return (

    <Box sx={{
      display: "flex",
      p: 6

    }}>
      <Box sx={{ mr: 5 }}>
        <img src={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`} alt={pelicula.title} />
      </Box>
      <Box>

        <Typography variant="h2">{pelicula.title}</Typography>

        <Typography>  {pelicula.release_date === ""
          ? "Sin resultados"
          : pelicula.release_date}</Typography>
        <Typography> {pelicula.overview === ""
          ? "Sin resultados"
          : pelicula.overview}</Typography>




      </Box>
    </Box>

  )

};

export default DetallePelicula;
