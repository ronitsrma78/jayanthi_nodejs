import React from "react";

class ChildC extends React.Component {
  state = {
    name: "john",
  };

  handleChange = () => {
    alert(this.state.name);
    this.setState({
      name: "rohit",
    });
  };

  traditional() {
    alert(this.state.name);
  }

  render() {
    return (
      <div>
        <h3>Child C</h3>
        {this.state.name}
        <button onClick={this.handleChange}>arrow funciton</button>
        <button onClick={this.traditional.bind(this)}>traditional</button>
      </div>
    );
  }
}

export default ChildC;
