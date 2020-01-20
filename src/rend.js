import React, { Component } from "react";
import Form from "./form";

export class Rend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userman: {}
    };
  }
  getUser(user) {
    this.setState({
      userman: user
    });
  }

  dispLay() {
    this.props.history.push("/display");
  }

  render() {
    return (
      <div>
        <div>
          <Form
            name={user => this.getUser(user)}
            display={this.state.userman.fName}
          />
        </div>
        <div>
          <button onClick={() => this.dispLay()}>Display</button>
        </div>
      </div>
    );
  }
}
export default Rend;
