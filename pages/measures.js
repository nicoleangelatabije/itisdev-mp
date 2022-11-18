import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function Measures() {
	return (
		<>
			<Header
				page={"MEASURES"}
				subPage={"HOME"}
				user={"Example N. Name"}
			></Header>
			<NavBar></NavBar>
			<div id="main-container">
				<p>measures</p>
			</div>
		</>
	);
}

export default Measures;
