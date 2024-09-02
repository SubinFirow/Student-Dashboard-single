// theme.js
import { createTheme } from "@mui/material/styles";

const lightTheme = {
  palette: {
    mode: "light",
    common: {
      // black
      primary: "#121212",
      // white
      secondary: "#FAF9F6",
      // dark gray
      shadow: "#1E1E1E",
      // gray
      overlay: "#6F6F6F",
      // purple
      focus: "#6279FB",
      // sky
      vibrant: "#61CCFA",
      // green
      tertiary: "#D9FA54",
      // yellow
      quaternary: "#F5FA61",
      // macos red
      macRed: "#ff4d4d",
    },
  },
};

const darkTheme = {
  palette: {
    mode: "dark",
    common: {
      // black
      primary: "#121212",
      // white
      secondary: "#FAF9F6",
      // dark gray
      shadow: "#1E1E1E",
      // gray
      overlay: "#6F6F6F",
      // purple
      focus: "#6279FB",
      // sky
      vibrant: "#61CCFA",
      // green
      tertiary: "#D9FA54",
      // yellow
      quaternary: "#F5FA61",
    },
  },
};

export const getTheme = () => {
  return createTheme(darkTheme);
};
