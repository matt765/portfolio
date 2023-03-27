import { Flex, Heading } from "@chakra-ui/react";

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => (
  <Flex
    justify={{ base: "center", xl: "flex-start" }}
    alignItems="center"
    gap="2rem"
    mb="4rem"
    direction="row"
    // w={{ base: "100%", "2xl": "74%"}}
    w="100%"
    pl={{ base: "0%", xl: "7%", "2xl": "12%", "3xl": "13%" }}
  >
    <Flex
      w="3rem"
      h="1px"
      bg="mainColor"
      display={{ base: "none", md: "flex" }}
    ></Flex>
    <Heading
      as="h2"
      fontSize={{
        base: "2.5rem !important",
        sm: "2.6rem !important",
        md: "2.8rem !important",
        lg: "3rem !important",
      }}
      textAlign="center"
      px={{ base: "1rem", md: 0 }}
    >
      {title}
    </Heading>
    <Flex
      w="3rem"
      h="1px"
      bg="mainColor"
      display={{ base: "none", md: "flex", xl: "none" }}
    ></Flex>
  </Flex>
);
