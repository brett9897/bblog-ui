import React, { PropTypes } from 'react';
import { IndexLink } from 'react-router';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/styles.scss';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
export class App extends React.Component {
  render() {
    return (
      <div>
        <IndexLink to="/">Home</IndexLink>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};
