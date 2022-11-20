import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BasicButton from "../../components/BasicButton";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import UserCard from "../../components/Users/UserCard";
import UserCreate from "../../components/Users/UserCreate";
import dbConnect from "../../lib/dbConnect";
import Role from "../../models/RoleSchema";
import User from "../../models/UserSchema";

export async function getServerSideProps() {
	await dbConnect();

	const userList = JSON.stringify(
		await User.find(
			{},
			{ userID: 1, firstName: 1, lastName: 1, roleID: 1, disabled: 1 }
		)
	);
	console.log("getting user list", userList);

	const roleList = JSON.stringify(
		await Role.find({}, { roleID: 1, roleName: 1 })
	);
	console.log("getting role list:", roleList);

	return { props: { userList, roleList } };
}

function Users({ userList, roleList }) {
	const users = JSON.parse(userList);
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("All");
	const [rightShow, setRightShow] = useState("button");
	const [isEditing, setIsEditing] = useState("");
	const [userShow, setUserShow] = useState(users);

	useEffect(() => {
		console.log("Currently editing:", isEditing);
	}, [isEditing]);

	useEffect(() => {
		console.log("Currently filtering:", filter);
	}, [filter]);

	function getSearch(value) {
		let tempList = [];
		users.forEach((user) => {
			if (user.firstName.includes(value) || user.lastName.includes(value)) {
				tempList.push(user);
			}
		});
		setUserShow(tempList);
	}

	const rightContainerShow = {
		edit: (
			<>
				<p>EDITING</p>
			</>
		),
		create: <UserCreate></UserCreate>,
		button: (
			<BasicButton
				label={"Create User"}
				color={"green"}
				clickFunction={() => setRightShow("create")}
			></BasicButton>
		),
	};

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
							placeholder="Search Name"
							onChange={(e) => {
								setSearch(e.target.value);
								if (e.target.value.length == 0) {
									getSearch("");
								}
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									getSearch(search);
								}
							}}
						></input>
						<select
							className="sort-dropdown"
							id="role-filter"
							value={filter}
							onChange={(e) => setFilter(e.target.value)}
						>
							<option value="All">All</option>
							{JSON.parse(roleList).map((role) => (
								<option key={role.roleID} value={role.roleName}>
									{role.roleName}
								</option>
							))}
						</select>
						<div className="user-list-container">
							{userShow.map((user) => (
								<UserCard
									key={user.userID}
									firstName={user.firstName}
									lastName={user.lastName}
									role={user.roleID}
									disabled={user.disabled}
									setEditing={setIsEditing}
								></UserCard>
							))}
						</div>
					</div>
					<div className="user-right-container">
						{rightContainerShow[rightShow]}
					</div>
				</div>
			</div>
		</>
	);
}

export default Users;