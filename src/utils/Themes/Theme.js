import { createTheme } from "@mui/material";
import KenColors from "./kenColors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1760a5",
      light: KenColors.primary,
    },
    secondary: {
      main: KenColors.primary,
    },
    otherColor: {
      main: "#999",
    },
  },
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (phones, portrait 576px and below)
      sm: 600, // Small devices (landscape phones, 576px and up)
      md: 960, // Medium devices (tablets, 768px and up)
      lg: 1280, // Large devices (desktops, 992px and up)
      xl: 1920, // Extra large devices (large desktops, 1200px and up)
    },
  },
});
