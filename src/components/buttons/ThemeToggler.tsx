import { Button, Flex, Icon, useColorMode } from "@chakra-ui/react";

import { MoonIcon } from "@/assets/icons/moon";
import { SunIcon } from "@/assets/icons/sun";

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      onClick={toggleColorMode}
      position="fixed"
      sx={{
        "& svg": {
          maxWidth: "22px",
          fill: "mainColorLight",
          color: "mainColorLight",
        },
      }}
      h="3.2rem"
      w="3.2rem"
      alignItems="center"
      mt="0.9rem"
      p="0.5rem"
      pl="0.6rem"
      borderRadius="10px"
      justify="center"
      _hover={{
        bg: "#373e48"
      }}
      _active={{
        bg: "#373e48"
      }}
      transition="0.3s"
      bg="themeTogglerBg"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="grayBorder"
      cursor="pointer"
      zIndex="99999"
      right={{ base: "1.5rem", xl: "2rem" }}
      bottom={{ base: "1.5rem", xl: "2rem" }}
      backdropFilter={colorMode === "light" ? "blur(24px)" : ""}
    >
      {colorMode === "light" ? <Icon as={SunIcon} /> : <Icon as={MoonIcon} />}
    </Flex>
  );
};
