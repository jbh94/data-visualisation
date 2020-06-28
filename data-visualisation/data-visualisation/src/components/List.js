import React from 'react';
import Results from './Results';
import { getData } from './fetch-data';
import Filter from './Filter';
import Navigate from './Navigate';

class List extends React.Component {
  state = {
    incidents: [],
    isLoading: true,
    location: '',
    type: '',
    toDate: '',
    fromDate: '',
    page: 1,
    query: ''
  };

  componentDidMount() {
    getData('https://bikewise.org:443/api/v2/incidents').then(results => {
      this.setState({
        incidents: results.incidents,
        isLoading: false
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.location !== this.state.location ||
      prevState.type !== this.state.type ||
      prevState.toDate !== this.state.toDate ||
      prevState.fromDate !== this.state.fromDate ||
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      let params = {};
      Object.keys(this.state).forEach(key => {
        if (key === 'location' && this.state[key].length > 0) {
          params['proximity'] = this.state.location;
        }
        if (key === 'type' && this.state[key].length > 0) {
          params['incident_type'] = this.state.type;
        }
        if (key === 'fromDate' && typeof this.state[key] === 'number') {
          params['occurred_after'] = this.state.fromDate;
        }
        if (key === 'toDate' && typeof this.state[key] === 'number') {
          params['occurred_before'] = this.state.toDate;
        }
        if (key === 'page' && typeof this.state[key] === 'number') {
          params['page'] = this.state.page;
        }
        if (key === 'query' && this.state[key].length > 0) {
          params['query'] = this.state.query;
        }
      });
      this.setState({
        isLoading: true
      });
      getData('https://bikewise.org:443/api/v2/incidents', params).then(
        results => {
          this.setState({
            incidents: results.incidents,
            isLoading: false
          });
        }
      );
    }
    window.scrollTo(0, 0);
  }

  updatePage = direction => {
    if (direction === 'next') {
      this.setState(currentState => {
        const newState = { ...currentState, page: this.state.page + 1 };
        return newState;
      });
    } else if (direction === 'previous') {
      this.setState(currentState => {
        const newState = { ...currentState, page: this.state.page - 1 };
        return newState;
      });
    } else if (direction === 'home') {
      this.setState(currentState => {
        const newState = {
          ...currentState,
          location: '',
          type: '',
          toDate: '',
          fromDate: '',
          page: 1,
          query: ''
        };
        return newState;
      });
    }
  };

  submit = (location, type, fromDate, toDate, query) => {
    this.setState(currentState => {
      const newState = {
        ...currentState,
        location,
        type,
        fromDate,
        toDate,
        query
      };
      return newState;
    });
  };

  render() {
    return (
      <div>
        <Filter submit={this.submit} />
        <Results
          incidents={this.state.incidents}
          isLoading={this.state.isLoading}
          page={this.state.page}
        />
        <Navigate
          updatePage={this.updatePage}
          page={this.state.page}
          incidents={this.state.incidents}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default List;
