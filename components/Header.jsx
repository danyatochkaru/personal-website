import styles from "../styles/Header.module.css";

export default function Header() {
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
		</header>
	);
}
