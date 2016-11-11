import React from 'react';

export class HomePage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs">
            <p>This is my home page!</p>
          </div>
          <div className="col-xs">
            <p>This is col 2</p>
          </div>
        </div>
      </div>
    );
  }
}
