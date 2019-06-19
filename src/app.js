import React from "react";

import Form from "./components/form/form.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: ""
    };
  }

  saveNameToState = (name, radio) => {
    let count = this.state.count + 1;
    this.setState({ name, count, radio });
  };

  render() {
    return (
      <React.Fragment>
        <Form saveNameToState={this.saveNameToState} />
        <hr />
        <div>Name: {this.state.name}</div>
        <div># of Updates: {this.state.count}</div>
        <div>Radio Button Selection: {this.state.radio}</div>
      </React.Fragment>
    );
  }
}

export default App;
