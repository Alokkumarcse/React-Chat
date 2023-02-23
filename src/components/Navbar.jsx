import React from "react";

import pic from "../images/profile pic.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<i className="fa-brands fa-whatsapp"></i>
			</div>

			<div className="user">
				<img src={pic} alt="" />
				<span>Alok</span>
				<button onClick={() => signOut(auth)}>Logout</button>
			</div>
		</div>
	);
};

export default Navbar;
