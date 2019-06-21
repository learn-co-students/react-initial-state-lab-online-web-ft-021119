import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render () {
    return (
      <div>
      { this.state.secondsLeft > 0 ? this.state.secondsLeft + ' seconds left before I go boom!' : 'Boom!' }
    </div>
    )
  }
}

// render() {
//     return (
//       <div className="color-box" style={{opacity: this.props.opacity}}>
//         { this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1}/> : null }
//       </div>
//     )
//   }
