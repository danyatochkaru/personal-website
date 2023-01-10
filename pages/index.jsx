import Head from "next/head";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Description from "../components/Description";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>{"danyatochkaru's website"}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<main>
				<Header />
				<section className="content">
					<Description />
					<Carousel
						items={[
							{
								id: 1,
								title: "IKT54",
								image:
									"https://piybeep.com/static/media/ks54Page.d956d1f6947651ce7162.png",
								description: "Lorem....",
							},
							{
								id: 2,
								title: "Hackaton",
								image:
									"https://piybeep.com/static/media/hacPage.c13d2a0458495997eb07.png",
							},
							// {
							// 	id: 3,
							// 	title: "MoscowCold",
							// 	image: null,
							// 	description:
							// 		"Данный сайт является интернет-магазином кондеционеров.",
							// },
							// {
							// 	id: 4,
							// 	title: "Loctravel",
							// 	image:
							// 		"https://piybeep.com/static/media/loctravelPage.d1f551ebf6c921740e72.png",
							// },
						]}
					/>
				</section>
				<Footer />
				{/* <footer>links</footer> */}
			</main>
		</>
	);
}
