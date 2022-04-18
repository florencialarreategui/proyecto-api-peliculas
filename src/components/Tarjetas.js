import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";


const Tarjetas = ({ titulo, imagen }) => {
  return (
    <Card sx={{ width: 250, m: 2, p: 1.5 }}>
      <CardActionArea>
        <CardMedia component="img" image={imagen} height="140" alt={titulo} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver
        </Button>
      </CardActions>
    </Card>
  );
};
export default Tarjetas;
