import React from "react";

import pic from "../images/profile pic.jpg";

const Contacts = () => {
	return (
		<div className="user__chat">
			<img src={pic} alt="" />
			<div className="chat__info">
				<span>Alok</span>
				<p>Hello Good Morning</p>
			</div>
		</div>
	);
};

export default Contacts;
