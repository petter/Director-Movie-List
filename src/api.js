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

export const getDirector = async name => {
	const people = await getPerson(name);
	const person = people.results[0];
	const credits = await getCredits(person.id);
	const directedMovies = credits.crew.filter(movie => movie.job === 'Director');
	return { ...person, movies: directedMovies };
};
