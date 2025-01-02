import { Flex, Heading, HStack, Image, Tooltip } from "@chakra-ui/react";
import logo from "../assets/chefLog.png";

export const RecHeading = () => {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <HStack>
        <Heading
          as="h3"
          padding={5}
          textTransform="uppercase"
          fontFamily="heading"
          whiteSpace="nowrap"
          cursor="pointer"
        >
          la nourriture
        </Heading>
        <Tooltip
          label="Leave the search input empty and press search to go back to the Home menu after searching for a meal!"
          fontSize="smaller"
          placement="top-end"
          hasArrow
          bg="gray.400"
          borderRadius={10}
        >
          <Image src={logo} boxSize="90px" padding="10px" />
        </Tooltip>
      </HStack>
    </Flex>
  );
};
