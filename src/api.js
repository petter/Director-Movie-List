const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/';
const getImageUrl = (url, movieTitle, size = 'w500') =>
	url
		? BASE_URL_IMAGE + size + url
		: `http://placehold.it/500x750?text=${movieTitle}`;

/**
 * Fetches data from url and returns JSON from response
 * @param {string} url
 */
const get = async url =>
	fetch(
		`${url}${url.includes('?') ? '&' : '?'}api_key=${
			process.env.REACT_APP_API_KEY
		}&language=en-US`
	).then(res => res.json());

export const getCredits = async personId =>
	get(`https://api.themoviedb.org/3/person/${personId}/movie_credits`);

export const getPerson = async name =>
	get(`https://api.themoviedb.org/3/search/person?query=${name}`);

/**
 * Searches TMDb for a director and gets all the movies directed by him/her
 * @param {string} name Name of director
 * @returns {object} Object with information about director and movies directed
 */
export const getDirector = async name => {
	const people = await getPerson(name);

	if (people.total_results === 0) throw Error('Director not found');

	const person = people.results[0];
	const credits = await getCredits(person.id);
	const directedMovies = credits.crew.filter(movie => movie.job === 'Director');
	const directedMoviesWithUrls = directedMovies.map(movie => ({
		...movie,
		poster_path: getImageUrl(movie.poster_path, movie.original_title),
		backdrop_path: getImageUrl(movie.backdrop_path, movie.original_title),
		seen: false
	}));

	if (directedMovies.length === 0) throw Error('Director not found');
	return { ...person, movies: directedMoviesWithUrls };
};
