import { auth } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
  auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);

// Get userId
export const getCurrentUserId = () =>
  auth.onAuthStateChanged(function (user) {
    if (user) {
      return user.uid;
    }
    else {
      return null;
    }
  })
export const getUserProfile = () =>
  auth.onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
      return user;
    }
    else {
      console.log("no user");
    }
  })

export const getOnStateChanged = () =>
  console.log("tutak")