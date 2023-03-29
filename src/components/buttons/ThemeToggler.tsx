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
          width: "25px",
          fill: "mainColorLight",
          color: "mainColorLight"
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
        bg: "rgba(106, 111, 121, 0.4)",
      }}
      _active={{
        bg: "rgba(171, 173, 179, 0.4)",
      }}
      transition="0.3s"
      bg="secondaryBgHover"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="grayBorder"
      cursor="pointer"
      zIndex="99999"
      right="2rem"
      bottom="2rem"
    >
      {colorMode === "light" ? 
        <Icon as={SunIcon} />
       :      
        <Icon as={MoonIcon} />
      }
    </Flex>
  );
};
