import firebase from './firebase';

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true,
});
db.enablePersistence()
  .catch(function (err) {
    if (err.code == 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code == 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });
  
export default db;
