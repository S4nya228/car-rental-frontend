import React, { useState } from 'react'
import './index.scss'
import PriceFilter from '../PriceFilter'
import BrandFilter from '../BrandFilter'
import ColorFilter from '../ColorFilter'
import PowerFilter from '../PowerFilter'

function Filter() {
	const [priceFilterOpen, setPriceFilterOpen] = useState(false)
	const [brandFilterOpen, setBrandFilterOpen] = useState(false)
	const [colorFilterOpen, setColorFilterOpen] = useState(false)
	const [powerFilterOpen, setPowerFilterOpen] = useState(false)

	const handlePriceFilterToggle = () => {
		setPriceFilterOpen(!priceFilterOpen)
		setBrandFilterOpen(false)
		setColorFilterOpen(false)
		setPowerFilterOpen(false)
	}

	const handleBrandFilterToggle = () => {
		setBrandFilterOpen(!brandFilterOpen)
		setPriceFilterOpen(false)
		setColorFilterOpen(false)
		setPowerFilterOpen(false)
	}

	const handleColorFilterToggle = () => {
		setColorFilterOpen(!colorFilterOpen)
		setPriceFilterOpen(false)
		setBrandFilterOpen(false)
		setPowerFilterOpen(false)
	}

	const handlePowerFilterToggle = () => {
		setPowerFilterOpen(!powerFilterOpen)
		setPriceFilterOpen(false)
		setBrandFilterOpen(false)
		setColorFilterOpen(false)
	}
	return (
		<div className="filter">
			<div className="container">
				<div className="filter__wrapper">
					<PriceFilter
						isOpen={priceFilterOpen}
						toggleDropdown={handlePriceFilterToggle}
					/>
					<BrandFilter
						isOpen={brandFilterOpen}
						toggleDropdown={handleBrandFilterToggle}
					/>
					<ColorFilter
						isOpen={colorFilterOpen}
						toggleDropdown={handleColorFilterToggle}
					/>
					<PowerFilter
						isOpen={powerFilterOpen}
						toggleDropdown={handlePowerFilterToggle}
					/>
				</div>
			</div>
		</div>
	)
}

export default Filter
