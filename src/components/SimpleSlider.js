import Slider from "react-slick";
import Box from "@mui/material/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfoSlider from "./InfoSlider";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <Box sx={{ backgroundColor: "#eeeeee", objectFit: "contain" }}>
      <Slider
        dots={true}
        arrows={true}
        slidesToShow={1}
        autoplay={true}
        adaptiveHeight={true}
      >
        {peliculas.map((pelicula) => (
          <Box key={pelicula.id} sx={{}} >
            <InfoSlider
              titulo={pelicula.title}
              info={pelicula.overview}
              link={<Link to={`/movie/${pelicula.id}`}>
                <p>Ver más..</p>
              </Link>}
            ></InfoSlider>

            <Box >
              <img clasName="MuiImageListItem-img"
                src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
              />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SimpleSlider;
