import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

    <Container>
      <Box>
        <h2>{pelicula.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.title} />
      </Box>
    </Container>

  )

};

export default DetallePelicula;
