import React from "react";

const Login = () => {
	return (
		<div className="form__container">
			<div className="form__wrapper">
				{/* form header section*/}
				<span className="logo">React Chat</span>
				<span className="title">Login</span>
				{/* form body section */}
				<form>
					<input type="email" placeholder="Email" required />
					<input type="password" placeholder="Password" required />
					<button type="submit">Sign In</button>
				</form>
				{/* form footer section */}
				<p>You don't have an account? Register</p>
			</div>
		</div>
	);
};

export default Login;
