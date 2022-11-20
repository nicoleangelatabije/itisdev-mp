import React, { useState } from "react";
import BasicButton from "../BasicButton";
import ToggleSwitch from "../ToggleSwitch";

function UserCreate() {
	const [employeeID, setEmployeeID] = useState(0);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("");
	const [isDisabled, setIsDisabled] = useState(false);
	const currentUserID = "00000001";

	function submitForm() {
		let userData = {
			userID: employeeID,
			firstName: firstName,
			lastName: lastName,
			password: password,
			roleID: role,
			creatorID: currentUserID,
			creationDate: new Date(),
			disabled: isDisabled,
		};

		fetch("/api/createUser", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userData),
		})
			.then((res) => res.json())
			.then((data) => console.log("RESPONSE DATA IS:", data));
	}

	function cancelForm() {
		console.log("Cancel form");
	}

	return (
		<>
			<form className="user-create-main-container">
				<h1>CREATE NEW USER</h1>
				<label htmlFor="employeeID">
					Employee ID: <span className="required-mark">*</span>
				</label>
				<input
					type="Number"
					id="employeeID"
					onChange={(e) => setEmployeeID(e.target.value)}
				></input>
				<label htmlFor="firstName">
					First Name: <span className="required-mark">*</span>
				</label>
				<input
					type="text"
					id="firstName"
					onChange={(e) => setFirstName(e.target.value)}
				></input>
				<label htmlFor="lastName">
					Last Name: <span className="required-mark">*</span>
				</label>
				<input
					type="text"
					id="lastName"
					onChange={(e) => setLastName(e.target.value)}
				></input>

				<label htmlFor="password">
					Password: <span className="required-mark">*</span>
				</label>
				<input
					type="password"
					id="password"
					onChange={(e) => setPassword(e.target.value)}
				></input>
				<label htmlFor="role">
					Role: <span className="required-mark">*</span>
				</label>
				<select
					className="sort-dropdown"
					id="user-create-role"
					defaultValue={"Employee"}
					onChange={(e) => setRole(e.target.value)}
				>
					<option value="0000">Admin</option>
					<option value="0001">Manager</option>
					<option value="0002">Employee</option>
				</select>
				<span>Status:</span>
				<ToggleSwitch
					disabled={isDisabled}
					setDisabled={setIsDisabled}
				></ToggleSwitch>

				<div className="user-create-button-container">
					<BasicButton
						label={"Save"}
						color={"green"}
						type={"button"}
						clickFunction={submitForm}
					></BasicButton>
					<BasicButton
						label={"Cancel"}
						color={"gray"}
						type={"reset"}
					></BasicButton>
				</div>
			</form>
		</>
	);
}

export default UserCreate;
