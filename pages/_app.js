import "../css/style.scss";
import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Milaor Trading Corporation</title>
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
