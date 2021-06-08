import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import HeroPage from './HeroPage';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeroPage />
    </ThemeProvider>
  );
}

export default App;
