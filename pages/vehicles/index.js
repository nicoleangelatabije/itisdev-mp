import React from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

function Vehicles() {
	return (
		<>
			<Header
				page={"VEHICLES"}
				subPage={"HOME"}
				user={"Example N. Name"}
			></Header>
			<NavBar></NavBar>
			<div id="main-container">
				<p>vehicles</p>
			</div>
		</>
	);
}

export default Vehicles;
