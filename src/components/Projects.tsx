import { Flex, Heading } from "@chakra-ui/react";
import TailcastImage from "../assets/images/tailcast.png";
import CoinstackImage from "../assets/images/paysafenow.png";
import InnovateImage from "../assets/images/innovate.png";
import FoodhubImage from "../assets/images/foodhub.png";
import { WebsiteBox } from "./WebsiteBox";
import { SectionTitle } from "./SectionTitle";

const projectsData = [
  {
    title: "Tailcast",
    desc: "Dark themed website template built on AstroJS, designed for SaaS startup.",
    techStack: "Astro, React, Tailwind",
    liveLink: "https://tailcast.vercel.app/",
    codeLink: "https://github.com/matt765/Tailcast",
    image: TailcastImage,
  },
  {
    title: "InnoVate",
    desc: "Website for interior design company, created using client-first design rules",
    techStack: "Webflow",
    liveLink: "https://innovate-interior.webflow.io/",
    previewLink:
      "https://preview.webflow.com/preview/innovate-interior?utm_medium=preview_link&utm_source=designer&utm_content=innovate-interior&preview=a7b8553f8c91a11c0d12c3876699a7a4&workflow=preview",
    image: InnovateImage,
  },
  {
    title: "GreenHub",
    desc: "Healthy and organic food restaurant website with lots of images and vivid color palette",
    techStack: "HTML, CSS, JS, Shuffle.dev",
    liveLink: "https://greenhubfoods.vercel.app/",
    image: FoodhubImage,
  },
  {
    title: "PaySafeNow",
    desc: "Example of a website template for a startup that offers safe online payment solutions",
    techStack: "Webflow",
    liveLink: "https://paysafenow.webflow.io/",
    image: CoinstackImage,
    isLight: true,
  },
];

export const Projects = () => {
  return (
    <>
      <Flex id="projects" />
      <SectionTitle title="My recent projects" />
      <Flex
        w="100%"
        justify="center"
        alignItems="center"
        mt="1.5rem"
        mb="2rem"
      >
        <Flex
          w="100%"
          wrap="nowrap"
          justify="flex-start"
          alignItems="center"
          direction="column"
          gap={{ base: "0rem", md: "3rem" }}
          px={{ sm: "1rem", "2xl": "5rem" }}
          // sx={{
          //   "& > :last-child": {
          //     borderWidth: "0",
          //   },
          // }}
        >
          {projectsData.map((project, index) => (
            <WebsiteBox {...project} key={project.title} index={index} />
          ))}
        </Flex>
      </Flex>
    </>
  );
};
