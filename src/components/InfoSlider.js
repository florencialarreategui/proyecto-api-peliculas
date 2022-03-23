import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const InfoSlider = ({ titulo, info }) => {
  return (
    <Box
      sx={{
        width: 200,
        height: 150,
        backgroundColor: "secondary.main",
        position: "absolute",
        zIndex: "modal",
      }}
    >
      <Typography variant="h6" color="inherit" component="div">
        {titulo}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {info}
      </Typography>
    </Box>
  );
};

export default InfoSlider;
