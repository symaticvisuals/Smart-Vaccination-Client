import { Box, Grid, makeStyles} from "@material-ui/core";
import image2 from "../images/get-vaccinated.svg";
const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    background: "#F0F5FF",
  },
  gridItem: { marginTop: "15px" },
  box: { padding: "20px 10vw" },
  inputPaper: { width: "400px", height: "auto", display: "flex" },
});
function User({ comp, ...props }) {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root}>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Box style={{display: "flex"}}>{comp}</Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            background: "#2E2EA4",
            borderRadius: "20px 0 0 20px",
            padding: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={image2}
            style={{ display: "flex", width: "70%" }}
            alt="login"
          ></img>
        </Grid>
      </Grid>
    </div>
  );
}
export default User;
