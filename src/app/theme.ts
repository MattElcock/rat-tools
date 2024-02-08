import { extendTheme } from "@chakra-ui/react";

const primaryColour = "#cad8f9";
const secondaryColour = "#a6a7f5";
const linkColour = "#4A4BB0";

const theme = extendTheme({
  colors: {
    primary: primaryColour,
    secondary: secondaryColour,
    link: linkColour,
  },
  components: {
    Link: {
      baseStyle: {
        color: linkColour,
        textDecoration: "underline",
      },
    },
    Button: {
      variants: {
        solid: { backgroundColor: linkColour, color: "white" },
        link: { color: linkColour },
        outline: { borderColor: linkColour, color: linkColour },
      },
    },
    Breadcrumb: {
      baseStyle: {
        link: {
          color: linkColour,
          textDecoration: "underline",
        },
      },
    },
  },
});

export default theme;
