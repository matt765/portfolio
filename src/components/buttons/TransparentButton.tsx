import { Flex } from "@chakra-ui/react";

interface ButtonProps {
  text: string;
}
export const TransparentButton = ({ text }: ButtonProps) => (
  <Flex
    w="15rem"
    borderWidth="1px"
    borderStyle="solid"
    borderColor="coloredBorder"
    h="3.5rem"
    justify="center"
    alignItems="center"
    borderRadius="5px"
    _hover={{ bg: "transparentButtonHover" }}
    transition="0.2s"
    cursor="pointer"
    _active={{ bg: "transparentButtonActive" }}
    backdropFilter="blur(24px)"
  >
    {text}
  </Flex>
);
