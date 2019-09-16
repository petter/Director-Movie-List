/**
 * Fetches data from url and returns JSON from response
 * @param {string} url
 */
const getApiJson = async url => {
	const response = await fetch(url);
	const json = await response.json();
	return json;
};

/**
 * Get data about movies.
 * @param {string[]} movieIds Ids for all the movies you want data for
 */
export const getMovieData = async movieIds =>
	getApiJson(
		`/template_v2/feeds/generic/getMovies.jsp?movieIds=${movieIds.join()}`
	);

/**
 * Gets cinema program for a given date.
 * @param {string} date date in format DD.MM.YYY
 */
export const getProgram = async date => {
	const data = await getApiJson(
		`/template_v2/ajax/json_program.jsp?location=Oslo&date=${date}`
	);
	return data.days[0].movies;
};

/**
 * Gets cinema program for a given date with movie data included.
 * @param {string} date date in format DD.MM.YYY
 */
export const getProgramWithMovieData = async date => {
	const data = await getProgram(date);
	const movieIds = data.map(el => el.movieId);
	const movieData = await getMovieData(movieIds);

	return data.map(el => ({ ...el, movieData: movieData.filter((movieDataEl) => el.movieId === movieDataEl.edi)[0] }));
};
