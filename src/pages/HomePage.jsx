import React from "react";

import SidebarPanel from "../components/SidebarPanel";
import ChatPanel from "../components/ChatPanel";

const Home = () => {
	return (
		<div className="home">
			<div className="container">
				<SidebarPanel />
				<ChatPanel />
			</div>
		</div>
	);
};

export default Home;
