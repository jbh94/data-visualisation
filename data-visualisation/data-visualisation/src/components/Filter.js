import React from 'react';
import PlaceSort from './Place';
import TypeSort from './Type';
import DateSort from './Time';
import QuerySort from './Query';

class Filter extends React.Component {
  state = {
    location: '',
    type: '',
    toDate: '',
    fromDate: '',
    query: '',
    isSubmitted: false
  };

  setKey = (value, key) => {
    this.setState(currentState => {
      const newState = { ...currentState, isSubmitted: false, [key]: value };
      return newState;
    });
  };

  submitFilter = event => {
    event.preventDefault();
    this.props.submit(
      this.state.location,
      this.state.type,
      this.state.fromDate,
      this.state.toDate,
      this.state.query
    );
    this.setState(currentState => {
      const newState = {
        ...currentState,
        isSubmitted: true,
        location: '',
        type: '',
        fromDate: '',
        toDate: '',
        query: ''
      };
      return newState;
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitFilter}>
          <PlaceSort setKey={this.setKey} location={this.state.location} />
          <TypeSort setKey={this.setKey} type={this.state.type} />
          <DateSort
            setKey={this.setKey}
            fromDate={this.state.fromDate}
            toDate={this.state.toDate}
            isSubmitted={this.state.isSubmitted}
          />
          <QuerySort setKey={this.setKey} query={this.state.query} />
          <br></br>
          <button>Submit</button>
          <br></br>
          <hr></hr>
        </form>
      </div>
    );
  }
}

export default Filter;
