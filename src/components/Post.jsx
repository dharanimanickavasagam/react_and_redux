import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/articleAction";

export class Post extends Component {
  componentDidMount() {
    this.props.getData();
    console.log("Props", this.props.getData());
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  console.log("state", state);
  return {
    articles: state.articles.remoteArticles.slice(0, 10)
  };
}
export default connect(
  mapStateToProps,
  { getData }
)(Post);
