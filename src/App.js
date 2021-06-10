import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import { createBrowserHistory } from "history";
import theme from './theme';
import {
  BrowserRouter as Router,
 
} from "react-router-dom"
import Routes from './Routes'
const history = createBrowserHistory();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Routes/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
