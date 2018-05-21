import { db } from './firebase';

let pushed;
// User API
export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const onceGetUserInfo = (uid) =>
  db.ref(`users/${uid}`.once('value'));

export const doPushProject = (fields) =>
  db.ref('projects').push(fields);

// Other Entity APIs ...