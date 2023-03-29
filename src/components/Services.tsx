import { Flex, Heading, Icon, Text } from "@chakra-ui/react";

import { ReactLogo } from "@/assets/icons/react";
import { TypescriptLogo } from "@/assets/icons/typescript";
import { WebflowLogo } from "@/assets/icons/webflow";
import { AstroLogo } from "@/assets/icons/astro";
import { TailwindLogo } from "@/assets/icons/tailwind";
import { SectionTitle } from "./SectionTitle";

interface ServicesBoxProps {
  title: string;
  text: string;
  logoArray: React.FC<React.SVGProps<SVGSVGElement>>[];
}

const servicesData = [
  {
    title: "ReactJS applications",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget velit turpis. Nunc sagittis vel libero sed tristique. ",
    logoArray: [ReactLogo, TypescriptLogo],
  },
  {
    title: "Handcoded websites",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget velit turpis. Nunc sagittis vel libero sed tristique. ",
    logoArray: [AstroLogo, TailwindLogo],
  },
  {
    title: "Webflow websites",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget velit turpis. Nunc sagittis vel libero sed tristique. ",
    logoArray: [WebflowLogo],
  },
];

const ServicesBox = ({ title, text, logoArray }: ServicesBoxProps) => (
  <Flex
    w={{
      base: "90%",
      sm: "70%",
      md: "24rem",
      xl: "21vw",
      "2xl": "19.5rem",
      "3xl": "20.5em",
    }}
    h={{ base: "unset", md: "23rem", lg: "26rem" }}
    borderWidth="1px"
    borderColor="grayBorder"
    borderStyle="solid"
    borderRadius="15px"
    direction="column"
    justify="flex-start"
    alignItems="center"
    gap="1rem"
    textAlign="center"
    mx={{ base: "10%", lg: "0%" }}
    pt="3rem"
    _hover={{ bg: "secondaryBgHover" }}
    transition="0.3s"
    backdropFilter="blur(24px)"
    pb={{ base: "2rem", lg: "0" }}
    px={{ base: "2rem", lg: "2rem" }}
    zIndex="0"
  >
    <Flex gap="1rem" h="4.5rem" alignItems="flex-start">
      {logoArray.map((logo, index) => (
        <Icon as={logo} key={index} w="36px" minW="36px" maxH="36px" />
      ))}
    </Flex>
    <Flex justify="center" alignItems="flex-start" px="2rem" mb="1rem">
      <Heading as="h4">{title}</Heading>
    </Flex>
    <Text variant="paragraphSecondary">{text}</Text>
  </Flex>
);

export const Services = () => {
  return (
    <>
      <SectionTitle title="What I offer" />
      <Flex
        w="100%"
        justify="center"
        alignItems="center"
        direction="column"
        id="services"
        mb="10rem"
      >
        <Flex
          justify="center"
          alignItems="center"
          direction="row"
          gap={{ base: "2rem", lg: "1.7rem", xl: "1.4rem", "2xl": "2rem" }}
          px={{ base: "1rem", md: "15%", lg: "20%", xl: "0rem" }}
          wrap={{ base: "wrap", md: "wrap", xl: "wrap", "2xl": "nowrap" }}
          mt="0rem"
        >
          {servicesData.map((service, index) => (
            <ServicesBox
              title={service.title}
              text={service.text}
              logoArray={service.logoArray}
              key={`${service.title}-${index}`}
            />
          ))}
        </Flex>
      </Flex>
    </>
  );
};
