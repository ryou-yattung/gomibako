import { extendTheme } from "@chakra-ui/react";
import { text } from "@fortawesome/fontawesome-svg-core";

const colors = {
  mainO: "#ED7C0A",
  mainG: "#1DB577",
  bg: "#FBFDFF",
  text: "#323333",
};

const fontstyles = {
  about: {
    title: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#CF6801",
    },
    text: { fontSize: "14px", color: "#000000" },
    p: { fontSize: "12px", color: "#000000" },
  },

  localionBox: {
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      color: colors.text,
    },
    p: { fontSize: "12px" },
  },
};

const theme = extendTheme({ colors });
