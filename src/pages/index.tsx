import Head from "next/head";
import { Flex, useColorMode } from "@chakra-ui/react";

import { SideBar } from "@/components/SideBar";
import { WebsiteBox } from "@/components/WebsiteBox";
import TailcastImage from "../assets/images/tailcast.png";
import CoinstackImage from "../assets/images/paysafenow.png";
import InnovateImage from "../assets/images/innovate.png";
import FoodhubImage from "../assets/images/foodhub.png";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navbar, MobileNavbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/buttons/ThemeToggler";
import { readBuilderProgram } from "typescript";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>WebDev Portfolio</title>
        <meta
          name="description"
          content="Simple portfolio application for displaying websites  that I've created."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction="column"
        pl={{ base: "0vw", md: "0vw", lg: "13rem" }}     
        bgImage={colorMode === "light" ? "url(mountains.jpg)" : ""}
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        bgSize="cover"
      >
        <Navbar />
        <MobileNavbar />
        <Hero />
        <Services />        
        <Projects />
        <Experience />
        <Contact />
        {/* <SideBar toggleColorMode={toggleColorMode} />  */}
        <ThemeToggle />
      </Flex>
      {/* <Flex
        w="100vw"
        h="100%"
        minH="100vh"
        bgImage={colorMode === "light" ? "url(bg.jpg)" : ""}
        bg={colorMode === "light" ? "" : "secondaryBg"}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        justify="center"
        alignItems="center"
        p={{ base: "1.5rem", "2xl": "1rem" }}
      > */}
      {/* <Flex
          w="100%"
          h="80%"
          wrap="wrap"
          justify="center"
          alignItems="center"
          gap={{ base: "1.6rem", "2xl": "2rem" }}
          px="2vw"
        > */}

      {/* {projectsData.map((project, key) => (
            <WebsiteBox {...project} key={project.title} />
          ))}
        </Flex>
      </Flex>  */}
    </>
  );
}

const projectsData = [
  {
    title: "Tailcast",
    desc: "Dark themed website template built on AstroJS, designed for startup saas business.",
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
