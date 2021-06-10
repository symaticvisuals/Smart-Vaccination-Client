import {
  Box,
  createMuiTheme,
  TextField,
  ThemeProvider,
  Typography,
  withStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";
import InputAdornment from "@material-ui/core/InputAdornment";
import clsx from 'clsx';
const styles = () => ({
  default: {
    borderRadius: "10px",
    textTransform: "none",
    margin:"5px",
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
function Input({ placeholder, type,icon, classes }) {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" style={{ flexDirection: "column", justifyContent: "flex-start"}}>
        <Box >
          <Typography variant="subtitle2" style={{margin: " 0 5px"}}>{placeholder}</Typography>
        </Box> 
        <Box >
          <TextField
            placeholder={placeholder}
            type={type}
            fullWidth
            autoComplete="no"
            InputProps={{
              classes: { root: classes.default },
              startAdornment: (
                <InputAdornment position="start">{icon}</InputAdornment>
              ),
            }}
            variant="outlined"
          ></TextField>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
export default withStyles(styles)(Input);
