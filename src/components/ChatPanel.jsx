import React from "react";

import pic from "../images/profile pic.jpg";
import cam from "../images/cam.png";
import add from "../images/add.png";
import more from "../images/more.png";

import Messages from "./Messages";
import InputBox from "./InputBox";

const ChatPanel = () => {
	return (
		<div className="chat__panel">
			{/* Top part of ChatPanel => info */}
			<div className="chat__top--panel">
				<div className="top__panel--left">
					<img src={pic} alt="" />
					<span>Alok</span>
				</div>
				<div className="top__panel--right">
					<i class="fa-solid fa-phone"></i>
					<i class="fa-solid fa-video"></i>
					<i class="fa-solid fa-user-plus"></i>
					<i class="fa-solid fa-ellipsis-vertical"></i>
				</div>
			</div>
			{/* Middle part of Chat panel => all chat message*/}
			<Messages />
			{/* Bottom part of ChatPanel => message input box */}
			<InputBox />
		</div>
	);
};

export default ChatPanel;
