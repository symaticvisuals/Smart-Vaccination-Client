import { BrowserRouter as Switch, Route } from "react-router-dom";
import HeroPage from "./HeroPage";
import Login from "./Forms/Login";
import SignUp from "./Forms/SignUp";
import { Suspense } from "react";

import User from "./Home/User";
import CircularProgress from "@material-ui/core/CircularProgress";

import MainLayout from "./Dashboard/MainLayout";
import Profile from "./Dashboard/Doctor/Profile";
import Appointments from "./Dashboard/Doctor/Appointments";
import Slots from "./Dashboard/Doctor/Slots";
import Vaccinated from "./Dashboard/Doctor/Vaccinated";
import Achievements from "./Dashboard/Doctor/Achievements";

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
      <Route
        path="/dashboard"
        exact
        render={(props) => <MainLayout {...props} />}
      />
      <Route
        path="/Profile"
        exact
        render={(props) => <MainLayout page={<Profile />} {...props} />}
      />
      <Route
        path="/Appointments"
        exact
        render={(props) => <MainLayout page={<Appointments />} {...props} />}
      />
      <Route
        path="/Vaccinated"
        exact
        render={(props) => <MainLayout page={<Vaccinated />} {...props} />}
      />
      <Route
        path="/Achievements"
        exact
        render={(props) => <MainLayout page={<Achievements />} {...props} />}
      />
      <Route
        path="/Slots"
        exact
        render={(props) => <MainLayout page={<Slots />} {...props} />}
      />
    </Switch>
  </Suspense>
);
function Routes() {
  return renderRoutes({});
}
export default Routes;
