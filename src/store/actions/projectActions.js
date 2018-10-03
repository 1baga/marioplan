export const createProject = (project) => {
	return (dispatch, getState) => {
		//Make Async call to DB
		dispatch({ type: 'CREATE_PROJECT', project });
	};
};
