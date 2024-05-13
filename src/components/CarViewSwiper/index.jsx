import React from 'react'
import { Navigation, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './index.scss'
import 'swiper/css'
import 'swiper/css/navigation'

function CarViewSwiper() {
	return (
		<div className="car-view">
			<Swiper
				modules={[Navigation, A11y]}
				spaceBetween={35}
				slidesPerView={2}
				navigation
				loop
				centeredSlides
			>
				<div className="car-view__wrapper">
					<SwiperSlide>
						<img
							className="car-view__item-image"
							src="/src/assets/ViewCar/BMW 520D Black/1.jpg"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className="car-view__item-image"
							src="/src/assets/ViewCar/BMW 520D Black/2.jpg"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className="car-view__item-image"
							src="/src/assets/ViewCar/BMW 520D Black/3.jpg"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className="car-view__item-image"
							src="/src/assets/ViewCar/BMW 520D Black/4.jpg"
							alt=""
						/>
					</SwiperSlide>
				</div>
			</Swiper>
		</div>
	)
}

export default CarViewSwiper
