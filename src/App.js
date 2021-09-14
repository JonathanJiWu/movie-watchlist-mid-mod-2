import React, { useState, useEffect } from "react";
// import Header from "./comp/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from "./comp/SearchBox";
// import UserWatchList from "./comp/UserWatchList";
// import Footer from "./comp/Footer";
import MovieList from "./comp/MovieList";
import "./App.css";
import Logo from "./comp/header/Logo";
// http://www.omdbapi.com/?
// s=star wars&
// apikey=fb99a468
import AddFavorites from "./comp/AddFavorites";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=fb99a468`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Logo/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} FavoritesComps={AddFavorites}/>
      </div>
    </div>
  );
};
export default App;
// `https://api.themoviedb.org/3/search/company?api_key=235567e76089317d69bbe14ecc0c27d9&query=${searchValue}&page=1`
// `https://www.omdbapi.com/?s=${searchValue}&apikey=fb99a468`;
// problems
// 1 style
// 2 material UI => bootstrap/css in general
// 3 API slow/Inconsistent
// 4 The lack of CSS skills stop me from progress my project
