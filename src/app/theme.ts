import { defineStyle, defineStyleConfig, extendTheme } from "@chakra-ui/react";

const brandColours = {
  50: "#e3f2ff",
  100: "#b9d5f9",
  200: "#8fb8f0",
  300: "#639ce9",
  400: "#3980e1",
  500: "#2166c8",
  600: "#16509c",
  700: "#0d3970",
  800: "#042246",
  900: "#000b1c",
};

const theme = extendTheme({
  colors: {
    brand: brandColours,
  },
  components: {
    Link: {
      baseStyle: {
        color: brandColours[300],
        textDecoration: "underline",
      },
    },
    Button: {
      variants: {
        solid: { backgroundColor: brandColours[300], color: "white" },
        link: { color: brandColours[300] },
      },
    },
    Breadcrumb: {
      baseStyle: {
        link: {
          color: brandColours[300],
          textDecoration: "underline",
        },
      },
    },
  },
});

export default theme;
