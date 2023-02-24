import React, { useState, useEffect, useContext } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

import pic from "../images/profile pic.jpg";

const ChatContacts = () => {
	const [chats, setChats] = useState([]);
	const { currentUser } = useContext(AuthContext);

	useEffect(() => {
		const getChatContacts = () => {
			const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
				setChats(doc.data());
			});
			// clean up
			return () => {
				unsub();
			};
		};
		// if currentUser in not empty than fetch the user chatContacts
		currentUser.uid && getChatContacts();
	}, [currentUser.uid]);

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

export default ChatContacts;
