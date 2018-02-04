import React, { Component } from 'react';
import generateExample from '../util/nanoid-example';
import './Example.css';

class Example extends Component {
  render () {
    if (
      this.props.state.alphabet.length < 2
      || this.props.state.size <= 1
    ) {
      return null;
    }

    return (
      <div className="Example">
        <h3>Example of this usage</h3>
        <code className="Example-code"><pre>
          {generateExample(this.props.state)}
        </pre></code>
      </div>
    );
  }
}

export default Example;