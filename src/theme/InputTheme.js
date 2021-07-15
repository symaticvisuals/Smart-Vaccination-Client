import { createMuiTheme } from "@material-ui/core";
const InputTheme = createMuiTheme({
  overrides: {
    type: "dark",
    MuiInputBase: {
      root: {
        // padding: "15px",
        margin: ".7vh 0",
        
        borderRadius: "8px",
        color: "#2E2EA4",
        "&:hover": {
          color:"#000",
          transition: ".5s",
        },
      },
    },
  },
});
export default InputTheme;
