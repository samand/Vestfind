import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newProjectName: '',
            newProjectType: '',
            newProjectSize: '',
            newTestIdea: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.addProject = this.addProject.bind(this);
    }

    // When the user input changes, set the state corresponding to the input name attribute
    // to the value of what's in the input box.
    handleUserInput(e) {
        this.setState({
            [e.target.name]: e.target.value, // the value of the text input
        })
    }

    addProject() {
        // call a method that sets the noteContent for a note to
        // the value of the input
        this.props.addProject(this.state);

        // Set newProjectName back to an empty string.
        this.setState({
            newProjectName: '',
            newProjectType: '',
            newProjectSize: '',
            newTestIdea: '',
        })
    }

    render() {
        return (
            <div>
                <input
                    name="newProjectName"
                    placeholder="Write a new project name"
                    value={this.state.newProjectName}
                    onChange={this.handleUserInput}
                />
                <br />
                <input
                    name="newProjectType"
                    placeholder="What type of project?"
                    value={this.state.newProjectType}
                    onChange={this.handleUserInput}
                />
                <br />
                <input
                    name="newProjectSize"
                    placeholder="Write the size of the project"
                    value={this.state.newProjectSize}
                    onChange={this.handleUserInput}
                />
                <br />
                <input
                    name="newTestIdea"
                    placeholder="Write the newTestIdea"
                    value={this.state.newTestIdea}
                    onChange={this.handleUserInput}
                />
                <br />
                <button
                    onClick={this.addProject}>Add Project
                </button>
            </div>
        )
    }
}

ProjectForm.propTypes = {
    newProjectName: PropTypes.string,
    newProjectType: PropTypes.string,
    newProjectSize: PropTypes.string,
    newTestIdea: PropTypes.string,
}

export default ProjectForm;