import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { articleAction } from "../actions/articleAction";

class Form extends Component {
  state = {
    title: ""
  };

  handleChange = event => {
    console.log(event.target.id, event.target.value);
    this.setState({ title: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { title } = this.state;
    const id = uuidv1();

    this.props.articleAction({ title, id });
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    articleAction: article => dispatch(articleAction(article))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Form);
