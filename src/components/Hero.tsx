import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import { TransparentButton } from "./buttons/TransparentButton";

export const Hero = () => {
  return (
    <Flex w="100%" h="100vh" alignItems="center" justify="center" id="home" pt={{ base: "6rem", md: "0"}} >
      <Flex
        w="90%"
        alignItems="center"
        justify="flex-start"
        pb={{ base: "5rem", xl: "2rem"}}
        pl={{ base: "4%", md: "8%", lg: "11%", xl: "6vw", "2xl": "12vw" }}
      >
        <Flex direction="column" w="57rem" gap="1rem">
          <Flex>
            <Heading
              mb="1rem"
              as="h1"
              fontSize={{ base: "2rem", md: "2.8rem", xl: "3.8rem" }}
            >
              Hello, my name is Matthew <br />
              I&apos;m
              <Text
                as="span"
                variant="titleColored"
                ml="1.1rem"
                fontSize={{ base: "2rem", md: "2.8rem", xl: "3.8rem" }}
              >
                Front-End Developer
              </Text>
            </Heading>
          </Flex>
          <Flex>
            <Text
              variant="paragraphSecondary"
              mb="2rem"
              maxW="35rem"
              fontSize={{ base: "1rem", xl: "1.1rem" }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis
            </Text>
          </Flex>
          <Link href="#projects" _hover={{ textDecoration: "none"}}>
            <TransparentButton text="See my work" />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
