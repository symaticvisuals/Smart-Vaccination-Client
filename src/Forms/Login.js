import { Box, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import BrandButton from "../BrandButton";
import Input from "../theme/Input";
import { FiUser } from "react-icons/fi";
import { FiKey } from "react-icons/fi";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    background: "#F0F5FF",
  },
  gridItem: { marginTop: "15px" },
  box: { padding: "20px 10vw" ,display: "flex", flexDirection: "column", justifyContent: "center"},
  inputPaper: { width: "400px", height: "auto", display: "flex" },
});
function Login() {
  let history = useHistory();
  function handleClick() {
    history.push("signup");
  }
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          md={12}
          style={{ }}
        >
          <Typography variant="h1">Sign In for Vaccination </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Typography
            variant="body1"
            style={{ margin: "5px", marginBottom: "20px" }}
          >
            Don't have an account? <Link onClick={handleClick}>Sign Up</Link>
          </Typography>
        </Grid>

        <Grid item xs={12} md={12} className={classes.gridItem}>
          <Input placeholder="Username" type="text" icon={<FiUser />} />
        </Grid>
        <Grid item xs={12} md={12} className={classes.gridItem}>
          <Input placeholder="Password" type="password" icon={<FiKey />} />
        </Grid>
        <Grid item xs={12} md={12} className={classes.gridItem}>
          <BrandButton children="Login" color="primary"></BrandButton>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Login;
