import React from 'react';

const ProjectDetails = (props) => {
	const id = props.match.params.id;
	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title - {id}</span>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquid quidem sunt laborum architecto fugiat
						veniam illo, in corporis velit fuga accusantium suscipit, culpa ipsa qui consequatur facilis necessitatibus
						excepturi?
					</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>Posted by Umar Mash</div>
					<div>2nd September, 2018</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
