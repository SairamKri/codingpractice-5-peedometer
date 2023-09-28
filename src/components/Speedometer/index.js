// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncreaseSpeed = () => {
    const {count} = this.state
    console.log('speed increased')
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecreaseSpeed = () => {
    const {count} = this.state
    console.log('speed Decreased')
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer-image"
          alt="speedometer"
        />
        <h1 className="heading">Speed is {count}mph</h1>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph"</p>
        <div className="buttons-container">
          <button
            className="Accelerate-button"
            type="button"
            onClick={this.onIncreaseSpeed}
          >
            Accelerate
          </button>
          <button
            className="Apply-Brakes-button"
            type="button"
            onClick={this.onDecreaseSpeed}
          >
            Apply Brakes
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
