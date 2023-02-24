import React, { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const InputBox = () => {
	//need two state to handle text and image input
	const [text, setText] = useState("");
	const [img, setImg] = useState(null);
	const { currentUser } = useContext(AuthContext);
	const { data } = useContext(ChatContext);

	// handleSend message method
	const handleSend = () => {
		// update 
		if(img){

		}else{

		}
	};

	return (
		<div className="input__box">
			<input
				type="text"
				placeholder="Type your message..."
				onChange={(e) => setText(e.target.value)}
			/>
			<div className="send">
				<i className="fa-solid fa-paperclip"></i>
				<input
					style={{ display: "none" }}
					type="file"
					id="file"
					onChange={(e) => setImg(e.target.files[0])}
				/>
				<label htmlFor="file" style={{ cursor: "pointer" }}>
					<i className="fa-solid fa-image"></i>
				</label>
				<button onClick={handleSend}>send</button>
			</div>
		</div>
	);
};

export default InputBox;
