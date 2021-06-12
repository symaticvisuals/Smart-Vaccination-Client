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
function Input({  classes,...props }) {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" style={{ flexDirection: "column", justifyContent: "flex-start"}}>
        <Box >
          <Typography variant="subtitle2" style={{margin: " 0 5px"}}>{props.placeholder}</Typography>
        </Box> 
        <Box >
          <TextField
            placeholder={props.placeholder}
            type={props.type}
            fullWidth
            autoComplete="no"
            value={props.value}
            
            InputProps={{
              classes: { root: classes.default },
              startAdornment: (
                <InputAdornment position="start">{props.icon}</InputAdornment>
              ),
            }}
            disabled={ props.isDisabled}
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
  isDisabled : PropTypes.string,
};
export default withStyles(styles)(Input);
