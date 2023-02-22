import React from "react";

import pics from "../images/addAvatar.png";

const Register = () => {
	return (
		<div className="form__container">
			<div className="form__wrapper">
				{/* form header section*/}
				<span className="logo">React Chat</span>
				<span className="title">Register</span>
				{/* form body section */}
				<form>
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
				</form>
				{/* form footer section */}
				<p>You do have an account? Login</p>
			</div>
		</div>
	);
};

export default Register;
