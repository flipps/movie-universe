import  { useQueries, useQuery } from "@tanstack/react-query";

import './App.css'
import { HeroSection } from "./components/heroSection";
import { Header } from "./components/header";
import { MovieCard } from "./components/movieCard";

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
    <main>
			<Header />	
			<HeroSection />	
			<section className="mt-10 md:grid-cols-2 lg:gap-5 grid grid-cols-1 gap-2">
				{movieDetailQueries.map((query, index) => {
					if (query.isLoading) return <p key={index}>Loading details...</p>;
					if (query.error instanceof Error) return <p key={index}>Error: {query.error.message}</p>;

					const movie = query.data;

					return (
						<MovieCard key={index} movie={movie} />
					);
				})}
			</section>
    </main>
  )
}

export default App
