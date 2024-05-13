import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'

function ProfileMenu() {
	return (
		<div className="profile-menu">
			<div className="container">
				<div className="profile-menu__wrapper">
					<NavLink
						to="/profile"
						className="profile-menu__items"
						activeclassname="active"
						end
					>
						Акаунт
					</NavLink>
					<NavLink
						to="/profile/my-order"
						className="profile-menu__items"
						activeclassname="active"
					>
						Мої бронювання
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default ProfileMenu
