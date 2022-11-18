import React, { useEffect, useState } from "react";

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
					<div className="logout-button-container" onClick={logout}>
						<span>Log Out</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
