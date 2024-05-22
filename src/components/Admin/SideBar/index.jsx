import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'

function SideBar() {
	return (
		<div className="sidebar">
			<div className="sidebar__wrapper">
				<div className="sidebar__list">
					<NavLink
						to="/admin"
						className="sidebar__items"
						activeclassname="active"
						end
					>
						Автомобілі
					</NavLink>
					<NavLink
						to="/admin/order"
						className="sidebar__items"
						activeclassname="active"
					>
						Бронювання
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default SideBar
