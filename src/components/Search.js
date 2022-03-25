import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

const Search = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const [peliculas, setPeliculas] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });
  const api_key = a956e692d7f996ce28c6cca9dfa978ce;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchParams.get(
        "query"
      )}`
    )
      .then((res) => res.jason())
      .then((data) => {
        setPeliculas(data.results);
      });
  }, [searchParams]);

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handlePress = () => {
    setSearchParams({
      query: valorDelInput,
    });
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
        onKeyPress={handlePress}
        sx={{ mt: 10, width: 600 }}
      />
    </Container>
  );
};
export default Search;
