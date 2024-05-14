import React from 'react'
import '../Header/index.scss'
import { Link } from 'react-router-dom'
import Search from '../Search'

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__wrapper">
					<Link to="/" className="header__logo">
						<img src="/src/assets/logo.png" alt="logo" />
					</Link>
					<div className="header__nav">
						<div className="header__menu">
							<Link to="car-fleet" className="header__item-fleet">
								<span>Автопарк</span>
							</Link>
							<Link to="/booking" className="header__item-booking">
								<span>Бронювання</span>
							</Link>
							<Link to="/about-us" className="header__item-about">
								<span>Про нас</span>
							</Link>
						</div>
						<Search />
					</div>

					<div className="header__auth">
						<Link to="/login" className="header__auth-link">
							<span>Увійти</span>
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
