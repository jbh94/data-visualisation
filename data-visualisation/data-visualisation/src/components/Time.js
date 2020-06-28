import React from 'react';

class DateSort extends React.Component {
  state = {
    fromDate: this.props.fromDate,
    toDate: this.props.toDate
  };
  fromClickHandler = event => {
    event.preventDefault();
    const newDate = new Date(this.state.fromDate).getTime() / 1000;
    if (!isNaN(newDate)) {
      this.props.setKey(newDate, 'fromDate');
    }
  };
  toClickHandler = event => {
    event.preventDefault();
    const newDate = new Date(this.state.toDate).getTime() / 1000;
    if (!isNaN(newDate)) {
      this.props.setKey(newDate, 'toDate');
    }
  };
  fromHandler = event => {
    event.preventDefault();
    this.setState({
      fromDate: event.target.value
    });
  };
  toHandler = event => {
    event.preventDefault();
    this.setState({
      toDate: event.target.value
    });
  };

  clear = event => {
    event.preventDefault();
    if (this.props.isSubmitted) {
      this.setState({
        fromDate: '',
        toDate: ''
      });
    }
  };

  render() {
    return (
      <div className="custom-select">
        <div className="date-sort">
          <label className="date-text">FROM: </label>
          <input
            onClick={this.clear}
            onChange={this.fromHandler}
            onBlur={this.fromClickHandler}
            value={this.state.fromDate}
            className="date-box"
            type="date"
            name="from-date"
          ></input>
          <label className="date-text"> TO: </label>
          <input
            onClick={this.clear}
            onChange={this.toHandler}
            onBlur={this.toClickHandler}
            value={this.state.toDate}
            className="date-box"
            type="date"
            name="to-date"
          ></input>
        </div>
      </div>
    );
  }
}

export default DateSort;
