import {
  Card,
  CardBody,
  Heading,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Center,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Recipe } from "./RecepeGrid";

interface Props {
  recipe: Recipe;
}

export const RecepiCard = ({ recipe }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ingredients = [
    recipe.strIngredient1,
    recipe.strIngredient2,
    recipe.strIngredient3,
    recipe.strIngredient4,
    recipe.strIngredient5,
    recipe.strIngredient6,
    recipe.strIngredient7,
    recipe.strIngredient8,
    recipe.strIngredient9,
    recipe.strIngredient10,
    recipe.strIngredient11,
    recipe.strIngredient12,
    recipe.strIngredient13,
    recipe.strIngredient14,
    recipe.strIngredient15,
    recipe.strIngredient16,
    recipe.strIngredient17,
    recipe.strIngredient18,
    recipe.strIngredient19,
    recipe.strIngredient20,
  ];

  return (
    <>
      <Card
        onClick={onOpen}
        borderRadius={10}
        overflow="hidden"
        transition="transform 0.3s ease-in-out"
        _hover={{
          transform: "scale(1.05)",
          boxShadow: "xl",
        }}
        cursor="pointer"
      >
        <Image src={recipe.strMealThumb} borderRadius={10} overflow="hidden" />
        <CardBody>
          <Heading fontSize="2xl">{recipe.strMeal}</Heading>
        </CardBody>
      </Card>

      {/* Modal Popup */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="blackAlpha.700" />
        <ModalContent>
          <ModalHeader>{recipe.strMeal}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              borderRadius="md"
              mb={4}
            />

            <Heading size="md">Instructions:</Heading>
            <br />
            <Text mb={4}>{recipe.strInstructions}</Text>
            <Heading size="md">Ingredients:</Heading>
            <HStack wrap="wrap" spacing={4} justify="center" mt={4}>
              {ingredients.map((ingredient, index) => {
                if (!ingredient) return null; // to skip empty ingredients
                return (
                  <Card
                    key={index}
                    borderRadius="md"
                    maxWidth="120px"
                    boxShadow="sm"
                    overflow="hidden"
                    align="center"
                    p={2}
                  >
                    <Image
                      src={`https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`}
                      alt={ingredient}
                      boxSize="80px"
                      objectFit="cover"
                      mb={2}
                    />
                    <Text fontSize="sm" textAlign="center">
                      {ingredient}
                    </Text>
                  </Card>
                );
              })}
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RecepiCard;
