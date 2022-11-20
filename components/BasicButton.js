import React from "react";

function BasicButton({ label, color, clickFunction, type }) {
	const buttonColor = {
		red: (
			<button
				className="red-button-container"
				onClick={clickFunction}
				type={type}
			>
				<span>{label}</span>
			</button>
		),
		green: (
			<button
				className="green-button-container"
				onClick={clickFunction}
				type={type}
			>
				<span>{label}</span>
			</button>
		),
		gray: (
			<button
				className="gray-button-container"
				onClick={clickFunction}
				type={type}
			>
				<span>{label}</span>
			</button>
		),
	};

	return <>{buttonColor[color]}</>;
}

export default BasicButton;
