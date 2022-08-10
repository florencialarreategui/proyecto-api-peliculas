import HomeSection from "./HomeSection";
import Box from "@mui/material/Box";
import SimpleSlider from "./SimpleSlider";

const Home = () => {
  return (
    <Box >
      <Box>
        <SimpleSlider></SimpleSlider>
      </Box>

      <Box
        sx={{
          display: "flex",
          m: 10,
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <HomeSection titulo="PELÍCULAS POPULARES" url="popular"></HomeSection>
        <HomeSection
          titulo="PELÍCULAS MEJOR PUNTUADAS"
          url="top_rated"
        ></HomeSection>
      </Box>
    </Box>
  );
};

export default Home;
