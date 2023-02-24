import React, { useState, useEffect, useContext } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";

import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const ChatContacts = () => {
	const [chats, setChats] = useState([]);
	const { currentUser } = useContext(AuthContext);
	const { dispatch } = useContext(ChatContext);

	useEffect(() => {
		const getChatContacts = () => {
			const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
				setChats(doc.data());
				// console.log(doc.data());
			});
			// clean up
			return () => {
				unsub();
			};
		};
		// if currentUser in not empty than fetch the user chatContacts
		currentUser.uid && getChatContacts();
	}, [currentUser.uid]);

	// handleSelect to change user
	const handleSelect = (userDetails) => {
		dispatch({ type: "CHANGE_USER", payload: userDetails });
	};

	return (
		<div>
			{/* show the contact sorted on the basis of latest message */}
			{Object.entries(chats)
				?.sort((a, b) => b[1].date - a[1].date)
				.map((chat) => (
					<div
						className="user__chat"
						key={chat[0]}
						onClick={() => handleSelect(chat[1].userInfo)}
					>
						<img src={chat[1].userInfo.photoURL} alt="" />
						<div className="chat__info">
							<span>{chat[1].userInfo?.displayName}</span>
							<p>{chat[1].lastMessage?.text}</p>
						</div>
					</div>
				))}
		</div>
	);
};

export default ChatContacts;
