import React, { Component } from 'react';
import withAuthorization from '../../components/withAuthorization';
import { auth,db } from '../../firebase';

import './ProjectPage.css';

class ProjectPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: null,
		};
	}

	componentDidMount() {
		//get user id and add it to the create project
		//db.doCreateProject(1534,"proj12ajkljklme","snowyndystuffjklkltype");
		db.onceGetUsers().then(snapshot =>
			this.setState(() => ({ users: snapshot.val() }))
		);
		var uid = auth.getCurrentUserId();
		console.log(uid);
	}


	render() {
		const { users } = this.state;
		console.log(this.state)
		return (
			<div>
				<h3>ProjectPage</h3>
				<p>The Project page is accessible by every signed in user.</p>
				{ !!users && <UserList users={users} /> }

			</div>
		);
	}
}

const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(ProjectPage);

