import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import UserCard from "../components/Users/UserCard";

function Users() {
	const [isEditing, setIsEditing] = useState({});

	useEffect(() => {
		console.log("Currently editing:", isEditing);
	}, [isEditing]);

	return (
		<>
			<Header page={"USERS"} subPage={"HOME"} user={"Example N. Name"}></Header>
			<NavBar></NavBar>
			<div id="main-container">
				<div className="user-main-container">
					<div className="user-left-container">
						<input
							type="search"
							id="user"
							className="search-bar"
							placeholder="Search"
						></input>
						<div className="user-list-container">
							<UserCard
								firstName={"Hideki"}
								lastName={"Kawachi"}
								role={"Manager"}
								disabled={true}
								setEditing={setIsEditing}
							></UserCard>
							<UserCard
								firstName={"Spencer"}
								lastName={"Tan"}
								role={"Admin"}
								disabled={true}
								setEditing={setIsEditing}
							></UserCard>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Users;
