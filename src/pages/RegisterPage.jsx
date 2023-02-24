import React, { useState } from "react";

import pic from "../images/profile pic.jpg";

import { auth, storage, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

import pics from "../images/addAvatar.png";

const Register = () => {
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	//handle form submit
	const handleSubmit = async (e) => {
		e.preventDefault(); // prevent page refresh when click on submit button
		const displayName = e.target[0].value;
		const email = e.target[1].value;
		const password = e.target[2].value;
		const file = e.target[3].files[0] || pic;

		try {
			// create new user using email and password and uploading profile picture
			const res = await createUserWithEmailAndPassword(auth, email, password);
			// upload user photo and update user name & photo
			const storageRef = ref(storage, displayName);
			const uploadTask = uploadBytesResumable(storageRef, file);
			uploadTask.on(
				(error) => {
					setError(true);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
						await updateProfile(res.user, {
							displayName,
							photoURL: downloadURL,
						});
						// store current user details in db
						await setDoc(doc(db, "users", res.user.uid), {
							uid: res.user.uid,
							displayName,
							email,
							photoURL: downloadURL,
						});
						// add userChat in sidebar
						await setDoc(doc(db, "userChats", res.user.uid), {});
						// after successfully register/login than goto homepage
						navigate("/");
					});
				}
			);
		} catch (error) {
			setError(true);
		}
	};

	return (
		<div className="form__container">
			<div className="form__wrapper">
				{/* form header section*/}
				<span className="logo">React Chat</span>
				<span className="title">Register</span>
				{/* form body section */}
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Username" required />
					<input type="email" placeholder="Email" required />
					<input type="password" placeholder="Password" required />
					<input style={{ display: "none" }} type="file" id="file" />
					<label
						htmlFor="file"
						style={{
							margin: "10px 0",
							display: "flex",
							alignItems: "center",
							gap: "10px",
							color: "rgb(175,175,175)",
							cursor: "pointer",
						}}
					>
						<img src={pics} alt="choose pic" width={30} />
						<span>Choose profile picture</span>
					</label>
					<button type="submit">Sign Up</button>
					{error && <span>Something want wrong!!</span>}
				</form>
				{/* form footer section */}
				<p>
					You do have an account? <Link to="/login">Login</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
