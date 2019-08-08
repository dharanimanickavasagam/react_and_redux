import React, { Component } from "react";
import { connect } from "react-redux";

class List extends Component {
  render() {
    console.log(this.props);
    return (
      <ul className="list-group list-group-flush">
        {this.props.articles.map(article => (
          <li className="list-group-item" key={article.id}>
            {article.title}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles.articles
  };
};

export default connect(mapStateToProps)(List);
