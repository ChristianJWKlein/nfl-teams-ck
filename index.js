//import our restaurants
const nfl = require("./nfl.json");

//import a set of tools to talk to firebase and firestore
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

// import our credentials
const credentials = require("./credentials.json");

//connect to firebase services
initializeApp({
  credential: cert(credentials),
});

//connect to firestore
const db = getFirestore();

// refernce to restaurant collect since used heavily
const nflRef = db.collection("nfl");
console.log("its goin");

//create a collection called "restaurants"

//add the array of NFl teams
// nflRef
//   .add(nfl[0])
//   .then((doc) => {
//     console.log("NFL Teams", doc.id);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//read one document
// nflRef
//   .doc("mZKFvZi9KSJdHzvMAyZX")
//   .get()
//   .then((doc) => {
//     console.log(doc.id, " => ", doc.data());
//   })
//   .catch((err) => console.error(err));

//get all documents..below we actually get a snapshot of the database at that time.
nflRef
  .get()
  .then((snapshot) =>
    snapshot.forEach((doc) => {
      console.log(doc.id, " ===> ", doc.data());
    })
  )
  .catch(console.error);

//querying a collection
// restRef
//   .where("name", "==", "Bolay")
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       //todd may not have had snapshot on this line
//       console.log(doc.data());
//     });
//   })
