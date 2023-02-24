import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
	collection,
	query,
	where,
	getDocs,
	getDoc,
	setDoc,
	doc,
	updateDoc,
	serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

import pic from "../images/profile pic.jpg";

const Search = () => {
	const [userName, setUserName] = useState("");
	const [user, setUser] = useState(null);
	const [error, setError] = useState(false);

	// get current user using AuthContext
	const { currentUser } = useContext(AuthContext);

	// using firebase query to find search user
	const handleSearch = async () => {
		const q = query(
			collection(db, "users"),
			where("displayName", "==", userName)
		);
		try {
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				setUser(doc.data());
			});
		} catch (error) {
			setError(true);
		}
	};

	const handleKeypress = (e) => {
		e.code === "Enter" && handleSearch();
	};

	// show all chats between the selected two user
	const handleSelect = async () => {
		// check user exist in chats collection in firebase, if not create new chats between them
		const combinedId =
			currentUser.uid > user.uid
				? currentUser.uid + user.uid
				: user.uid + currentUser.uid;

		try {
			// search the combined id, exits or not
			const res = await getDoc(doc(db, "chats", combinedId));
			// if not exits create new chats collection between them
			if (!res.exists()) {
				await setDoc(doc(db, "chats", combinedId), { message: [] });
				// now create chats between currentUser and searched user
				await updateDoc(doc(db, "userChats", currentUser.uid), {
					[combinedId + ".userInfo"]: {
						uid: user.uid,
						displayName: user.displayName,
						photoURL: user.photoURL,
					},
					[combinedId + ".data"]: serverTimestamp(),
				});

				await updateDoc(doc(db, "userChats", user.uid), {
					[combinedId + ".userInfo"]: {
						uid: currentUser.uid,
						displayName: currentUser.displayName,
						photoURL: currentUser.photoURL,
					},
					[combinedId + ".data"]: serverTimestamp(),
				});
			}
		} catch (error) {
			setError(true);
		}
		setUser(null);
		setUserName("");
	};

	return (
		<div className="search__box">
			<div className="search__form">
				<i className="fa-solid fa-magnifying-glass"></i>
				<input
					type="text"
					placeholder="search for conversations"
					onChange={(e) => setUserName(e.target.value)}
					onKeyDown={handleKeypress}
					value={userName}
				/>
			</div>
			{error && <span>User not found!!</span>}
			{user && (
				<div className="user__chat" onClick={handleSelect}>
					<img src={user.photoURL} alt="" />
					<div className="chat__info">
						<span>{user.displayName}</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Search;
