import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

import PiybeepIcon from "../public/img/piybeep.jpg";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<nav>
				<Link target="_blank" title="piybeep" href={"https://piybeep.com"}>
					<Image className={styles.footer_icon} src={PiybeepIcon} alt="icon" />
					Студия
				</Link>
				<Link
					title="danyatochkaru"
					rel="noopener noreferrer"
					target="_blank"
					href="https://github.com/danyatochkaru"
				>
					Гитхаб
				</Link>
				<Link
					href="https://t.me/danyatochkaru"
					title="@danyatochkaru"
					target="_blank"
					rel="noopener noreferrer"
				>
					Телеграм
				</Link>
				<Link
					href="mailto:support@danyatochka.ru"
					title="support@danyatochka.ru"
				>
					Почта
				</Link>
			</nav>
		</footer>
	);
}
