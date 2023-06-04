import { Flex, Heading, Link, Text, useColorMode } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface WebsiteBoxProps {
  title: string;
  desc: string;
  techStack: string;
  liveLink: string;
  codeLink?: string;
  image: StaticImageData;
  previewLink?: string;
  isLight?: boolean;
  index: number;
}

export const WebsiteBox = ({
  title,
  desc,
  techStack,
  liveLink,
  codeLink,
  image,
  previewLink,
  isLight,
  index,
}: WebsiteBoxProps) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      w={{
        base: "85%",
        sm: "80%",
        md: "75%",
        lg: "65%",
        xl: "80%",
        "2xl": "75%",
      }}
      borderWidth="0 0px 0px 0"
      borderStyle="solid"
      borderColor="grayBorder"
      pb="5rem"
      pt="0rem"
      mx="3rem"
      px="0"
      mb="2rem"
      direction={{ base: "column", xl: index % 2 == 0 ? "row" : "row-reverse" }}
      gap={{ base: "2rem", md: "4rem" }}
      alignItems={{ base: "flex-start", xl: "center" }}
      justify="center"
    >
      <Flex
        w={{ base: "100%", sm: "100%", xl: "60%" }}
        borderStyle="solid"
        borderWidth="0px"
        zIndex="0"
        borderColor="grayBorder"
        borderRadius="10px"
        overflow="hidden"
        mb={{ base: "1.5rem", md: "0" }}
        cursor="pointer"
        position="relative"
        bg="rgb(255,255,255,0)"
        transition="0.3s"
        sx={{
          "&:hover": {
            transform: "scale(1.04)",
          },

          "& img": {
            width: "100%",
            opacity: "0.9",
          },
          "& div": {
            width: "100%",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <Image src={image} alt="" />
        </motion.div>
        <Link
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          backgroundColor={
            isLight ? "rgb(49, 151, 149, 0.1)" : "rgb(255,255,255,0.05)"
          }
          opacity="0"
          transition="0.2s"
          href={liveLink}
          isExternal
        />
      </Flex>

      <Flex
        direction="column"
        pl={{ base: "0.2rem", md: "0rem" }}
        w={{ base: "100%", xl: "45%" }}
        ml={{ base: "0", md: index % 2 == 0 ? "-0rem" : "0rem" }}
      >
        <Flex
          color="titleColor"
          fontWeight="500"
          alignItems="flex-start"
          mt={{ base: "-0.4rem", "2xl": "0" }}
          mb="1rem"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <Heading
              as="h3"
              fontSize={{
                base: "1.8rem !important",
                md: "2rem !important",
                "2xl": "2.2rem !important",
              }}
            >
              {title}
            </Heading>
          </motion.div>
        </Flex>
        <Flex color="primaryText" mt="0.5rem">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <Text variant="paragraphLarge">{desc}</Text>
          </motion.div>
        </Flex>
        <Flex
          color="secondaryText"
          mt="1.2rem"
          fontSize={{ base: "0.9rem", "2xl": "1rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <Text variant="paragraphSecondary">{techStack}</Text>
          </motion.div>
        </Flex>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <Flex gap="1.2rem" mt="1.9rem">
            <Link
              w={{ base: "11rem", "2xl": "49%" }}
              h="3rem"
              href={liveLink}
              borderRadius="5px"
              textDecoration="none"
              _hover={{ bg: "coloredButtonHover" }}
              transition="0.2s"
              isExternal
              borderWidth="0px"
              borderStyle="solid"
              borderColor="mainColor"
              bg="coloredButton"
            >
              <Flex
                w="100%"
                h="100%"
                justify="center"
                alignItems="center"
                color="white"
                fontWeight="500"
                fontSize="0.9rem"
                textDecoration="none"
                transition="0.2s"
              >
                Live
              </Flex>
            </Link>
            {(codeLink || previewLink) && (
              <Link
                w={{ base: "11rem", "2xl": "49%" }}
                h="3rem"
                bg="transparentButton"
                href={codeLink ? codeLink : previewLink}
                borderRadius="5px"
                borderWidth="1px"
                borderStyle="solid"
                borderColor="coloredBorder"
                _hover={{ bg: "transparentButtonHover" }}
                transition="0.2s"
                isExternal
                backdropFilter={colorMode === "light" ? "blur(24px)" : ""}
              >
                <Flex
                  w="100%"
                  h="100%"
                  justify="center"
                  alignItems="center"
                  color="primaryText"
                  fontWeight="500"
                  fontSize="0.9rem"
                  transition="0.2s"
                >
                  {codeLink ? "Code" : "Preview"}
                </Flex>
              </Link>
            )}
          </Flex>
        </motion.div>
      </Flex>
    </Flex>
  );
};
