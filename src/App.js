import { ThemeProvider } from "@material-ui/core/styles";
import './App.css';
import { Home } from "./features/home/Home";
import theme from './utils/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
