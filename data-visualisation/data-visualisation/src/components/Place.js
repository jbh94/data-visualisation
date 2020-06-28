import React from "react";

class PlaceSort extends React.Component {
  clickHandler = event => {
    event.preventDefault();
    this.props.setKey(event.target.value, "location");
  };
  render() {
    return (
      <div className="custom-select">
        <div className="type-sort">
          <select
            onChange={this.clickHandler}
            value={this.props.location}
            name="states"
          >
            <option value="">-- Filter by location --</option>
            <option value="Chicago">Chicago</option>
            <option value="Florida">Florida</option>
            <option value="Houston">Houston</option>
            <option value="Seattle">Seattle</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="dallas">Dallas</option>
            <option value="Toronto">Toronto</option>
            <option value="Philadelphia">Philadelphia</option>
            <option value="Portland">Portland</option>
          </select>
        </div>
        <br></br>
      </div>
    );
  }
}

export default PlaceSort;
