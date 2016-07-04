import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Nav from './Nav.jsx';
import Main from './Main.jsx';
import MyPins from './MyPins.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Home extends Component {

  render() {
    return (
      <div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Nav className="Nav" />
      </MuiThemeProvider>
        { this.props.view === 'home' ? <Main /> : <MyPins /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.view,
  };
};

Home.propTypes = {
  view: PropTypes.string,
};


export default connect(
  mapStateToProps
  )(Home);
