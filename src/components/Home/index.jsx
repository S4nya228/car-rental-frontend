import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

function Home() {
	return (
		<main className="home">
			<div className="home__video-background">
				<video className="home__sleep-video" autoPlay loop muted>
					<source src="/src/assets/background.mp4" type="video/mp4" />
				</video>
				<div className="home__overlay"></div>
			</div>
			<div className="home__content">
				<div className="home__container">
					<div className="home__name">
						<span>
							Vroom Vibes - АРЕНДА <br /> ЕЛІТНИХ АВТОМОБІЛЕЙ В УЖГОРОДІ
						</span>
					</div>
					<div className="home__list">
						<div className="home__list-item">
							<div className="home__item-icon">
								<img src="src/assets/refund-1.png" alt="icon" />
							</div>
							<div className="home__item-description">
								<span className="home__bold-text">Cash-back</span> <br />
								7%
							</div>
						</div>
						<div className="home__list-item">
							<div className="home__item-icon">
								<img src="src/assets/driving-test-2.png" alt="icon" />
							</div>
							<div className="home__item-description">
								<span className="home__bold-text">Стаж водіння</span> <br />
								від 10 місяців
							</div>
						</div>
						<div className="home__list-item">
							<div className="home__item-icon">
								<img src="src/assets/checked-1.png" alt="icon" />
							</div>
							<div className="home__item-description">
								<span className="home__bold-text">
									Безкоштовна доставка в робочий час
								</span>{' '}
								<br />
								при бронюванні від 5 днів
							</div>
						</div>
						<div className="home__list-item">
							<div className="home__item-icon">
								<img src="src/assets/location-1.png" alt="icon" />
							</div>
							<div className="home__item-description">
								<span className="home__bold-text">Офіс в центрі Ужгорода</span>
							</div>
						</div>
					</div>
					<Link to="car-fleet" className="home__link">
						<span>Обрати машину</span>
					</Link>
				</div>
			</div>
		</main>
	)
}

export default Home
