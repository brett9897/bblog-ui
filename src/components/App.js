import React, { PropTypes } from 'react';
import { IndexLink } from 'react-router';
import 'bootstrap';
import 'normalize.css';
import '../styles/styles.scss';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
export class App extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-dark bg-primary">
        <IndexLink to="/" className="navbar-brand">Learn From It</IndexLink>
      </nav>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};
