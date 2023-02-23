import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCJDPKYQJhJVZ3kbADxSycJ8_bVIYOBT8I",
	authDomain: "react-chat-app-e2cd2.firebaseapp.com",
	projectId: "react-chat-app-e2cd2",
	storageBucket: "react-chat-app-e2cd2.appspot.com",
	messagingSenderId: "25940675745",
	appId: "1:25940675745:web:b16186454deb5f6f7974e0",
};

// Initialize the firebase app and export them
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
