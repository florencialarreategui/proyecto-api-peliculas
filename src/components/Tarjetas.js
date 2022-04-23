import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CardActionArea, } from "@mui/material";
import { AiFillEye } from "react-icons/ai";


const Tarjetas = ({ titulo, imagen }) => {
  return (
    <Box sx={{ width: 300, border: 1, mb: 1, borderColor: "#eeeeee", display: "flex", justifyContent: "center" }}>
      <CardActionArea>
        <Box >
          <img src={imagen} alt={titulo} />
        </Box>

        <Typography gutterBottom variant="h6" component="div" color="#424242" sx={{ m: 4 }}>
          {titulo}
        </Typography>
        <Box
          sx={{
            height: 45,
            borderTop: 2,
            borderColor: "#eeeeee",
            color: "#424242",
            display: "flex",
            justifyContent: "center",
            fontSize: 25,
            pt: 2
          }}>
          <AiFillEye ></AiFillEye>
        </Box>

      </CardActionArea>
    </Box>
  );
};
export default Tarjetas;
