import React from "react";

import pic from "../images/profile pic.jpg";

const Message = () => {
	return (
		<div className="message">
			<div className="message__info">
				<img src={pic} alt="" />
				<span>just now</span>
			</div>
			<div className="message__content">
				<p>Hello javascript</p>
				{/* <img src={pic} alt="" /> */}
			</div>
		</div>
	);
};

export default Message;
