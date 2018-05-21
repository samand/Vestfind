import React, {Component} from 'react';
import './AboutPage.css';
import { model } from '../../Model';


class AboutPage extends Component {

	testGetUser(){
		model.getUser();
	}

	//;&autoplay=1
	render() {

		return (
			<div>
				<h3>AboutPage</h3>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/frzwRy4s-R8?rel=0&amp;controls=0&amp;showinfo=0?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="true"></iframe>
				<br />
				<div>
				<button
                    onClick={this.testGetUser}>testgetuser
                </button>
				</div>
			</div>
		);
	}
}

export default AboutPage;