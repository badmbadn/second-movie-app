import React from 'react';

import './MovieItem.css';
import DescriptionCard from '../description-card/description-card';
import TitleCard from '../title-card/title-card';

function MovieItem(props) {
  const { title, overview, poster_path, release_date } = props.item;
  return (
    <article className="card-movie">
      <div className="card-movie__left">
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="card-movie__img" alt="icon" />
      </div>
      <div className="card-movie__right">
        <TitleCard title={title} releaseDate={release_date} />
        <div className="card-movie__genres">
          <span>action</span>
          <span>drama</span>
        </div>
        <DescriptionCard overview={overview} />
      </div>
    </article>
  );
}

export default MovieItem;
