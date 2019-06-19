import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      radio: ""
    };
  }

  handleChange = event => {
    let targetName = event.target.name;
    let change = event.target.value;
    this.setState({ [targetName]: change });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.saveNameToState(this.state.name, this.state.radio);
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" onChange={this.handleChange} />
          <label>
            <input
              type="radio"
              value="Foo"
              name="radio"
              checked={this.state.radio === "Foo"}
              onChange={this.handleChange}
            />
            Foo
          </label>
          <label>
            <input
              type="radio"
              value="Bar"
              name="radio"
              checked={this.state.radio === "Bar"}
              onChange={this.handleChange}
            />
            Bar
          </label>
          <label>
            <input
              type="radio"
              value="Baz"
              name="radio"
              checked={this.state.radio === "Baz"}
              onChange={this.handleChange}
            />
            Baz
          </label>
          <button type="submit">Submit</button>
        </form>
        <div>Name from Form State: {this.state.name}</div>
        <div>Radio Selection from Form State: {this.state.radio}</div>
      </React.Fragment>
    );
  }
}

export default Form;
