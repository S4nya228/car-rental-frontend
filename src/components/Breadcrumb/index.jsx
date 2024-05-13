import React from 'react'
import './index.scss'
import { Link, useLocation } from 'react-router-dom'

function Breadcrumb() {
	const pathNamesMap = {
		'/': 'Головна',
		'/car-fleet': 'Автопарк',
		'/about-us': 'Про нас',
		'/profile': 'Акаунт',
		'/profile/my-order': 'Мої бронювання',
	}
	const location = useLocation()
	const pathnames = location.pathname.split('/').filter((x) => x)

	return (
		<div className="breadcrumb">
			<div className="container">
				<div className="breadcrumb__wrapper">
					<Link className="breadcrumb__link-to-main" to="/">
						Головна
					</Link>
					{pathnames.map((name, index) => {
						const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
						const isLast = index === pathnames.length - 1
						const displayName = pathNamesMap[routeTo] || name
						return (
							<React.Fragment key={index}>
								<span>/</span>
								{isLast ? (
									<span className="breadcrumb__active-page">{displayName}</span>
								) : (
									<React.Fragment>
										<Link to={routeTo} className="breadcrumb__link">
											{displayName}
										</Link>
									</React.Fragment>
								)}
							</React.Fragment>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Breadcrumb
