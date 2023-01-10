import Link from "next/link";
import styles from "../styles/Description.module.css";

export default function Description() {
	return (
		<div className={styles.description}>
			<p>
				<Link
					href="https://ru.wikipedia.org/wiki/Node.js"
					target="_blank"
					rel="noopener noreferrer"
				>
					Node.js
				</Link>{" "}
				программист.
			</p>
			<br />
			<p title="TypeScript, React, Express, Nginx, NextJS, NestJS">
				Пишу сайты, управляю проектами, иногда отдыхаю.
			</p>
		</div>
	);
}
