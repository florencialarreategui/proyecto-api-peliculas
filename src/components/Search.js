import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Tarjetas from "./Tarjetas";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Search = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const [peliculas, setPeliculas] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });

  useEffect(() => {
    if (searchParams.get("query")) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=a956e692d7f996ce28c6cca9dfa978ce&query=${searchParams.get(
          "query"
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPeliculas(data.results);
        });
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
    console.log("valor del input");
  };

  const handleInput = () => {
    setSearchParams({
      query: valorDelInput,
    });
    console.log("presionaste la tecla");
  };
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        bgcolor: "#eeeeee",
      }}
      fixed
    >

      <TextField
        id="outlined-basic"
        label="Buscar"
        variant="outlined"
        onChange={handleChange}
        value={valorDelInput}
        onInput={handleInput}
        sx={{ mt: 10, width: 600 }}
      />


      <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
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
export default Search;
