import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

function Breadcrumb() {
	return (
		<div className="breadcrumb">
			<div className="container">
				<div className="breadcrumb__wrapper">
					<Link className="breadcrumb__link-to-main" to="/">
						Головна
					</Link>
					<span>/</span>
					<span className="breadcrumb__active-page">Автомобілі</span>
				</div>
			</div>
		</div>
	)
}

export default Breadcrumb
