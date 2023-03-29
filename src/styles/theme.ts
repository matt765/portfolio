import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { colors } from "./colors";
import { Headings } from "./components/heading";
import { Text } from "./components/text";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
    "3xl": "110em", // 1760px
  },
  semanticTokens: {
    colors: {
      ...colors,
    },
  },
  styles: {
    global: {
      body: {
        bg: "secondaryBg",
        color: "primaryText",       
        overflowX: "hidden"
      },
      html: {
        scrollBehavior: "smooth",
        bg: "secondaryBg",
      },
      ...Headings,
    },
  },
  components: {
    Text,
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

export default theme;
