import * as firebase from 'firebase';

 // Initialize Firebase
 var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider =  new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const gitHubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export { 
  firebase, 
  googleAuthProvider,
  facebookAuthProvider,
  gitHubAuthProvider,
  twitterAuthProvider,
  database as default 
};

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log('removed: ', snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('updated: ',snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log('added', snapshot.key, snapshot.val());
// });

// database.ref('expenses')
// .on('value',
// (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id:childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
    
//   console.log(expenses);
// });

// database.ref('expenses').push({ 
//   description: 'Grocery',
//   note: '',
//   amount: 1559900,
//   createdAt: 91231234123556
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   var name = val.name;
//   var jobTitle = val.job.title;
//   var company = val.job.company;

//   console.log(`${name} is a ${jobTitle} at ${company}`);
// });

// database.ref().once('value', (snapshot) =>{
//   console.log(snapshot.val());
// });

// database.ref().set({
//   name:'Steve Martin',
//   age: 23,
//   isSingle: false,
//   stressLevel: 6,
//   job:{
//     title:'Software Developer',
//     company:'Google'
//   },
//   location: {
//     city: 'Imus',
//     country: 'Philippines'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((error) => {
//   console.log(error);
// });

// database.ref()
// .update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Manila'
// })
// .then(() => 'updating success!')
// .catch((error) => console.log(error));

// database.ref('isSingle')
//   .set(null)
//   .then(() => console.log('data remove!'))
//   .catch((error) => console.log('error: ', error));