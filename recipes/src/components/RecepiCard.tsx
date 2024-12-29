import { Card, CardBody, Heading, Image, Link } from "@chakra-ui/react";
import { Recipe } from "./RecepeGrid";

interface Props {
  recipe: Recipe;
}

export const RecepiCard = ({ recipe }: Props) => {
  return (
    <Card
      borderRadius={10}
      overflow="hidden"
      transition="transform 0.3s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "xl",
      }}
    >
      <Image src={recipe.image} />
      <CardBody>
        <Heading fontSize="2xl">{recipe.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default RecepiCard;
