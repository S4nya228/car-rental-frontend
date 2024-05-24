import React from 'react'
import { Navigation, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './index.scss'
import 'swiper/css'
import 'swiper/css/navigation'

function CarViewSwiper({ images }) {
	console.log(images)
	return (
		<div className="car-view">
			<Swiper
				modules={[Navigation, A11y]}
				spaceBetween={35}
				slidesPerView={2}
				navigation
				centeredSlides
			>
				<div className="car-view__wrapper">
					{images.map((image, index) => (
						<SwiperSlide key={index}>
							<img
								className="car-view__item-image"
								src={image}
								alt={`Car image ${index + 1}`}
							/>
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</div>
	)
}

export default CarViewSwiper
