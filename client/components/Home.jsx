import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav.jsx';
import Main from './Main.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Nav className="Nav" />
      </MuiThemeProvider>
        <Main />
      </div>
    );
  }
}

export default Home;
