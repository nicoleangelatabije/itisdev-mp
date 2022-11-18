import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function Items() {
	return (
		<>
			<Header page={"ITEMS"} subPage={"HOME"} user={"Example N. Name"}></Header>
			<NavBar></NavBar>
			<div id="main-container">
				<p>items</p>
			</div>
		</>
	);
}

export default Items;
