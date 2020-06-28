import React from 'react';

class Navigate extends React.Component {
  render() {
    if (!this.props.incidents.length && this.props.page > 1) {
      return (
        <div className="navigate">
          <button
            onClick={() => {
              this.props.updatePage('home');
            }}
            className="pageButtons"
          >
            Home
          </button>
          <button
            onClick={() => {
              this.props.updatePage('previous');
            }}
          >
            Previous Page
          </button>
        </div>
      );
    } else if (this.props.incidents.length && this.props.page === 1) {
      return (
        <div className="navigate">
          <button
            className="pageButtons"
            onClick={() => {
              this.props.updatePage('next');
            }}
          >
            Next Page
          </button>
          <br></br>
        </div>
      );
    } else if (this.props.incidents.length && this.props.page > 1) {
      return (
        <div className="navigate">
          <button
            className="pageButtons"
            onClick={() => {
              this.props.updatePage('previous');
            }}
          >
            Previous Page
          </button>
          <button
            onClick={() => {
              this.props.updatePage('next');
            }}
          >
            Next Page
          </button>
        </div>
      );
    } else if (
      !this.props.incidents.length &&
      this.props.page === 1 &&
      this.props.isLoading === false
    ) {
      return (
        <div className="navigate">
          <button
            onClick={() => {
              this.props.updatePage('home');
            }}
          >
            Home
          </button>
        </div>
      );
    } else {
      return <div className="navigate"></div>;
    }
  }
}

export default Navigate;
