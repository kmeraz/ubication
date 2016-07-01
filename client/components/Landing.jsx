import React from 'react';
import Nav from './Nav.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const Landing = () => (
 <div>
   <MuiThemeProvider muiTheme={getMuiTheme()}>
     <Nav className="Nav" />
   </MuiThemeProvider>

 </div>
);

export default Landing;
