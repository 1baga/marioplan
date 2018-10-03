export const createProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		//Make Async call to DB
		const firestore = getFirestore();
		firestore
			.collection('projects')
			.add({
				...project,
				authorFirstName: 'Umar',
				authorLastName: 'Mash',
				authorId: 1234,
				createdAt: new Date()
			})
			.then((result) => {
				dispatch({ type: 'CREATE_PROJECT', project });
			})
			.catch((err) => {
				dispatch({ type: 'CREATE_PROJECT_ERROR', err });
			});
	};
};
