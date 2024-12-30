import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid } from "@chakra-ui/react";
import RecepiCard from "./recepiCard";
import RecipeCardSkeleton from "./RecipeCardSkeleton";

export interface Recipe {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
}

interface FetchRecReponse {
  count: number;
  meals: Recipe[];
}

const RecepeGrid = () => {
  const [recipe, setRecipe] = useState<Recipe[]>([]);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchRecReponse>("")
      .then((res) => {
        setRecipe(res.data.meals);
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
        <RecepiCard key={rec.idMeal} recipe={rec} />
      ))}
    </SimpleGrid>
  );
};

export default RecepeGrid;
