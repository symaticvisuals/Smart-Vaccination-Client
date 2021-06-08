import {
  Box,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import BrandButton from "../BrandButton";
import image2 from "../images/get-vaccinated.svg";
const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  input: {
    padding: "10px 5px",
    
    display: "flex",
  },
  paper: {
    width: "500px",
    minHeight: "250px",
    display: "flex",
    justifyContent: "center",
    padding: "20px 10px",
    borderRadius: "10px"
  },
  inputPaper: { width: "400px", height: "auto", display: "flex" },
  label: {},
});
function Login() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root}>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper elevation={3} className={classes.paper}>
            <Grid container spacing={0}>
              <Grid
                item
                xs={12}
                md={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Typography variant="h1">
                  Login
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <TextField
                  fullWidth
                  required
                  type="text"
                  variant="filled"
                  placeholder="Username"
                  className={classes.input}
                ></TextField>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <TextField
                  fullWidth
                  required
                  type="text"
                  variant="filled"
                  placeholder="Password"
                  className={classes.input}
                ></TextField>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <BrandButton children="Login" color="primary" widthC="490px"></BrandButton>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default Login;
{
  /*<Grid
          item
          xs={12}
          md={5}
          style={{
            background: "#09095B",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={image2} style={{ display: "flex" }}></img>
        </Grid> 
  <Grid
          item
          xs={12}
          md={7}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "4vw",
              width: "100vw",
            }}
          >
            <Box style={{ display: "flex" }}>
              <Typography variant="h1">Login</Typography>
            </Box>
            <br></br>
            <Box style={{ display: "flex" }}>
              <form noValidate autoComplete="off" style={{ display: "flex" }}>
                <Grid container spacing={4}>
                  <Grid item xs={3} md={4}>
                    <label for="username" className={classes.label}>
                      username
                    </label>
                  </Grid>
                  <Grid item xs={3} md={4}>
                    <input
                      type="text"
                      name="username"
                      className={classes.input}
                    ></input>
                  </Grid>
                  <Grid item xs={3} md={4}>
                    <label for="username" className={classes.label}>
                      username
                    </label>
                  </Grid>
                  <Grid item xs={9} md={8}>
                    <input
                      type="text"
                      name="username"
                      className={classes.input}
                    ></input>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        </Grid>
          */
}
