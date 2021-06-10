import { Box, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import BrandButton from '../BrandButton';
import Input from '../theme/Input';
import { FiUser } from 'react-icons/fi';
import { FiKey } from 'react-icons/fi';
import image2 from '../images/get-vaccinated.svg';
const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    background: '#F0F5FF'
  },
  gridItem: { marginTop: '15px' },
  box: { padding: '20px 10vw' },
  inputPaper: { width: '400px', height: 'auto', display: 'flex' }
});
function Login() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root}>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box className={classes.box}>
            <Grid container spacing={0}>
              <Grid
                item
                xs={12}
                md={12}
                style={{ display: 'flex', justifyContent: 'flex-start' }}
              >
                <Typography variant="h1">Sign In for Vaccination </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                style={{ display: 'flex', justifyContent: 'flex-start' }}
              >
                <Typography
                  variant="body1"
                  style={{ margin: '5px', marginBottom: '20px' }}
                >
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </Typography>
              </Grid>

              <Grid item xs={12} md={12} className={classes.gridItem}>
                <Input placeholder="Username" type="text" icon={<FiUser />} />
              </Grid>
              <Grid item xs={12} md={12} className={classes.gridItem}>
                <Input
                  placeholder="Password"
                  type="password"
                  icon={<FiKey />}
                />
              </Grid>
              <Grid item xs={12} md={12} className={classes.gridItem}>
                <BrandButton children="Login" color="primary"></BrandButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            background: '#2E2EA4',
            borderRadius: '20px 0 0 20px',
            padding: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src={image2}
            style={{ display: 'flex', width: '70%' }}
            alt="login"
          ></img>
        </Grid>
      </Grid>
    </div>
  );
}
export default Login;
