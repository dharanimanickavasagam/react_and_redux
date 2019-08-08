import React, { Component } from "react";
import { connect } from "react-redux";
import { userAction } from "./actions/userAction";

let userState;
class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event) {
    console.log(this.props);
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    return (
      <React.Fragment>
        "hello " + userState + "!"
        <input
          type="text"
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "20px 0"
          }}
          onChange={this.onUpdateUser}
        />
        User is here : {this.props.user}
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ user }) => {
  userState = user;
  return user;
};

const mapActionsToProps = {
  onUpdateUser: userAction
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
