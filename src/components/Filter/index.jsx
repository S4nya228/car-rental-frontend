import React from 'react'
import './index.scss'
import PriceFilter from '../PriceFilter'
import BrandFilter from '../BrandFilter'
import ColorFilter from '../ColorFilter'
import PowerFilter from '../PowerFilter'

function Filter() {
	return (
		<div className="filter">
			<div className="container">
				<div className="filter__wrapper">
					<PriceFilter />
					<BrandFilter />
					<ColorFilter />
					<PowerFilter />
				</div>
			</div>
		</div>
	)
}

export default Filter
