import React from "react";

class QuerySort extends React.Component {
  clickHandler = event => {
    event.preventDefault();
    this.props.setKey(event.target.value, "query");
  };
  render() {
    return (
      <div className="query-sort">
        <br></br>
        <label className="query-text">SEARCH TERMS: </label>
        <input
          onChange={this.clickHandler}
          type="text"
          value={this.props.query}
          className="query-box"
        ></input>
      </div>
    );
  }
}

export default QuerySort;
