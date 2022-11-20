import React, { useEffect, useState } from "react";
import BasicButton from "./BasicButton";

function Header({ page, subPage, user }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		console.log("IS LOGGED IN:" + isLoggedIn);
	}, [isLoggedIn]);

	function logout() {
		setIsLoggedIn(!isLoggedIn);
	}

	return (
		<>
			<div id="main-header-container">
				<div id="page-text-container">
					<span id="main">{page}</span>
					<span id="sub">{subPage}</span>
				</div>
				<div id="user-container">
					<div id="text">
						<span>Hello,</span>
						<span>{user}</span>
					</div>
					<BasicButton
						label={"Log Out"}
						color={"red"}
						clickFunction={logout}
						type={"button"}
					></BasicButton>
				</div>
			</div>
		</>
	);
}

export default Header;
