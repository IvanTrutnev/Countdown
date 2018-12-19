import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    };
  }

  changeDeadline(e) {
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <Form inline>
          <FormControl placeholder="new data" onChange={e => {this.setState({newDeadline: e.target.value})}}/>
          <Button type="submit" onClick={(e) => {e.preventDefault(); this.changeDeadline()}}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
