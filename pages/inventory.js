import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function Inventory() {
	return (
		<>
			<Header
				page={"INVENTORY"}
				subPage={"HOME"}
				user={"Example N. Name"}
			></Header>
			<NavBar></NavBar>
			<div id="main-container">
				<p>inventory</p>
			</div>
		</>
	);
}

export default Inventory;
