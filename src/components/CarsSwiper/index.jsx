import React from 'react'
import { Navigation, A11y, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './index.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import { Link } from 'react-router-dom'
function CarsSwiper() {
	return (
		<div className="cars-swiper">
			<div className="cars-swiper__title">
				<span>Вибір автомобілів</span>
			</div>
			<Swiper
				modules={[Navigation, A11y, FreeMode]}
				spaceBetween={35}
				slidesPerView={3.25}
				navigation
				freeMode={true}
			>
				<SwiperSlide>
					<Link to="car/id" className="cars-swiper__item">
						<div className="cars-swiper__item-images">
							<img
								className="cars-swiper__item-image"
								src="/src/assets/Swiper/BMW M8 Competition Grand Coupe.jpeg"
								alt=""
							/>
						</div>
						<div className="cars-swiper__item-description">
							<div className="cars-swiper__item-name">
								<span>BMW M8 Competition Grand Coupe</span>
							</div>
							<div className="cars-swiper__item-price">
								від <span>100$</span>
							</div>
							<div className="cars-swiper__item-characteristics">
								<div className="cars-swiper__item-power">
									<span>369</span>к.с
								</div>
								<div className="cars-swiper__item-liters">
									<span>3.8</span>л
								</div>
								<div className="cars-swiper__item-occasion">
									<span>Задній</span>
								</div>
							</div>
						</div>
					</Link>
				</SwiperSlide>

				<SwiperSlide>
					<a href="#" className="cars-swiper__item">
						<div className="cars-swiper__item-images">
							<img
								className="cars-swiper__item-image"
								src="/src/assets/Swiper/Lamborghini Urus.jpeg"
								alt=""
							/>
						</div>
						<div className="cars-swiper__item-description">
							<div className="cars-swiper__item-name">
								<span>BMW M8 Competition Grand Coupe</span>
							</div>
							<div className="cars-swiper__item-price">
								від <span>100$</span>
							</div>
							<div className="cars-swiper__item-characteristics">
								<div className="cars-swiper__item-power">
									<span>369</span>к.с
								</div>
								<div className="cars-swiper__item-liters">
									<span>3.8</span>л
								</div>
								<div className="cars-swiper__item-occasion">
									<span>Задній</span>
								</div>
							</div>
						</div>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href="#" className="cars-swiper__item">
						<div className="cars-swiper__item-images">
							<img
								className="cars-swiper__item-image"
								src="/src/assets/Swiper/Mercedes-Benz AMG GT 63.jpeg"
								alt=""
							/>
						</div>
						<div className="cars-swiper__item-description">
							<div className="cars-swiper__item-name">
								<span>BMW M8 Competition Grand Coupe</span>
							</div>
							<div className="cars-swiper__item-price">
								від <span>100$</span>
							</div>
							<div className="cars-swiper__item-characteristics">
								<div className="cars-swiper__item-power">
									<span>369</span>к.с
								</div>
								<div className="cars-swiper__item-liters">
									<span>3.8</span>л
								</div>
								<div className="cars-swiper__item-occasion">
									<span>Задній</span>
								</div>
							</div>
						</div>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href="#" className="cars-swiper__item">
						<div className="cars-swiper__item-images">
							<img
								className="cars-swiper__item-image"
								src="/src/assets/Swiper/Mercedes-Benz E63.jpeg"
								alt=""
							/>
						</div>
						<div className="cars-swiper__item-description">
							<div className="cars-swiper__item-name">
								<span>BMW M8 Competition Grand Coupe</span>
							</div>
							<div className="cars-swiper__item-price">
								від <span>100$</span>
							</div>
							<div className="cars-swiper__item-characteristics">
								<div className="cars-swiper__item-power">
									<span>369</span>к.с
								</div>
								<div className="cars-swiper__item-liters">
									<span>3.8</span>л
								</div>
								<div className="cars-swiper__item-occasion">
									<span>Задній</span>
								</div>
							</div>
						</div>
					</a>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default CarsSwiper
