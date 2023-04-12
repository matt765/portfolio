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
} from "@chakra-ui/react";

import { GithubIcon } from "@/assets/icons/github";
import { MailIcon } from "@/assets/icons/mail";
import { TransparentButton } from "./buttons/TransparentButton";
import { NavigationAnchor } from "./NavigationAnchor";

export const Contact = () => (
  <Flex
    align="center"
    justify="center"
    direction="column"
    w={{ base: "85%", sm: "80%", md: "30rem" }}
    mx="auto"
    gap="1.5rem"
    mb="2rem"
    pb="2rem"
    mt="5rem"
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
          w="3rem"
          h="1px"
          bg="mainColor"
          mb="1.5rem"
          mr="2rem"
          display={{ base: "none", md: "flex" }}
        />
        <Heading as="h2" mb="2rem">
          Contact me
        </Heading>
        <Flex
          w="3rem"
          h="1px"
          bg="mainColor"
          mb="1.5rem"
          ml="2rem"
          display={{ base: "none", md: "flex" }}
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
            backdropFilter="blur(24px)"
          />
        </FormControl>
        <FormControl isRequired mb="1.5rem">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            borderColor="inputBorder"
            backdropFilter="blur(24px)"
          />
        </FormControl>
        <FormControl isRequired mb="2rem">
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            rows={6}
            resize="none"
            borderColor="inputBorder"
            backdropFilter="blur(24px)"
          />
        </FormControl>
        <Flex w="100%" justify="center" mt="3rem">
          <TransparentButton text="Get in touch" type="submit" />
        </Flex>
      </motion.div>
    </form>
    <Flex justify="center" alignItems="center" gap="1.5rem" mt="1.5rem">
      <Link
        href="https://github.com/matt765/portfolio"
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
        <Flex width="3rem">
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
        <Flex width="3.5rem">
          <Icon as={MailIcon} />
        </Flex>
      </Link>
    </Flex>
  </Flex>
);
