import { createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2E2EA4",
      contrastText: "#FFF5F8",
      dark: "#09095B",
    },
    secondary: {
      main: "#EFBE42",
      dark: "#EFAE0A",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: { fontWeight: "600", fontSize: "30px" },
    h2: { fontWeight: "500", fontSize: "24px", color: "#09095B" },
    subtitle2: { fontWeight: "500", fontSize: "16px", fontFamily: "Poppins" },
    body1: { fontWeight: "400", fontSize: "16px", fontFamily: "Lato" },
  },
  shadows: ["none"],
});
export default theme;
