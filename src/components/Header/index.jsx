import React, { useState } from 'react'
import '../Header/index.scss'
import { Link } from 'react-router-dom'
import Search from '../Search'
import { useSelector } from 'react-redux'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const token = useSelector((state) => state.auth.token)
	const userInfo = useSelector((state) => state.auth.userInfo)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<header className="header">
			<div className="container">
				<div className="header__wrapper">
					<Link to="/" className="header__logo">
						<img src="/src/assets/logo.png" alt="logo" />
					</Link>
					<button
						className={`header__burger-menu ${isMenuOpen ? 'open' : ''}`}
						onClick={toggleMenu}
					>
						<span className="line"></span>
						<span className="line"></span>
						<span className="line"></span>
					</button>
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
						{userInfo ? (
							<Link to="/profile" className="header__auth-name">
								<span>{userInfo.name}</span>
							</Link>
						) : (
							<Link to="/login" className="header__auth-link">
								<span>Увійти</span>
							</Link>
						)}
					</div>
				</div>
			</div>
			<div className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`}>
				<div className="sidebar-menu__nav">
					<div className="sidebar-menu__menu">
						<Link
							to="car-fleet"
							onClick={toggleMenu}
							className="sidebar-menu__item-fleet"
						>
							<span>Автопарк</span>
						</Link>
						<Link
							to="/booking"
							onClick={toggleMenu}
							className="sidebar-menu__item-booking"
						>
							<span>Бронювання</span>
						</Link>
						<Link
							to="/about-us"
							onClick={toggleMenu}
							className="sidebar-menu__item-about"
						>
							<span>Про нас</span>
						</Link>
					</div>
					<div className="sidebar-menu__auth">
						<Link
							to="/login"
							onClick={toggleMenu}
							className="sidebar-menu__auth-link"
						>
							<span>Увійти</span>
						</Link>
					</div>
				</div>
				<Search />
			</div>
		</header>
	)
}

export default Header
