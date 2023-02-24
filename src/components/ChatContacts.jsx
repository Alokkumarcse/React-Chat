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

	console.log(Object.entries(chats));
	return (
		<div>
			{Object.entries(chats)?.map((chat) => (
				<div
					className="user__chat"
					key={chat[0]}
					onClick={() => handleSelect(chat[1].userInfo)}
				>
					<div className="chat__info">
						<span>{chat[1].userInfo.displayName}</span>
						<p>{chat[1].userInfo.lastMessage?.text}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ChatContacts;
