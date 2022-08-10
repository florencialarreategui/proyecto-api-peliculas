import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BsFillCaretRightFill } from "react-icons/bs"
import Avatar from '@mui/material/Avatar';
const ItemPelicula = ({ titulo, imagen }) => {
  return (
    <Box sx={{
      display: "flex", p: 3,
      justifyContent: "space-between",
      border: 0.5, borderColor: "warning.dark",
      boxShadow: 2
    }}>
      <Avatar alt="Remy Sharp" src={imagen} />
      <Typography variant="h6">
        {titulo}
      </Typography>
      <BsFillCaretRightFill></BsFillCaretRightFill>
    </Box>
  );
};

export default ItemPelicula;
