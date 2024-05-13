import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

function Cars() {
	return (
		<div className="cars">
			<div className="cars__wrapper">
				<Link to="/car/id" className="cars__item">
					<div className="cars__item-images">
						<img
							className="cars__item-image"
							src="/src/assets/Swiper/BMW M8 Competition Grand Coupe.jpeg"
							alt=""
						/>
					</div>
					<div className="cars__item-description">
						<div className="cars__item-name">
							<span>BMW M8 Competition Grand Coupe</span>
						</div>
						<div className="cars__item-price">
							від <span>100$</span>
						</div>
						<div className="cars__item-characteristics">
							<div className="cars__item-power">
								<span>369</span>к.с
							</div>
							<div className="cars__item-liters">
								<span>3.8</span>л
							</div>
							<div className="cars__item-occasion">
								<span>Задній</span>
							</div>
						</div>
					</div>
				</Link>
				<a href="#" className="cars__item">
					<div className="cars__item-images">
						<img
							className="cars__item-image"
							src="/src/assets/Swiper/Lamborghini Urus.jpeg"
							alt=""
						/>
					</div>
					<div className="cars__item-description">
						<div className="cars__item-name">
							<span>BMW M8 Competition Grand Coupe</span>
						</div>
						<div className="cars__item-price">
							від <span>100$</span>
						</div>
						<div className="cars__item-characteristics">
							<div className="cars__item-power">
								<span>369</span>к.с
							</div>
							<div className="cars__item-liters">
								<span>3.8</span>л
							</div>
							<div className="cars__item-occasion">
								<span>Задній</span>
							</div>
						</div>
					</div>
				</a>
				<a href="#" className="cars__item">
					<div className="cars__item-images">
						<img
							className="cars__item-image"
							src="/src/assets/Swiper/Mercedes-Benz AMG GT 63.jpeg"
							alt=""
						/>
					</div>
					<div className="cars__item-description">
						<div className="cars__item-name">
							<span>BMW M8 Competition Grand Coupe</span>
						</div>
						<div className="cars__item-price">
							від <span>100$</span>
						</div>
						<div className="cars__item-characteristics">
							<div className="cars__item-power">
								<span>369</span>к.с
							</div>
							<div className="cars__item-liters">
								<span>3.8</span>л
							</div>
							<div className="cars__item-occasion">
								<span>Задній</span>
							</div>
						</div>
					</div>
				</a>
				<a href="#" className="cars__item">
					<div className="cars__item-images">
						<img
							className="cars__item-image"
							src="/src/assets/Swiper/Mercedes-Benz E63.jpeg"
							alt=""
						/>
					</div>
					<div className="cars__item-description">
						<div className="cars__item-name">
							<span>BMW M8 Competition Grand Coupe</span>
						</div>
						<div className="cars__item-price">
							від <span>100$</span>
						</div>
						<div className="cars__item-characteristics">
							<div className="cars__item-power">
								<span>369</span>к.с
							</div>
							<div className="cars__item-liters">
								<span>3.8</span>л
							</div>
							<div className="cars__item-occasion">
								<span>Задній</span>
							</div>
						</div>
					</div>
				</a>
				<a href="#" className="cars__item">
					<div className="cars__item-images">
						<img
							className="cars__item-image"
							src="/src/assets/Swiper/Mercedes-Benz E63.jpeg"
							alt=""
						/>
					</div>
					<div className="cars__item-description">
						<div className="cars__item-name">
							<span>BMW M8 Competition Grand Coupe</span>
						</div>
						<div className="cars__item-price">
							від <span>100$</span>
						</div>
						<div className="cars__item-characteristics">
							<div className="cars__item-power">
								<span>369</span>к.с
							</div>
							<div className="cars__item-liters">
								<span>3.8</span>л
							</div>
							<div className="cars__item-occasion">
								<span>Задній</span>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	)
}

export default Cars
