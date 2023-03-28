import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Textarea,
  useClipboard,
} from "@chakra-ui/react";

import { TransparentButton } from "./buttons/TransparentButton";

export const Contact = () => {
  const { hasCopied, onCopy } = useClipboard("example@example.com");

  return (
    <Flex
      // bg={useColorModeValue("gray.100", "secondaryBg")}
      align="center"
      justify="center"
      // css={{
      //   backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
      //   backgroundAttachment: "fixed",
      // }}
      id="contact"
      direction="column"
      w={{ base: "90%", sm: "80%", md: "30rem" }}
      mx="auto"
      gap="1.5rem"
      mb="2rem"
      pb="5rem"
      mt="5rem"
    >
      <Flex alignItems="center">
        <Flex
          w="3rem"
          h="1px"
          bg="mainColor"
          mb="1.5rem"
          mr="2rem"
          display={{ base: "none", md: "flex" }}
        ></Flex>
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
        ></Flex>
      </Flex>

      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <InputGroup>
          <Input
            type="text"
            name="name"
            borderColor="inputBorder"
            backdropFilter="blur(24px)"
          />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <InputGroup>
          <Input
            type="email"
            name="email"
            borderColor="inputBorder"
            backdropFilter="blur(24px)"
          />
        </InputGroup>
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

      <TransparentButton text="Get in touch" />
    </Flex>
  );
};
