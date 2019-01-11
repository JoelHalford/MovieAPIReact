import React, { Component } from 'react';

class TestingStuff extends Component {

  static defaultProps = {
    exampleProp1: "Click click click",
    exampleProp2: {
      stuff: 1
    }
  }

  constructor() {
    super();
    this.state = {
      name: "Start clicking, boy",
      number: 1
    }
    this.update = () => {

      this.setState({
        number: this.state.number+1
      });

      if (this.state.number == 5) {
        this.state.name = "Good job, keep clicking!"
      }
      else if (this.state.number == 10) {
        this.state.name = "Ok, you can stop clicking now."
      }
      else if (this.state.number == 15) {
        this.state.name = "I SAID STOP"
        document.getElementById('btn').remove();        
      }
    }
  }

  render() {
    return (
      <div>
        <nav>
        <p>{this.props.exampleProp1}</p>
          <p>{this.state.name}</p>
          <p>{this.state.number.stuff}</p>
          <p>{this.state.number}</p>
          <button id="btn" onClick={this.update}>Click me!</button>
          

        </nav>
      </div>
    );
  }
}

export default TestingStuff;