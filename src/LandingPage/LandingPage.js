import React from 'react';
import PropTypes from 'prop-types';

const LandingPage = (props) => {
  const getCrawl = () => {
    if (props.filmText.length) {
      const random = parseInt(Math.random() * 7);
      const randomFilm = props.filmText[random];
      return (
        <div className="crawl">
          <p>{randomFilm.openingCrawl}</p>
          <p>{randomFilm.title}</p>
          <h1>{randomFilm.episodeId}</h1>
        </div>
      );
    }
  };

  return (
    <div className="comp-container">
      <div className="fade" />
      <section className="crawl-container">
        {getCrawl()}
      </section>
    </div>
  );
};

LandingPage.propTypes = {
  filmText: PropTypes.array.isRequired,
};

export default LandingPage;
