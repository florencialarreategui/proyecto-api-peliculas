import HomeSection from "./HomeSection";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import SimpleSlider from "./SimpleSlider";

const Home = () => {
  return (
    <Box sx={{ bgcolor: "#eeeeee" }}>
      <Box>
        <SimpleSlider></SimpleSlider>
      </Box>

      <Box
        sx={{
          display: "flex",
          m: 10,
          justifyContent: "space-between",
        }}
      >
        <HomeSection titulo="Peliculas populares" url="popular"></HomeSection>
        <HomeSection
          titulo="Peliculas mejor putuadas"
          url="top_rated"
        ></HomeSection>
      </Box>
    </Box>
  );
};

export default Home;
