import { Component } from 'react';
import { Alert } from 'antd';
import { Offline } from 'react-detect-offline';

import MovieList from '../movie-list/MovieList';
import MovieService from '../movie-service/movie-service';
import Spinner from '../spinner/spiner';
import AlertMovie from '../alert/alert';

import './App.css';

export default class App extends Component {
  state = {
    movieData: [],
    loading: true,
    error: false,
  };

  movieService = new MovieService();

  onMovieLoaded = (movieData) => {
    this.setState({
      movieData: movieData,
      loading: false,
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  componentDidMount() {
    this.movieService.movieAll().then(this.onMovieLoaded).catch(this.onError);
  }

  render() {
    const { movieData, loading, error } = this.state;
    const hasData = !(loading || error);
    const errorMessage = error ? <AlertMovie /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <MovieList dataMovie={movieData} /> : null;
    // if (loading) {
    //   return <Spinner />;
    // }

    if (!movieData) {
      return;
    }

    return (
      <div className="App">
        <Offline>
          <Alert type="warning" message="sadness" description="problems with internet" showIcon className="offline" />
        </Offline>
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}
