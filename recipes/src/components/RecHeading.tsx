import { Flex, Heading, HStack, Image, Tooltip } from "@chakra-ui/react";
import logo from "../assets/chefLog.png";

export const RecHeading = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      padding={2}
    >
      <HStack>
        <Heading
          as="h3"
          padding={5}
          textTransform="uppercase"
          fontFamily="heading"
          whiteSpace="nowrap"
        >
          la nourriture
        </Heading>

        <Image src={logo} boxSize="90px" padding="10px" />
      </HStack>
    </Flex>
  );
};
