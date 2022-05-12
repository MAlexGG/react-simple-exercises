import React, {Component} from 'react';
import Bulb from './bulb';

export default class Lamp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTurnedOn : true
    }
  }

  switchLight = () => {
    this.setState({
      isTurnedOn : !this.state.isTurnedOn
    })
  }

  render() {
    return (
      <div>
        <Bulb lampState={this.state.isTurnedOn} />
        <p>The lamp is <b>{this.state.isTurnedOn ? 'on' : 'off'}</b></p>
        <button onClick={this.switchLight}>switch</button>
      </div>
    )
  }
}