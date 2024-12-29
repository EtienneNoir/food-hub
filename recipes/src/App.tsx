import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import RecepeGrid from "./components/RecepeGrid";

const App = () => {
  return (
    // creating break points, to specify how the website should look on different devices
    <Grid
      templateAreas={{
        base: `"nav""main"`, // mobile devices
        lg: `"nav""main"`, // devices larger than 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="main">
        <RecepeGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
