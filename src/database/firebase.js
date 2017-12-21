import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyApT_XMyIuzGbaUkucH2Uzxdpak-AgfrbY',
  authDomain: 'firedreamproject-125af.firebaseapp.com',
  databaseURL: 'https://firedreamproject-125af.firebaseio.com',
  projectId: 'firedreamproject-125af',
  storageBucket: '',
  messagingSenderId: '16829427653',
};
firebase.initializeApp(config);

export default firebase;
export const provider = new firebase.auth.FacebookAuthProvider();

export const auth = firebase.auth();

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
