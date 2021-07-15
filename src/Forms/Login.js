import {
	Box,
	Grid,
	Link,
	makeStyles,
	Typography,
	TextField,
	FormControl,
} from "@material-ui/core";
import BrandButton from "../BrandButton";
import InputAdornment from "@material-ui/core/InputAdornment";
// import Input from "../theme/Input";
import { FiUser } from "react-icons/fi";
import { FiKey } from "react-icons/fi";
import { useHistory } from "react-router-dom";
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
function Login() {
	let history = useHistory();
	function handleClick() {
		history.push("signup");
	}
	const classes = useStyles();
	return (
		<Box className={classes.box}>
			<FormControl fullWidth>
				<Grid container spacing={0}>
					<Grid item xs={12} md={12} style={{}}>
						<Typography variant='h1'>Sign In for Vaccination </Typography>
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
							Don't have an account? <Link onClick={handleClick}>Sign Up</Link>
						</Typography>
					</Grid>
					<Grid item xs={12} md={12} className={classes.gridItem}>
						<TextField
							placeholder='First Name'
							fullWidth='true'
							variant='outlined'
							InputProps={{
								classes: { root: classes.default },
								startAdornment: (
									<InputAdornment position='start'>
										<FiUser />
									</InputAdornment>
								),
							}}
						></TextField>
					</Grid>
					<Grid item xs={12} md={12} className={classes.gridItem}>
						<TextField
							placeholder='Password'
							type='password'
							fullWidth='true'
							variant='outlined'
							InputProps={{
								classes: { root: classes.default },
								startAdornment: (
									<InputAdornment position='start'>
										<FiKey />
									</InputAdornment>
								),
							}}
						/>
					</Grid>
					<Grid item xs={12} md={12} className={classes.gridItem}>
						<BrandButton children='Login' color='primary'></BrandButton>
					</Grid>
				</Grid>
			</FormControl>
		</Box>
	);
}
export default Login;
