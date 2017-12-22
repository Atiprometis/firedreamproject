import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyApT_XMyIuzGbaUkucH2Uzxdpak-AgfrbY',
  authDomain: 'firedreamproject-125af.firebaseapp.com',
  databaseURL: 'https://firedreamproject-125af.firebaseio.com',
  projectId: 'firedreamproject-125af',
  storageBucket: 'firedreamproject-125af.appspot.com',
  messagingSenderId: '16829427653',
};
firebase.initializeApp(config);

export default firebase;
export const provider = new firebase.auth.FacebookAuthProvider();

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;

export function auth(email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser);
}

export function logout() {
  return firebaseAuth().signOut();
}

export function login(email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email);
}

export function saveUser(user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid,
    })
    .then(() => user);
}

