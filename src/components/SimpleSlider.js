import Slider from "react-slick";
import Box from "@mui/material/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfoSlider from "./InfoSlider";

import { useEffect, useState } from "react";

const SimpleSlider = () => {
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
    <Box sx={{ backgroundColor: "primary.dark" }}>
      <Slider
        dots={true}
        arrows={true}
        slidesToShow={1}
        autoplay={true}
        adaptiveHeight={true}
      >
        {peliculas.map((pelicula) => (
          <Box key={pelicula.id}>
            <InfoSlider
              titulo={pelicula.title}
              info={pelicula.overview}
            ></InfoSlider>
            <Box>
              <img src={pelicula.poster_path} />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SimpleSlider;
