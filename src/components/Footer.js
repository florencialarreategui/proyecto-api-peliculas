import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaGithubAlt } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <Box
      sx={{
        height: 100,
        backgroundColor: "warning.dark",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ justifyContent: "center", color: "#fafafa" }}>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          <Box>Hecho por Flor</Box>
        </Typography>
        <Box sx={{ flexDirection: "column", justifyContent: "center" }}>
          <Box>
            <FaGithubAlt />{" "}
            <a href="https://github.com/florencialarreategui">Github</a>
          </Box>

          <Box>
            <BsLinkedin />{" "}
            <a href="https://www.linkedin.com/in/florencia-larreategui/">
              Linkedin
            </a>
          </Box>
        </Box>
      </Box>
    </Box>

  );
};

export default Footer;
