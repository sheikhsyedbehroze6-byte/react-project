import { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  // React Component Lifecycle method
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // React Component Lifecycle method
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="clock-container">
        <span>Current Time: {this.state.date.toLocaleTimeString()}</span>
      </div>
    );
  }
}

export default Clock;
