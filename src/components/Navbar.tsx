import { Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarItemProps {
  text: string;
  color?: string;
  path: string;
  onClick?: () => void;
  isActive?: boolean;
}

const NavbarItem = ({ text, color, path, isActive }: NavbarItemProps) => (
  <Link _hover={{ textDecoration: "none" }} href={path}>
    <Text
      w="8rem"
      variant="navbarItem"
      textTransform="uppercase"
      fontWeight="400"
      letterSpacing="3px"
      fontSize="0.9rem"
      color={isActive ? "coloredText" : color}
      _hover={{
        color: "coloredText",
      }}
      cursor="pointer"
      transition="0.2s"
    >
      {text}
    </Text>
  </Link>
);

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("home");
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        "home",
        "services",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && scrollPosition >= section.offsetTop - 300) {
          setActiveItem(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex
      w="14rem"
      position="fixed"
      left="0"
      top="0"
      direction="column"
      justify="center"
      alignItems="flex-start"
      borderWidth="0 1px 0 0"
      borderStyle="solid"
      borderColor="grayBorder"
      h="100%"
      pb="6rem"
      pl="3.5rem"
      bg="primaryBg"
      display={{ base: "none", lg: "flex" }}
      backdropFilter="blur(24px)"
    >
      <Flex mb="2rem" ml="-1rem">
        <Image src="/logo.png" alt="" width={100} height={100} />
      </Flex>
      <Flex gap="1.5rem" direction="column" alignItems="flex-start">
        <NavbarItem text="Home" path="#home" isActive={activeItem === "home"} />
        <NavbarItem
          text="Services"
          path="#services"
          isActive={activeItem === "services"}
        />
        <NavbarItem
          text="Projects"
          path="#projects"
          isActive={activeItem === "projects"}
        />
        <NavbarItem
          text="Experience"
          path="#experience"
          isActive={activeItem === "experience"}
        />
        <NavbarItem
          text="Contact"
          path="#contact"
          isActive={activeItem === "contact"}
        />
      </Flex>
    </Flex>
  );
};

const MobileNavbarItem = ({ text, color, path, onClick }: NavbarItemProps) => (
  <Flex w="100%" justify="center" textAlign="center" alignItems="center">
    <Link _hover={{ textDecoration: "none" }} href={path} onClick={onClick}>
      <Text
        w="12rem"
        variant="navbarItem"
        textTransform="uppercase"
        fontWeight="400"
        letterSpacing="3px"
        fontSize="1.3rem"
        color={color}
        _hover={{
          color: "coloredText",
        }}
        cursor="pointer"
        transition="0.2s"
      >
        {text}
      </Text>
    </Link>
  </Flex>
);

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Flex
        w="100%"
        h="5rem"
        bg="primaryBg"
        justify="space-between"
        display={{ base: "flex", lg: "none" }}
        position="fixed"
        top="0"
        left="0"
        px="1.5rem"
        py="0.3rem"
        alignItems="center"
        zIndex="999"
      >
        <Flex py="0.5rem">
          <Image src="/logo.png" alt="" width={120} height={70} />
        </Flex>
        <Flex
          w="2.7rem"
          h="3rem"
          bg="secondaryBg"
          borderStyle="solid"
          borderWidth="1px"
          borderColor="rgb(255,255,255,0.2)"
          borderRadius="6px"
          justify="center"
          alignItems="center"
          direction="column"
          gap="0.35rem"
          cursor="pointer"
          _hover={{ bg: "rgb(255,255,255,0.05)" }}
          transition="0.2s"
          _active={{ bg: "rgb(255,255,255,0.05)" }}
          onClick={() => setIsOpen(!isOpen)}
          zIndex="99999"
        >
          <Flex w="1.3rem" h="1px" bg="rgb(255,255,255,0.5)"></Flex>
          <Flex w="1.3rem" h="1px" bg="rgb(255,255,255,0.5)"></Flex>
          <Flex w="1.3rem" h="1px" bg="rgb(255,255,255,0.5)"></Flex>
        </Flex>
      </Flex>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          exit={{ opacity: 0 }}
        >
          <Flex
            gap="1.5rem"
            direction="column"
            alignItems="flex-start"
            w="100%"
            h="100%"
            bg="secondaryBg"
            position="fixed"
            top="5rem"
            left="0"
            borderStyle="solid"
            borderWidth="1px 0 0 0"
            borderColor="rgb(255,255,255,0.1)"
            pt="2rem"
            display={{ base: "flex", lg: "none" }}
            zIndex="99"
          >
            <MobileNavbarItem
              text="Home"
              color="coloredText"
              path="#home"
              onClick={() => setIsOpen(false)}
            />
            <MobileNavbarItem
              text="Services"
              path="#services"
              onClick={() => setIsOpen(false)}
            />
            <MobileNavbarItem
              text="Projects"
              path="#projects"
              onClick={() => setIsOpen(false)}
            />
            <MobileNavbarItem
              text="Experience"
              path="#experience"
              onClick={() => setIsOpen(false)}
            />
            <MobileNavbarItem
              text="Contact"
              path="#contact"
              onClick={() => setIsOpen(false)}
            />
          </Flex>
        </motion.div>
      )}
    </>
  );
};
