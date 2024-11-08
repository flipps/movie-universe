export function MovieCard({ movie }: any) {
	return (
		<div key={movie.imdbID} className="text-white flex gap-5 p-4 border border-[#242424] rounded-lg hover:border-gray-600 transition-all backdrop-filter backdrop-blur-md bg-opacity-10">
			<div className="h-40 overflow-hidden rounded-lg">
				<img src={movie.Poster} alt={movie.Title} className="rounded-lg w-full h-full object-cover" />
			</div>
			<div className="text-left">
				<h2 className="font-brand font-bold text-yellow-50 mb-3">{movie.Title} ({movie.Year})</h2>
				<p className="font-body"><span className="font-bold">Director:</span> {movie.Director}</p>
				<p className="font-body"><span className="font-bold">Writer:</span> {movie.Writer}</p>
				<p className="font-body"><span className="font-bold">Country:</span> {movie.Country}</p>
				<p className="font-body"><span className="font-bold">Language:</span> {movie.Language}</p>
			</div>
		</div>
	)
}

//<img src={movie.Poster} alt={movie.Title} className="rounded-lg max-w-[200px]" />

