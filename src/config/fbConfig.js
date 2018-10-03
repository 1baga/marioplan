import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
var config = {
	apiKey: 'AIzaSyB11oxqMh2YWyYq9QD_MH-eEk8yaeZ--AU',
	authDomain: 'marioplan-471f4.firebaseapp.com',
	databaseURL: 'https://marioplan-471f4.firebaseio.com',
	projectId: 'marioplan-471f4',
	storageBucket: 'marioplan-471f4.appspot.com',
	messagingSenderId: '159777223320'
};
firebase.initializeApp(config);
firebase.firestore().settings({
	timestampsInSnapshots: true
});

export default firebase;
