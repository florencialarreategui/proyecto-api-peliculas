import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { Link as LinkRouter } from "react-router-dom";
// no dejes componentes importados sin usar
import { Link } from '@mui/material/Link';
import { MdOutlineMovieFilter } from "react-icons/md";
import { CardActionArea } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#ef6c00" }}>
      <Toolbar>
        <Box sx={{ p: 2, fontSize: 35 }}>
          <MdOutlineMovieFilter color="#fafafa" ></MdOutlineMovieFilter>
        </Box>
        <LinkRouter to="/" underline="none">
          <CardActionArea>
            <Typography variant="h6" color="#fafafa" component="div" sx={{ p: 2, }}>
              Home
            </Typography>
          </CardActionArea>
        </LinkRouter>
        <LinkRouter to="/new-movies" >
          <CardActionArea>
            <Typography variant="h6" color="#fafafa" component="div" sx={{ p: 2 }}>
              Ultimos Lanzamientos
            </Typography>
          </CardActionArea>
        </LinkRouter>
        <LinkRouter to="/popular">
          <CardActionArea>
            <Typography variant="h6" color="#fafafa" component="div" sx={{ p: 2 }}>
              Populares
            </Typography>
          </CardActionArea>
        </LinkRouter>
        <LinkRouter to="/search">
          <CardActionArea>
            <Typography variant="h6" color="#fafafa" component="div" sx={{ p: 2, }}>
              Buscar
            </Typography>
          </CardActionArea>
        </LinkRouter>
      </Toolbar>

    </Box >
  );
};

export default NavBar;
