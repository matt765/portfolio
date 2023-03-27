import { Button, Flex, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      onClick={toggleColorMode}
      position="fixed"
      w="3.2rem"
      h="3.2rem"
      right="1.5rem"
      bottom="1.5rem"
      borderRadius="50px"
      bg="themeTogglerBg"
      borderColor="themeTogglerBorder"
      borderStyle="solid"
      borderWidth="1px"
      _hover={{ bg: "themeTogglerHoverBg" }}
      justify="center"
      alignItems="center"
      cursor="pointer"
      transition="0.3s"
    >
      {colorMode === "light" ? (
        <SunIcon boxSize={5} />
      ) : (
        <MoonIcon boxSize={4} />
      )}
    </Flex>
  );
};
