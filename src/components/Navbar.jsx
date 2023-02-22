import React from "react";

import pic from "../images/profile pic.jpg";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<i className="fa-brands fa-whatsapp"></i>
			</div>

			<div className="user">
				<img src={pic} alt="" />
				<span>Alok</span>
				<button>Logout</button>
			</div>
		</div>
	);
};

export default Navbar;
