import Carrousel from "./Carrousel";
import HomeSection from "./HomeSection";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <Box>
      <Carrousel></Carrousel>
      <Box
        sx={{
          display: "flex",
          m: 10,
          justifyContent: "space-between",
        }}
      >
        <HomeSection
         titulo="Peliculas populares" 
         url="popular">
           
         </HomeSection>
        <HomeSection
          titulo="Peliculas mejor putuadas"
          url="top_rated"
        ></HomeSection>
      </Box>
    </Box>
  );
};

export default Home;
