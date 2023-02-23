import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// using dotenv to hide some data
// import dotenv from "dotenv";
// dotenv.config();
// const apiKey = process.env.REACT_APP_API_KEY;
// console.log(apiKey);

const firebaseConfig = {
	apiKey: "AIzaSyBZFECBjjZtpzKI6oQ9q6VONGprQfvzPTE",
	authDomain: "chat-app-1e3bc.firebaseapp.com",
	projectId: "chat-app-1e3bc",
	storageBucket: "chat-app-1e3bc.appspot.com",
	messagingSenderId: "59014870997",
	appId: "1:59014870997:web:373cb5d735869bccfcef5c",
};

// Initialize the firebase app and export them
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
