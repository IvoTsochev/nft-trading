import firebase from 'firebase/compat/app';

export default interface INft {
  uid: string;
  displayName: string;
  title: string;
  fileName: string;
  url: string;
  timestamp: firebase.firestore.FieldValue;
}