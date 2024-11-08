import  { useQueries, useQuery } from "@tanstack/react-query";

import './App.css'

const API_KEY = '1e5700a2';

interface Movie {
	title: string;
	year: string;
	poster: string;
	imdbID: string;
	type: string;
}

const fetchMovieList = async (query: string): Promise<Movie[]> => {
	const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
	const data = await response.json();

	if (data.response === 'False') {
		throw new Error(data.Error);
	}

	return data.Search;
}

const fetchMovieDetails = async (imdbID: string) => {
	const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
	return response.json();
}

function App() {
	// Fetch movies by Search param, in this case I chose 'Batman'
	const { data: movieList, isLoading: isLoadingMoviesList, error: listError } = 
		useQuery({ 
			queryKey: ['movieList', 'Batman'], 
			queryFn: () => fetchMovieList('Batman'),
		})

	// As the movie list does not include all the details, I'll fetch the details of each movie
	const movieDetailQueries = useQueries({
    queries: (movieList || []).map(movie => ({
      queryKey: ['movieDetails', movie.imdbID],
      queryFn: () => fetchMovieDetails(movie.imdbID),
      enabled: !!movieList, // Only fetch if movieList exists
    }))
  });

	if (isLoadingMoviesList) {
		return <div>Loading movies list...</div>
	}

	if (listError) {
		return <div>Error: {listError.message}</div>
	}

  return (
    <>
			<header>
				<h1>Movie night</h1>
				<ul>
					<li>Specials</li>
					<li>IMDB</li>
					<li>About us</li>
				</ul>
			</header>
			<div>
				{movieDetailQueries.map((query, index) => {
					if (query.isLoading) return <p key={index}>Loading details...</p>;
					if (query.error instanceof Error) return <p key={index}>Error: {query.error.message}</p>;

					const movie = query.data;

					return (
						<div key={movie.imdbID} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
							<h2>{movie.Title} ({movie.Year})</h2>
							<p><strong>Director:</strong> {movie.Director}</p>
							<p><strong>Writer:</strong> {movie.Writer}</p>
							<p><strong>Country:</strong> {movie.Country}</p>
							<p><strong>Plot:</strong> {movie.Plot}</p>
							<img src={movie.Poster} alt={movie.Title} style={{ width: '100px' }} />
						</div>
					);
				})}
			</div>
    </>
  )
}

export default App
