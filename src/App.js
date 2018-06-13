import React, { Component } from "react";
import styled, { css } from "react-emotion";
import "./App.css";

const api =
  "https://api.themoviedb.org/3/movie/popular?api_key=545627a88a5efecc1bd8a6c56f801111&language=en-US&page=1";

const imageApi = "http://image.tmdb.org/t/p/w185/";
/*
adult: false
backdrop_path: "/h7L0fqwCHfJOYe7cQG2rAMhlfHh.jpg"
genre_ids: (4) [80, 35, 28, 53]
id: 402900
original_language: "en"
original_title: "Ocean's 8"
overview: "Debbie Ocean, a criminal mastermind, gathers a crew of seven other female thieves to pull off the heist of the century at New York's annual Met Gala."
popularity: 93.938358
poster_path: "/MvYpKlpFukTivnlBhizGbkAe3v.jpg"
release_date: "2018-06-07"
title: "Ocean's 8"
video: false
vote_average: 6.8
vote_count: 115
*/
export class Movie extends Component {
  render() {
    return (
      <div>
        <img src={`${imageApi}/${this.props.movie.poster_path}`} />
      </div>
    );
  }
}

const StyledApp = styled("div")`
  display: flex;
  width: 700px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export class Movies extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.movies.map((m, i) => <Movie movie={m} key={i} />)}
      </React.Fragment>
    );
  }
}

export class App extends Component {
  constructor() {
    super();
    this.state = { movies: [] };
  }
  async componentDidMount() {
    const res = await fetch(api);
    const json = await res.json();
    console.log(json);
    this.setState({ movies: json.results });
  }
  render() {
    return (
      <div
        className={css`
          margin: 0 auto;
          display: flex;
          align-items: center;
          flex-direction: column;
        `}
      >
        <input
          type="text"
          id="query"
          className={css`
            margin: 20px;
          `}
        />
        <StyledApp>
          <Movies movies={this.state.movies} />
        </StyledApp>
      </div>
    );
  }
}

export default App;
