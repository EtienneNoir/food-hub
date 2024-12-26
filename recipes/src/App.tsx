import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    // creating break points, to specify how the website should look on different devices
    <Grid
      templateAreas={{
        base: `"nav""main"`, // mobile devices
        lg: `"nav nav" "aside main"`, // devices larger than 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        {/** Will only show on lager devices */}
        <GridItem>Aside</GridItem>
      </Show>

      <GridItem>Main</GridItem>
    </Grid>
  );
};

export default App;
