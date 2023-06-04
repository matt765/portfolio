import { motion } from "framer-motion";
import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Link,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";

import { GithubIcon } from "@/assets/icons/github";
import { MailIcon } from "@/assets/icons/mail";
import { TransparentButton } from "./buttons/TransparentButton";
import { NavigationAnchor } from "./NavigationAnchor";

export const Contact = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      w={{ base: "85%", sm: "80%", md: "30rem" }}
      mx="auto"
      gap="1.5rem"
      mb="2rem"
      pb="2rem"
      mt="4rem"
      sx={{
        "& form": {
          width: "100%",
        },
      }}
    >
      <NavigationAnchor id="contact" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <Flex alignItems="center">
          <Flex
            w={{ base: "2rem", md: "3rem" }}
            h="1px"
            bg="mainColor"
            mb="1.5rem"
            mr={{ base: "1rem", md: "2rem" }}
          />
          <Heading
            as="h2"
            mb="2rem"
            fontSize={{
              base: "2rem !important",
              sm: "2rem !important",
              md: "2.8rem !important",
              lg: "3rem !important",
            }}
          >
            Contact me
          </Heading>
          <Flex
            w={{ base: "2rem", md: "3rem" }}
            h="1px"
            bg="mainColor"
            mb="1.5rem"
            ml={{ base: "1rem", md: "2rem" }}
          />
        </Flex>
      </motion.div>
      <form action="https://api.web3forms.com/submit" method="POST">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <input
            type="hidden"
            name="access_key"
            value={process.env.NEXT_PUBLIC_CONTACT_FORM_API_KEY}
          />
          <FormControl isRequired mb="1.5rem">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              borderColor="inputBorder"
              _hover={{
                borderColor: "inputBorderHover",
              }}
              focusBorderColor="rgba(42, 142, 139, 0.7)"
              backdropFilter={colorMode === "light" ? "blur(24px)" : ""}
            />
          </FormControl>
          <FormControl isRequired mb="1.5rem">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              borderColor="inputBorder"
              _hover={{
                borderColor: "inputBorderHover",
              }}
              focusBorderColor="rgba(42, 142, 139, 0.7)"
              backdropFilter={colorMode === "light" ? "blur(24px)" : ""}
            />
          </FormControl>
          <FormControl isRequired mb="2rem">
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              rows={6}
              resize="none"
              borderColor="inputBorder"
              _hover={{
                borderColor: "inputBorderHover",
              }}
              focusBorderColor="rgba(42, 142, 139, 0.7)"
              backdropFilter={colorMode === "light" ? "blur(24px)" : ""}
            />
          </FormControl>
          <Flex w="100%" justify="center" mt="3rem">
            <TransparentButton text="Get in touch" type="submit" />
          </Flex>
        </motion.div>
      </form>
      <Flex justify="center" alignItems="center" gap="1.3rem" mt="1.5rem">
        <Link
          href="https://github.com/matt765/"
          isExternal
          width="3rem"
          fill="githubIcon"
          _hover={{
            "& *": {
              fill: "rgb(255,255,255,0.9)",
            },
          }}
          transition="0.3s"
          sx={{
            "& *": {
              fill: "rgb(255,255,255,0.6)",
            },
          }}
        >
          <Flex width="2.6rem">
            <Icon as={GithubIcon} />
          </Flex>
        </Link>
        <Link
          href="mailto:mateusz.wyrebek@gmail.com"
          isExternal
          width="3rem"
          fill="githubIcon"
          _hover={{
            "& *": {
              stroke: "rgb(255,255,255,0.9)",
            },
          }}
          transition="0.3s"
        >
          <Flex width="2.8rem">
            <Icon as={MailIcon} />
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};
