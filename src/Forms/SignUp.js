import { Box, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import BrandButton from "../BrandButton";
import Input from "../theme/Input";
import { FiUser } from "react-icons/fi";
import { FiKey } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import {  FormControl, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    background: "#F0F5FF",
  },
  gridItem: { marginTop: "15px" },
  box: {
    padding: "20px 10vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  inputPaper: { width: "400px", height: "auto", display: "flex" },
});
function SignUp() {
  let history = useHistory();
  function handleClick() {
    history.push("login");
  }
  const classes = useStyles();
  return (
		<Box className={classes.box}>
			<FormControl>
				<Grid container spacing={0}>
					<Grid
						item
						xs={12}
						md={12}
						style={{ display: "flex", justifyContent: "flex-start" }}
					>
						<Typography variant='h1'>Sign Up for Vaccination </Typography>
					</Grid>
					<Grid
						item
						xs={12}
						md={12}
						style={{ display: "flex", justifyContent: "flex-start" }}
					>
						<Typography
							variant='body1'
							style={{ margin: "5px", marginBottom: "20px" }}
						>
							Already have an account?{" "}
							<Link onClick={handleClick}>Sign In</Link>
						</Typography>
					</Grid>

					<Grid item xs={12} md={12} className={classes.gridItem}>
						<Input placeholder='Username' type='text' icon={<FiUser />} />
					</Grid>
					<Grid item xs={12} md={12} className={classes.gridItem}>
						<Input placeholder='Password' type='password' icon={<FiKey />} />
					</Grid>
					<Grid item xs={12} md={12} className={classes.gridItem}>
						<Input placeholder='Email' type='email' icon={<FiMail />} />
					</Grid>
					<Grid item xs={12} md={12} className={classes.gridItem}>
						<FormControl component='fieldset'>
							<RadioGroup
								style={{
									display: "flex",
									flexDirection: "column",
                  
								}}
							>
								<FormControlLabel
									value='patient'
									control={<Radio />}
									label='Patient'
									style={{ display: "flex", }}
								/>
								<FormControlLabel
									value='doctor'
									control={<Radio />}
									label='Doctor'
									style={{ display: "flex" }}
								/>
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item xs={12} md={12} className={classes.gridItem}>
						<BrandButton children='Next' color='primary'></BrandButton>
					</Grid>
				</Grid>
			</FormControl>
		</Box>
	);
}
export default SignUp;
