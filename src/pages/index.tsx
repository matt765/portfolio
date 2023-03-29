import Head from "next/head";
import { Flex, useColorMode } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navbar, MobileNavbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/buttons/ThemeToggler";

export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>WebDev Portfolio</title>
        <meta name="description" content="Web development portfolio" />
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
        transition="0.5s"
      >
        <Navbar />
        <MobileNavbar />
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <Contact />
        <ThemeToggle />
      </Flex>
    </>
  );
}
