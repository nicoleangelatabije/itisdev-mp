import "../css/style.scss";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import "regenerator-runtime";
import { Router } from "next/router";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const start = () => {
			setLoading(true);
		};
		const end = () => {
			setLoading(false);
		};
		Router.events.on("routeChangeStart", start);
		Router.events.on("routeChangeComplete", end);
		Router.events.on("routeChangeError", end);
		return () => {
			Router.events.off("routeChangeStart", start);
			Router.events.off("routeChangeComplete", end);
			Router.events.off("routeChangeError", end);
		};
	}, []);

	return (
		<>
			{loading ? (
				<div id="loading-main-container">
					<div id="blur-main-container"></div>
					<div id="loading-content-container">
						<Image
							id="loading-logo"
							src="/Milaor.png"
							width="150px"
							height="150px"
						></Image>
						<h1>Loading...</h1>
					</div>
				</div>
			) : (
				<></>
			)}
			<Head>
				<title>Milaor Trading Corporation</title>
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
