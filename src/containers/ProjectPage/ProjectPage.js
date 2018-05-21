import React, { Component } from 'react';
import withAuthorization from '../../components/withAuthorization';
import ProjectForm from './../../components/ProjectForm/ProjectForm';
import { model } from '../../Model';

import './ProjectPage.css';

class ProjectPage extends Component {
	constructor(props) {
		super(props);
		this.addProject = this.addProject.bind(this);
		this.state = {
		};
	}

	componentDidMount() {
	}

	addProject(projectDetails){
		model.doCreateProject(projectDetails);
		//Write to database
		//Later add checks
		//this.database.push().set({ noteContent: note});
		
	}


	render() {
		return (
			<div>
				<h3>ProjectPage</h3>
				<p>The Project page is accessible only by signed in users.</p>
				<ProjectForm addProject={this.addProject}/>
			</div>
		);
	}
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(ProjectPage);

