import React from 'react';
import { format, parseISO } from 'date-fns';

function TitleCard({ title, releaseDate }) {
  const formatDate = format(parseISO(releaseDate), 'MMMM dd yyyy');

  return (
    <>
      <h5 className="card-movie__title">{title}</h5>
      <div className="card-movie__date">{formatDate}</div>
    </>
  );
}

export default TitleCard;
