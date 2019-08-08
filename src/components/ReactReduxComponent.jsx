import React, { Component } from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Post";

class ReactReduxComponent extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Articles Retrieved from the store through List Component</h2>
          <List />
        </div>

        <div className="col-md-4 offset-md-1">
          <h2>Add a new article in the Form Component</h2>
          <Form />
        </div>

        <div className="col-md-4 offset-md-1">
          <h2>API Fetching Remote States</h2>
          <Post />
        </div>
      </div>
    );
  }
}

export default ReactReduxComponent;
