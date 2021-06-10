import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import HeroPage from './HeroPage';
import theme from './theme';
import {
  BrowserRouter as Router,
 
} from "react-router-dom"
import Routes from './Routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
