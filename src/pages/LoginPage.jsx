import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

	//handle form submit
	const handleSubmit = async (e) => {
		e.preventDefault(); // prevent page refresh when click on submit button
		const email = e.target[0].value;
		const password = e.target[1].value;

		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate("/");
		} catch (error) {
			setError(true);
			console.log(error.message);
			console.log(errorMessage);
		}
	};

	return (
		<div className="form__container">
			<div className="form__wrapper">
				{/* form header section*/}
				<span className="logo">React Chat</span>
				<span className="title">Login</span>
				{/* form body section */}
				<form onSubmit={handleSubmit}>
					<input type="email" placeholder="Email" required />
					<input type="password" placeholder="Password" required />
					<button type="submit">Sign In</button>
					{error && <span>something went wrong!!</span>}
				</form>
				{/* form footer section */}
				<p>
					You don't have an account? <Link to="/register">Register</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
