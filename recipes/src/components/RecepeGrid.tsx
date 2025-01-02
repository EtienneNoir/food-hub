import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid } from "@chakra-ui/react";
import RecepiCard from "./RecepiCard";
import RecipeCardSkeleton from "./RecipeCardSkeleton";
import { GameQuery } from "../App";
import useMeals from "../services/useMeals";

interface Props {
  gameQuery: GameQuery;
}

const RecepeGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useMeals(gameQuery);

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={5}
      padding="15px"
    >
      {isLoading &&
        skeleton.map((skeleton) => <RecipeCardSkeleton key={skeleton} />)}
      {data.map((rec) => (
        <RecepiCard key={rec.idMeal} recipe={rec} />
      ))}
    </SimpleGrid>
  );
};

export default RecepeGrid;
