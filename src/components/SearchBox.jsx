import React, { useState } from "react";
import pic from "../images/profile pic.jpg";

const Search = () => {
	const [userName, setUserName] = useState("");
	const [user, setUser] = useState(null);
	const [error, setError] = useState(false);

	const handleSearch = () => {

	} 

	const handleKeypress = (e) =>{
		e.code === "Enter" && handleSearch();
	}

	return (
		<div className="search__box">
			<div className="search__form">
				<i className="fa-solid fa-magnifying-glass"></i>
				<input
					type="text"
					placeholder="search for conversations"
					onChange={(e) => setUserName(e.target.value)}
					onKeyDown={handleKeypress}
				/>
			</div>
			<div className="user__chat">
				<img src={pic} alt="" />
				<div className="chat__info">
					<span>Alok</span>
				</div>
			</div>
		</div>
	);
};

export default Search;
