import React from 'react';

class TypeSort extends React.Component {
  clickHandler = event => {
    this.props.setKey(event.target.value, 'type');
  };
  render() {
    return (
      <div className="type-sort">
        <select
          onChange={this.clickHandler}
          value={this.props.type}
          name="types"
        >
          <option value="">-- Filter by type --</option>
          <option value="crash">Crash</option>
          <option value="hazard">Hazard</option>
          <option value="theft">Theft</option>
          <option value="unconfirmed">Unconfirmed</option>
        </select>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default TypeSort;
