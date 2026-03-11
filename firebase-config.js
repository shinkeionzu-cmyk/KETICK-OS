import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, onSnapshot, query, orderBy, where } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCT2nlX1fjiGvXAuaBWein6e1BQOOCH8ew",
  authDomain: "ketick-os.firebaseapp.com",
  projectId: "ketick-os",
  storageBucket: "ketick-os.firebasestorage.app",
  messagingSenderId: "407192673747",
  appId: "1:407192673747:web:9196c8d72d77a642f02326",
  measurementId: "G-YH99RHS74G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc, getDocs, updateDoc, doc, onSnapshot, query, orderBy, where, ref, uploadBytes, getDownloadURL };
