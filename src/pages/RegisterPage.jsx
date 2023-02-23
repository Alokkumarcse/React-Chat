import React, { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import pics from "../images/addAvatar.png";

const Register = () => {
	const [error, setError] = useState("false");
	//handle form submit
	const handleSubmit = async (e) => {
		e.preventDefault(); // prevent page refresh when click on submit button
		const displayName = e.target[0].value;
		const email = e.target[1].value;
		const password = e.target[2].value;
		const file = e.target[3].file[0];

		// create new user using email and password
		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
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
					{error && <span>something went wrong!!</span>}
				</form>
				{/* form footer section */}
				<p>You do have an account? Login</p>
			</div>
		</div>
	);
};

export default Register;
