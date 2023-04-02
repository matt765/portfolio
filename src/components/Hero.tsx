import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import { TransparentButton } from "./buttons/TransparentButton";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      alignItems="center"
      justify="center"
      id="home"
      pt={{ base: "6rem", md: "0" }}
    >
      <Flex
        w="90%"
        alignItems="center"
        justify="flex-start"
        pb={{ base: "5rem", xl: "2rem" }}
        pl={{ base: "4%", md: "8%", lg: "11%", xl: "6vw", "2xl": "12vw" }}
      >
        <Flex direction="column" w="57rem" gap="1rem">
          <Flex>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
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
            </motion.div>
          </Flex>
          <Flex>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
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
            </motion.div>
          </Flex>
          <Link href="#projects" _hover={{ textDecoration: "none" }} w="15rem">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <TransparentButton text="See my work" />
            </motion.div>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
