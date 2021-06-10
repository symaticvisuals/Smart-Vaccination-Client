import { BrowserRouter as Switch, Route } from "react-router-dom";
import HeroPage from "./HeroPage";
import Login from "./Forms/Login";
import SignUp from "./Forms/SignUp";
import { Suspense } from "react";
import Loading from "./Loading";
const renderRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route path="/" exact render={(props) => <HeroPage {...props} />} />
      <Route path="/login" exact render={(props) => <Login {...props} />} />
      <Route path="/signup" exact render={(props) => <SignUp {...props} />} />
    </Switch>
  </Suspense>
);
function Routes() {
  return renderRoutes({});
}
export default Routes;
