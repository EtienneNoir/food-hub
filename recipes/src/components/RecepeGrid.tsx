import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid } from "@chakra-ui/react";
import RecepiCard from "./recepiCard";
import RecipeCardSkeleton from "./RecipeCardSkeleton";

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
  const [isLoading, setLoading] = useState(false);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchRecReponse>("")
      .then((res) => {
        setRecipe(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={5}
      padding="15px"
    >
      {isLoading &&
        skeleton.map((skeleton) => <RecipeCardSkeleton key={skeleton} />)}
      {recipe.map((rec) => (
        <RecepiCard key={rec.id} recipe={rec} />
      ))}
    </SimpleGrid>
  );
};

export default RecepeGrid;
