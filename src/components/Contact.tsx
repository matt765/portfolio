import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useClipboard,
} from "@chakra-ui/react";

import { TransparentButton } from "./buttons/TransparentButton";

export const Contact = () => {
  const { hasCopied, onCopy } = useClipboard("example@example.com");

  return (
    <Flex
      align="center"
      justify="center"
      id="contact"
      direction="column"
      w={{ base: "90%", sm: "80%", md: "30rem" }}
      mx="auto"
      gap="1.5rem"
      mb="2rem"
      pb="5rem"
      mt="5rem"
      sx={{
        "& form": {
          width: "100%",
        },
      }}
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
      <form action="https://api.web3forms.com/submit" method="POST">
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
      </form>
    </Flex>
  );
};
