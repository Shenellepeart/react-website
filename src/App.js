import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ThemeProvider} from 'styled-components'
import Home from "./pages";
import SignInPage from "./pages/SignIn/SignIn";


const theme = {
  primaryColor: '#01bf71',
  secondaryColor: '#010606',
  white: '#ffffff',
  footerBg: '#101522', 
  videoBg: '#232a34',
  infoSectionBg: '#f9f9f9',
  sideBarBg: '#0d0d0d'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signIn" component={SignInPage} exact />
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
