import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function Dashboard() {
	return (
		<>
			<Header
				page={"DASHBOARD"}
				subPage={"HOME"}
				user={"Example N. Name"}
			></Header>
			<NavBar></NavBar>
			<div id="main-container">
				<p>dashboard</p>
			</div>
		</>
	);
}

export default Dashboard;
