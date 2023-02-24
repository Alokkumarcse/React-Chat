import React, { useContext } from "react";

import pic from "../images/profile pic.jpg";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
	const { currentUser } = useContext(AuthContext);
	const { data } = useContext(ChatContext);

	return (
		<div
			className={`message ${message.senderId === currentUser.uid && "owner"}`}
		>
			<div className="message__info">
				<img
					src={
						message.senderId === currentUser.uid
							? currentUser.photoURL
							: data.user.photoURL
					}
					alt=""
				/>
				<span>just now</span>
			</div>
			<div className="message__content">
				<p>{message.text}</p>
				{message.img && <img src={message.img} alt="" />}
			</div>
		</div>
	);
};

export default Message;
