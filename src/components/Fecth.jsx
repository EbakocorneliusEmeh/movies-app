// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function Fecth({ movies }) {
  return (
    <div>
      <h1 className="hh">Latest and Trending</h1>
      <div className="monero">
        {movies.map((item, index) => {
          return (
            <>
              <div className="movie" key={index}>
                <p className="numbers">{index + 1}</p>
                <img
                  src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${item.backdrop_path}`}
                  alt=""
                  className="image-item"
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Fecth;

Fecth.propTypes = {
  movies: PropTypes.object.isRequired,
};
