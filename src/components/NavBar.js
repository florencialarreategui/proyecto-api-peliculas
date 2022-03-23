import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ justifyContent: "space-evenly" }}>
          <Link to="/">
            <Typography variant="h6" color="inherit" component="div">
              Home
            </Typography>
          </Link>
          <Link to="/new-movies">
            <Typography variant="h6" color="inherit" component="div">
              Ultimos Lanzamientos
            </Typography>
          </Link>
          <Link to="/popular">
            <Typography variant="h6" color="inherit" component="div">
              Populares
            </Typography>
          </Link>
          <Link to="/search">
            <Typography variant="h6" color="inherit" component="div">
              Buscar
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
