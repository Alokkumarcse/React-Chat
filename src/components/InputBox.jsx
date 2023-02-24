import React, { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
	updateDoc,
	doc,
	arrayUnion,
	Timestamp,
	serverTimestamp,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const InputBox = () => {
	//need two state to handle text and image input
	const [text, setText] = useState("");
	const [img, setImg] = useState(null);
	const { currentUser } = useContext(AuthContext);
	const { data } = useContext(ChatContext);

	// handleSend message method
	const handleSend = async () => {
		// update
		if (img) {
			const storageRef = ref(storage, uuid());
			const uploadTask = uploadBytesResumable(storageRef, img);
			uploadTask.on(
				(error) => {
					// handle error here
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
						await updateDoc(doc(db, "chats", data.chatId), {
							message: arrayUnion({
								id: uuid(),
								text,
								senderId: currentUser.uid,
								date: Timestamp.now(),
								img: downloadURL,
							}),
						});
					});
				}
			);
		} else {
			await updateDoc(doc(db, "chats", data.chatId), {
				message: arrayUnion({
					id: uuid(),
					text,
					senderId: currentUser.uid,
					date: Timestamp.now(),
				}),
			});
		}
		// update the last message of both user
		await updateDoc(doc(db, "userChats", currentUser.uid), {
			// way to update nested object in db
			[data.chatId + ".lastMessage"]: { text },
			[data.chatId + ".date"]: serverTimestamp(),
		});

		await updateDoc(doc(db, "userChats", data.user.uid), {
			[data.chatId + ".lastMessage"]: { text },
			[data.chatId + ".date"]: serverTimestamp(),
		});

		// after sending text/img clear the input box
		setText("");
		setImg(null);
	};

	return (
		<div className="input__box">
			<input
				type="text"
				placeholder="Type your message..."
				onChange={(e) => setText(e.target.value)}
				value={text}
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
