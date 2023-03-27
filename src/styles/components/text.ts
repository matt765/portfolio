import type { ComponentStyleConfig } from "@chakra-ui/react";

export const Text: ComponentStyleConfig = {
  variants: {
    navbarItem: {
      fontWeight: 500,
      letterSpacing: "1px"
    },
    paragraph: {
      fontSize: "1.1rem",
      fontWeight: 400,
      color: "primaryText",
      letterSpacing: "0.5px"
    },
    paragraphLarge: {
      fontSize: "1.2rem",
      fontWeight: 400,
      color: "primaryText",
      letterSpacing: "0.1px"
    },
    paragraphSecondary: {
      fontSize: "1.1rem",
      fontWeight: 400,
      color: "secondaryText",
      letterSpacing: "0.5px"
    },
    experienceSubTitle: {
      fontWeight: 400,
      fontSize: "1.2rem",
    },
    titleColored: {
      fontWeight: 700,
      fontSize: "3.8rem",
      color: "mainColor",
      letterSpacing: "1px",
    },
  },
};
