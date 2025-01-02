import { Grid, GridItem, Heading } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import RecepeGrid from "./components/RecepeGrid";
import SearchInput from "./components/SearchInput";
import { useState } from "react";
import { RecHeading } from "./components/RecHeading";

export interface GameQuery {
  searchText: string;
}
const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`, // mobile devices
        lg: `"nav""main"`, // devices larger than 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <GridItem area="main">
        <RecHeading />
        <RecepeGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
