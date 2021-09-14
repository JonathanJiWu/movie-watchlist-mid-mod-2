import React from 'react';

const MovieList = (props) => {
	const FavoritesComps = props.FavoritesComps
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<button>Add to Watchlist</button>
				</div>
			))}
		</>
	);
};

export default MovieList;
