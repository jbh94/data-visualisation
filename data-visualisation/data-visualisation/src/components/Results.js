import React from 'react';
import replacementImage from '../assets/noimage.jpg';

const Results = ({ incidents, isLoading, page }) => {
  const incidentsArr = incidents;
  if (isLoading) {
    return (
      <div className="results">
        <div className="loading-text">
          <p>Loading incidents - please wait...</p>
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  } else if (!isLoading && !incidents.length && page > 1) {
    return (
      <div className="results">
        <div className="loading-text">
          <p>
            No more results found. Please return to the previous page, return to
            the home page or start a new search.
          </p>
        </div>
      </div>
    );
  } else if (!isLoading && !incidents.length && page === 1) {
    return (
      <div className="results">
        <div className="loading-text">
          <p>
            No results found. Please return to the home page or start a new
            search.
          </p>
        </div>
      </div>
    );
  } else if (!isLoading && incidents.length) {
    return (
      <div className="results">
        <ol>
          {incidentsArr.map((incident, index) => {
            const {
              title,
              id,
              description,
              address,
              occurred_at,
              url,
              media,
              type
            } = incident;
            return (
              <div className="list">
                <li key={[index, id]}>
                  <strong>
                    <u>ID {id}</u>: {title}
                  </strong>
                </li>
                <ul>
                  <li key={[index, description]}>
                    <u>Description</u>: {description}
                  </li>
                  <br></br>
                  <li key={[index, address]}>
                    <u>Address</u>: {address}
                  </li>
                  <br></br>
                  <li key={[index, occurred_at]}>
                    <u>Time of occurrence</u>:{' '}
                    {new Date(occurred_at * 1000).toString()}
                  </li>
                  <br></br>
                  <li key={[index, url]}>
                    <u>URL</u>:<a href={url}> {url}</a>
                  </li>
                  <br></br>
                  <li key={[index, type]}>
                    <u>Incident type</u>: {type}
                  </li>
                </ul>
                <img
                  className="article-img"
                  src={
                    media.image_url_thumb
                      ? media.image_url_thumb
                      : replacementImage
                  }
                  alt={description}
                  alt="article-img"
                />
                <hr></hr>
              </div>
            );
          })}
        </ol>
      </div>
    );
  }
};

export default Results;
