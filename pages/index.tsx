import { Container, Box } from "@mui/material";
import About from "../components/index/About";
import NumberInput from "../components/index/NumberInput";
import Result from "../components/index/Result";

function Home() {
  return (
    <Box
      component={Container}
      alignItems="center"
      justifyContent="center"
      display="flex"
      flexDirection="column"
      minHeight="80vh"
    >
      <About />
      <NumberInput />
      <Result />
    </Box>
  );
}

export default Home;
