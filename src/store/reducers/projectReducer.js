const initState = {
	projects: [
		{ id: '1', title: 'Help me find peach', content: 'blah blah blah' },
		{ id: '2', title: 'Collect all the stars', content: 'blah blah blah' },
		{ id: '3', title: 'Egg hunt with mash', content: 'blah blah blah' },
		{ id: '4', title: 'Egg hunt with Adamu', content: 'blah blah blah' }
	]
};

const projectReducer = (state = initState, action) => {
	return state;
};

export default projectReducer;
