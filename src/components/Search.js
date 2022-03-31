import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Tarjetas from "./Tarjetas";
import Button from '@mui/material/Button';

const Search = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const [peliculas, setPeliculas] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=a956e692d7f996ce28c6cca9dfa978ce&query=${searchParams.get("query")}`
    )
      .then(res => res.json())
      .then(data => {
        setPeliculas(data.results);
      });
  }, [searchParams]);

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
    console.log("valor del input");
  };

  const handleClick = () => {
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

        sx={{ mt: 10, width: 600 }}
      />
      <Button size="small" color="primary" onClick={handleClick}>
        Buscar
      </Button>

    </Container>
  );
};
export default Search;
