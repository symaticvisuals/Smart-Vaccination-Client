import {
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import image from "../images/vaccine-homepage.svg";
const useStyles = makeStyles({
  root: {
    height: "80vh",
  },
  img: {
    width: "45vh",
    display: "flex",
  },
});

function Home() {
    const classes = useStyles();
    return (
      <Container fixed>
        <Grid
          className={classes.root}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            md={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
          <Typography variant="h1">New Change Sample</Typography>
            <img src={image} className={classes.img} alt="vaccine" />
          </Grid> 
          <Grid
            item
            xs={12}
            md={5}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Typography variant="h1" style={{ color: "#09095B" }}>
              Smart Vaccination
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              style={{ paddingTop: "10px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              bibendum tortor dui, vitae viverra lectus elementum id. Vivamus in
              est non ante pharetra scelerisque. Quisque sed massa nisi. Proin
              fringilla feugiat condimentum. Vivamus orci turpis, facilisis eu
              enim non, molestie pulvinar lacus. Nullam sollicitudin sapien
              ipsum, vitae eleifend nulla convallis at.{" "}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
}
export default Home;