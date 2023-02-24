import React, { useContext } from "react";

import pic from "../images/profile pic.jpg";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
	const { currentUser } = useContext(AuthContext);
	const { data } = useContext(ChatContext);

	return (
		<div className="message owner">
			{/* <div className="message__info">
				<img src={pic} alt="" />
				<span>just now</span>
			</div>
			<div className="message__content">
				<p>Hello javascript</p>
				<img src={pic} alt="" />
			</div> */}
		</div>
	);
};

export default Message;
