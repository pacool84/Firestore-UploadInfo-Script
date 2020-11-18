const firestoreService = require("firestore-export-import");

/* serviceAccountKey will be generated in your firestore app, please downloaded it and put it in 
your project, remember to re named it */
const serviceAccount = require("./serviceAccountKey.json");

/* The data base URL will be alsgo generate in your firestore app */
const databaseURL = "https://react-crud-experimental.firebaseio.com";

firestoreService.initializeApp(serviceAccount, databaseURL);

/* data.json will be the source of the info that you want to export into firestore */
firestoreService.restore("toshiba-incidents.json");
