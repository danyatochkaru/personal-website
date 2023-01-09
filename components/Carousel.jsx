import Image from "next/image";
import { Button, Card } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

import styles from "../styles/Carousel.module.css";
import { EyeFilled } from "@ant-design/icons";

export default function Carousel({ items = [] }) {
	return (
		<Swiper
			className={styles.carousel}
			modules={[Mousewheel, Pagination]}
			mousewheel={{ sensitivity: 1 }}
			direction={"vertical"}
			spaceBetween={60}
			slidesPerView={"auto"}
			watchOverflow
			grabCursor
			pagination={{ clickable: true, dynamicBullets: true }}
			autoHeight
			// onSwiper={(swiper) => console.log(swiper)}
		>
			{items.map((i) => (
				<SwiperSlide key={i?.id}>
					<div className={styles.card}>
						<div className={styles.card_preview_image}>
							<Image
								alt={i.title}
								src={
									i?.image ??
									"https://petrotechnology.ru/sites/default/files/goods_images/noimg_7.png"
								}
								width={400}
								height={400}
							/>
						</div>
						<div className={styles.card_content}>
							<div className={styles.card_title}>{i.title}</div>
							{i?.description ? (
								<p className={styles.card_description}>{i?.description}</p>
							) : (
								""
							)}
						</div>
						<button className={styles.card_btn_more}>Подробнее</button>
					</div>
					{/* <Card
						// title={i.title}
						cover={
							<Image
								alt={i.title}
								src={
									i?.image ??
									"https://petrotechnology.ru/sites/default/files/goods_images/noimg_7.png"
								}
								width={400}
								height={400}
							/>
						}
						bordered={false}
						actions={[<span key="showmore">Подробнее</span>]}
					>
						<Card.Meta title={i.title} description="This is the description" />
					</Card> */}
				</SwiperSlide>
			))}
		</Swiper>
	);
}
