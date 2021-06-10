import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { createMuiTheme, ThemeProvider, withStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const styles = () => ({
  default: {
    borderRadius: "10px",
    textTransform: "none",
    padding: "15px 20px",
    marginTop: "10px",
  },
});
const theme = createMuiTheme({
  primary: {
    main: "#2E2EA4",
    contrastText: "#FFF5F8",
    dark: "#09095B",
  },
  secondary: {
    main: "#EFBE42",
    contrastText: "#121212",
    dark: "#EFAE0A",
  },
});

function BrandButton({ color, children, classes, routePath }) {
   let history = useHistory();
  function handleClick() {
    history.push(routePath);
  
}
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        className={classes.default}
        color= "primary"
        fullWidth
        onClick={handleClick}
      >
        {children}
      </Button>
    </ThemeProvider>
  );
}
BrandButton.prototypes = {
  color: PropTypes.string,
  routePath: PropTypes.string,
};
export default withStyles(styles)(BrandButton);
