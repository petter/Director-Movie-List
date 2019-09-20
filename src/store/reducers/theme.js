const createTheme = (
	primary,
	primaryHover,
	primaryText,
	background,
	backgroundText
) => ({
	primary,
	primaryHover,
	primaryText,
	background,
	backgroundText
});

// const blue = createTheme('#2291e6', '#2476b5', '#ffffff', '#ffffff', '#000000');
const red = createTheme('#F93943', '#CC353C', '#ffffff', '#ffffff', '#000000');
// const darkMode = createTheme(
// 	'#262626',
// 	'#363636',
// 	'#ffffff',
// 	'#4a4a4a',
// 	'#ffffff'
// );

const initialState = red;
const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default reducer;
