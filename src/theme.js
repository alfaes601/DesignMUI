import { createTheme } from "@mui/material";
import { green, lightBlue, yellow } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: yellow[900],
    },
    secondary: {
      main: green[200],
    },
    other: {
      main: lightBlue[900],
    },
  },
});
