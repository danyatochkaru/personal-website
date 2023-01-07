import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
	return (
		<>
			<Head>
				<title>{"danyatochkaru's showcase"}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<main>
				<Header />
			</main>
		</>
	);
}
