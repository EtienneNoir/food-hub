import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid } from "@chakra-ui/react";
import RecepiCard from "./recepiCard";

export interface Recipe {
  id: number;
  title: string;
  image: string;
}
interface FetchRecReponse {
  count: number;
  results: Recipe[];
}

const RecepeGrid = () => {
  const [recipe, setRecipe] = useState<Recipe[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchRecReponse>("")
      .then((res) => setRecipe(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={5}
      padding="15px"
    >
      {recipe.map((rec) => (
        <RecepiCard key={rec.id} recipe={rec} />
      ))}
    </SimpleGrid>
  );
};

export default RecepeGrid;
