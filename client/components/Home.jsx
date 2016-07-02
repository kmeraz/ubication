import React from 'react';
import Nav from './Nav.jsx';
import Main from './Main.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const Home = () => (
  <div>
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Nav className="Nav" />
  </MuiThemeProvider>
    <Main />
  </div>
);

export default Home;
