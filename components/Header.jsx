import { useRouter } from "next/router";
import { Button } from "antd";

import styles from "../styles/Header.module.css";

export default function Header() {
	const router = useRouter();

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				Даня
				<span className={styles.dot}>
					<marquee scrollamount="2" direction="right">
						ru
					</marquee>
				</span>
			</div>
			<nav className={styles.nav}>
				<Button type="link" onClick={() => router.push("/portfolio")}>
					Порфтолио
				</Button>
			</nav>
		</header>
	);
}
