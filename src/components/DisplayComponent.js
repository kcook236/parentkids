import React, { Component } from 'react';


class DisplayComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>State, props, children, fun! </h3>
          <h5>Message</h5>
          <p>{this.props.sayWhat}</p>
        </div>
      </div>
    );
  }
}
export default DisplayComponent
