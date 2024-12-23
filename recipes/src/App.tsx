import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    // creating break points, to specify how the website should look on different devices
    <Grid
      templateAreas={{
        base: `"nav""main"`, // mobile devices
        lg: `"nav nav" "aside main"`, // devices larger than 1024px
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        {/** Will only show on lager devices */}
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="green">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
