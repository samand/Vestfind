import { db } from './firebase';

// User API
export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');



/* export const doCreateProject = (name,type) => (
	pushed = db.ref(`projects`).push({
		name,
		type,
	}),
	console.log(pushed.key),
	id = pushed.key,
	db.ref(`usersProjects/${uid}`).set({
		id
	})
);
 */

// Other Entity APIs ...