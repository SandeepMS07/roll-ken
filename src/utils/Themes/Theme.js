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
});
