import React, { Component } from "react";
import { setUserData } from "./Redux/action";
import { connect } from "react-redux";

class Form extends Component {
  state = {
    user: [
      {
        fName: "",
        lName: ""
      }
    ]
  };

  firstName(e) {
    let updatedValue = e.target.value;
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        fName: updatedValue
      }
    }));
  }
  lastName(e) {
    let updatedValue = e.target.value;
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        lName: updatedValue
      }
    }));
  }
  clickMe() {
    this.props.setUserData(this.state.user);
    this.props.history.push("/display");
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.user.fName}
            onChange={e => this.firstName(e)}
          />
          <input
            type="text"
            value={this.state.user.lName}
            onChange={e => this.lastName(e)}
          />
          <button onClick={() => this.clickMe()}> Submit </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userStore.myData
});

const mapDispatchToProps = { setUserData };

export default connect(mapStateToProps, mapDispatchToProps)(Form);

//export default Form;
