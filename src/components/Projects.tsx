import { Flex } from "@chakra-ui/react";

import TailcastImage from "../assets/images/tailcast.png";
import FourWebsitesImage from "../assets/images/4w.png";
import DaydashImage from "../assets/images/daydash.png";
import AppsImage from "../assets/images/tsapps.png";
import FrontEndQuestionsImage from "../assets/images/frontendquestions.png";
import { WebsiteBox } from "./WebsiteBox";
import { SectionTitle } from "./SectionTitle";
import { NavigationAnchor } from "./NavigationAnchor";

const projectsData = [
 
  {
    title: "DayDash.app",
    desc: "Dashboard application designed to be an alternative to default starting page in a browser",
    techStack: "React, TypeScript, ChakraUI",
    liveLink: "https://www.daydash.app/",
    codeLink: "https://github.com/matt765/daydash",
    image: DaydashImage,
  },
  {
    title: "Tailcast",
    desc: "Dark themed website template built on AstroJS, designed for SaaS business.",
    techStack: "Astro, React, Tailwind",
    liveLink: "https://tailcast.vercel.app/",
    codeLink: "https://github.com/matt765/Tailcast",
    image: TailcastImage,
  },
  {
    title: "4 Websites",
    desc: "Few more static websites of mine, combined along with Tailcast into simple showcase application",
    techStack: "React, NextJS, Styled Components, SwiperJS",
    liveLink: "https://4-websites.vercel.app/",
    codeLink: "https://github.com/matt765/4-websites",
    image: FourWebsitesImage,
  },
  {
    title: "TypeScript Apps",
    desc: "Open source collection of small applications written in ReactJS and TypeScript.",
    techStack: "React, TypeScript, ChakraUI",
    liveLink: "https://typescriptapps.netlify.app/",
    codeLink: "https://github.com/matt765/typescript-apps",
    image: AppsImage,
    isLight: true,
  },
  {
    title: "Front-End Questions",
    desc: "Open source application that contains base of front-end related interview questions.",
    techStack: "React, TypeScript, MantineUI",
    liveLink: "https://front-end-questions.vercel.app/",
    codeLink: "https://github.com/matt765/front-end-questions",
    image: FrontEndQuestionsImage,
    isLight: true,
  },
];

export const Projects = () => {
  return (
    <>
      <NavigationAnchor id="projects" />
      <SectionTitle title="My recent projects" />
      <Flex w="100%" justify="center" alignItems="center" mt="1.5rem" mb="2rem">
        <Flex
          w="100%"
          wrap="nowrap"
          justify="flex-start"
          alignItems="center"
          direction="column"
          gap={{ base: "0rem", md: "3rem" }}
          px={{ sm: "1rem", "2xl": "5rem" }}
        >
          {projectsData.map((project, index) => (
            <WebsiteBox {...project} key={project.title} index={index} />
          ))}
        </Flex>
      </Flex>
    </>
  );
};
