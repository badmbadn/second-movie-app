import { Component } from 'react';

export default class MovieService extends Component {
  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(res.status, 'Ошибка в запросе!');
    }
    return await res.json();
  };

  movieAll = async () => {
    const res = await this.getResource(
      'https://api.themoviedb.org/3/search/movie?api_key=6172d636cf75f4c8b2c88807be699419&language=en-US&query=return&page=6&|include_adult=false'
    );
    return res.results;
  };
}
