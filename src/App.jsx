import React from 'react';
import Portfolio from './Portfolio';
import theme from './theming';
import { ThemeProvider } from '@material-ui/core/styles';
import ProjectView from './ProjectView'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Portfolio />
          </Route>
          <Route path="/:projectName">
            <ProjectView />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
