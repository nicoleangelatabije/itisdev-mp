import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function Reports() {
	return (
		<>
			<Header
				page={"REPORTS"}
				subPage={"HOME"}
				user={"Example N. Name"}
			></Header>
			<NavBar></NavBar>
			<div id="main-container">
				<p>reports</p>
			</div>
		</>
	);
}

export default Reports;
