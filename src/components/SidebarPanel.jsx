import React from "react";

import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import ChatContacts from "./ChatContacts";

const Sidebar = () => {
	return (
		<div className="sidebar__panel">
			<Navbar />
			<SearchBox />
			<ChatContacts />
		</div>
	);
};

export default Sidebar;
