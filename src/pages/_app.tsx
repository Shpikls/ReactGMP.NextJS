import React from 'react'
import {AppProps} from 'next/dist/shared/lib/router/router';
import {wrapper} from "../redux/store";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<title>React global mentoring program App</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default wrapper.withRedux(MyApp)
