import React, { useEffect, useContext, useState } from "react";

import Message from "./Message";
import { ChatContext } from "../context/ChatContext";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";

const MessageContainer = () => {
	//store all message to show
	const [messages, setMessages] = useState([]);
	// get user info by using this data object
	const { data } = useContext(ChatContext);

	// fetch the messages of user from firebase db => chats collection
	useEffect(() => {
		try {
			const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
				doc.exists() && setMessages(doc.data().message);
				return () => {
					unSub();
				};
			});
		} catch (error) {
			console.log(error);
		}
	}, [data.chatId]);

	return (
		<div className="message__container">
			{messages.map((message) => (
				<Message message={message} key={message.id} />
			))}
		</div>
	);
};

export default MessageContainer;
