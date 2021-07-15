/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  ThemeProvider,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import InputTheme from "../../theme/InputTheme";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(4),
    },
  },
  color: {
    display: "flex",
    backgroundColor: "#2E2EA4",
  },
  boxDesign: {
    background: "#2E2EA4",
    height: "25vh",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 5vw",
  },
  layoutDesign: {
    background: "#F2F2F2",
    border: "2px solid #2e2ea4",
    margin: "10px 0",
    minHeight: "50vh",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2.6vh 1.1vw",
  },
  text: {
    color: "#fff",
  },
  title: {
    color: "#DEE5FF",
  },
  fields: {
    padding: "0 10px",
  },
}));
function Profile() {
  let [disabled, setDisabled] = useState("disabled");
  let [value, setValue] = useState("Edit Profile");
  const classes = useStyles();

  return (
		<Box>
			<Grid container style={{ padding: "0 12vw" }}>
				<Grid item xs={12}>
					<Box className={classes.boxDesign}>
						<img
							style={{
								width: "15vh",
								height: "15vh",
							}}
							src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Wayfarers&hairColor=BlondeGolden&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Tongue&skinColor=Tanned'
						/>
						<div
							style={{
								display: "flex",
								width: "5px",
								background: "#fff",
								height: "9vh",
								marginLeft: "15px",
							}}
						></div>
						<div
							style={{
								display: "flex",
								paddingLeft: "1vw",
								flexWrap: "wrap",
								flexDirection: "column",
							}}
						>
							<div style={{ display: "flex" }}>
								<Typography variant='h6' className={classes.text}>
									Deepanshu
								</Typography>
								<Typography
									variant='h6'
									className={classes.text}
									style={{ paddingLeft: "5px" }}
								>
									Goel
								</Typography>
							</div>
							<div style={{ display: "flex" }}>
								<Typography className={classes.title}>Designation</Typography>
							</div>
						</div>
					</Box>
				</Grid>
				<Grid item xs={12}>
					<ThemeProvider theme={InputTheme}>
						<Box className={classes.layoutDesign}>
							<Grid container>
								<Grid item xs={12} md={6} className={classes.fields}>
									<TextField
										placeholder='First Name'
										fullWidth='true'
										disabled={disabled}
										variant='outlined'
									/>
								</Grid>
								<Grid item xs={12} md={6} className={classes.fields}>
									<TextField
										placeholder='Last Name'
										fullWidth='true'
										disabled={disabled}
										variant='outlined'
									/>
								</Grid>
								<Grid item xs={12} md={6} className={classes.fields}>
									<TextField
										placeholder='Username'
										fullWidth='true'
										disabled={disabled}
										variant='outlined'
									/>
								</Grid>
								<Grid item xs={12} md={6} className={classes.fields}>
									<TextField
										placeholder='Email Id'
										type='email'
										fullWidth='true'
										disabled={disabled}
										variant='outlined'
									/>
								</Grid>
								<Grid item xs={12} md={6} className={classes.fields}>
									<TextField
										placeholder='Location'
										fullWidth='true'
										disabled={disabled}
										variant='outlined'
									/>
								</Grid>
								<Grid item xs={12} md={6} className={classes.fields}>
									<TextField
										placeholder='Qualification'
										fullWidth='true'
										disabled={disabled}
										variant='outlined'
									/>
								</Grid>
								<Grid item xs={12} md={6} className={classes.fields}>
									<TextField
										placeholder='Aadhaar ID'
										fullWidth='true'
										disabled={disabled}
										variant='outlined'
									/>
								</Grid>
								<Grid item xs={12} md={6} className={classes.fields}>
									<TextField
										placeholder='Contact Number'
										type='number'
										fullWidth='true'
										disabled={disabled}
										variant='outlined'
									/>
								</Grid>
								<Grid item xs={12} className={classes.fields}>
									<Button
										variant='contained'
										color='primary'
										fullWidth='true'
										style={{
											marginTop: "10px",
											padding: "15px 0",
										}}
										onClick={function () {
											if (disabled === "true") {
												setDisabled("");
												setValue("Save");
											} else {
												setDisabled("true");
												setValue("Edit Profile");
											}
										}}
									>
										{value}
									</Button>
								</Grid>
							</Grid>
						</Box>
					</ThemeProvider>
				</Grid>
			</Grid>
		</Box>
	);
}
export default Profile;
