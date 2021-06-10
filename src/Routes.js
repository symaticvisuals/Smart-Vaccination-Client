import { BrowserRouter as  Switch, Route } from 'react-router-dom';
import HeroPage from './HeroPage'
import Login from './Forms/Login'
import SignUp from './Forms/SignUp'
const renderRoutes = ()=>(
  <Switch>
      <Route
        path="/"
        exact
        render={props => (
            <HeroPage {...props} />
        )}
      />
      <Route
        path="/login"
        exact
        render={props => (
            <Login {...props} />
        )}
      />
      <Route
        path="/signup"
        exact
        render={props => (
            <SignUp {...props} />
        )}
      />
  </Switch>
);
function Routes (){
return renderRoutes({});
}
export default Routes;