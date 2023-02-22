import React from "react";

const InputBox = () => {
	return (
		<div className="input__box">
			<input type="text" placeholder="Type your message..." />
			<div className="send">
				<i className="fa-solid fa-paperclip"></i>
				<input style={{ display: "none" }} type="file" id="file" />
				<label htmlFor="file" style={{ cursor: "pointer" }}>
					<i className="fa-solid fa-image"></i>
				</label>
				<button>send</button>
			</div>
		</div>
	);
};

export default InputBox;
