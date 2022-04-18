import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const InfoSlider = ({ titulo, info, link }) => {
  return (
    <Box
      sx={{
        width: 600,
        height: 250,
        backgroundColor: "secondary.main",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        p: 1,
        opacity: 0.8,
        zIndex: "modal",
      }}
    >
      <Typography variant="h6" color="inherit" component="div">
        {titulo}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {info}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {link}
      </Typography>
    </Box>
  );
};

export default InfoSlider;
