import React from 'react';
import Portfolio from './Portfolio';
import theme from './theming';
import { ThemeProvider } from '@material-ui/core/styles';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
