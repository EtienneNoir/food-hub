import useData from "./useData";
import { GameQuery } from "../App";

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

const useMeals = (gameQuery: GameQuery) => {
  // Default to search.php?f=c if searchText is empty
  const endpoint = gameQuery.searchText ? "/search.php" : "/search.php?f=c";

  // Set query parameters conditionally
  const params = gameQuery.searchText ? { s: gameQuery.searchText } : undefined;

  return useData<Recipe>(
    endpoint,
    {
      params, // Use the params object to send searchText or default values
    },
    [gameQuery]
  );
};

export default useMeals;
