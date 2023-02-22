import React from "react";
import pic from "../images/profile pic.jpg";

const Search = () => {
	return (
		<div className="search__box">
			<div className="search__form">
				<i className="fa-solid fa-magnifying-glass"></i>
				<input type="text" placeholder="search for conversations" />
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
