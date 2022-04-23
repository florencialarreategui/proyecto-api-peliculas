import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { MdOutlineMovieFilter } from "react-icons/md";
import { CardActionArea } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#ef6c00" }}>
      <Toolbar>
        <Box sx={{ p: 2, fontSize: 50 }}>
          <MdOutlineMovieFilter color="#fafafa" ></MdOutlineMovieFilter>
        </Box>
        <Link to="/" underline="none">
          <CardActionArea>
            <Typography variant="h6" color="#fafafa" component="div" sx={{ p: 2, }}>
              Home
            </Typography>
          </CardActionArea>
        </Link>
        <Link to="/new-movies" >
          <CardActionArea>
            <Typography variant="h6" color="#fafafa" component="div" sx={{ p: 2 }}>
              Ultimos Lanzamientos
            </Typography>
          </CardActionArea>
        </Link>
        <Link to="/popular">
          <CardActionArea>
            <Typography variant="h6" color="#fafafa" component="div" sx={{ p: 2 }}>
              Populares
            </Typography>
          </CardActionArea>
        </Link>
        <Link to="/search">
          <CardActionArea>
            <Typography variant="h6" color="#fafafa" component="div" sx={{ p: 2, }}>
              Buscar
            </Typography>
          </CardActionArea>
        </Link>
      </Toolbar>

    </Box >
  );
};

export default NavBar;
