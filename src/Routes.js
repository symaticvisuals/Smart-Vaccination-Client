import { BrowserRouter as Switch, Route } from "react-router-dom";
import HeroPage from "./HeroPage";
import Login from "./Forms/Login";
import SignUp from "./Forms/SignUp";
import { Suspense } from "react";

import User from "./Home/User";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Box } from "@material-ui/core";
import MainLayout from "./Dashboard/MainLayout";
function Loading() {
  return (
    <Box style={{ display: 'flex', justifyContent: 'center', height: "100vh", alignItems: 'center' }} ><CircularProgress /></Box>);

}
const renderRoutes = () => (
  <Suspense fallback={<CircularProgress />}>
    <Switch>
      <Route path="/" exact render={(props) => <HeroPage {...props} />} />
      <Route
        path="/login"
        exact
        render={(props) => <User comp={<Login />} {...props} />}
      />
      <Route
        path="/signup"
        exact
        render={(props) => <User comp={<SignUp />} {...props} />}
      />
      <Route path="/dashboard" exact render={(props) => <MainLayout {...props} />} />
      
    </Switch>
  </Suspense>
);
function Routes() {
  return renderRoutes({});
}
export default Routes;
