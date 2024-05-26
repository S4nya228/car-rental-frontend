import React, { useState } from 'react'
import './index.scss'
import PriceFilter from './PriceFilter'
import BrandFilter from './BrandFilter'
import ColorFilter from './ColorFilter'
import PowerFilter from './PowerFilter'

function Filter({ cars }) {
	const [filters, setFilters] = useState({
		priceFilterOpen: false,
		brandFilterOpen: false,
		colorFilterOpen: false,
		powerFilterOpen: false,
	})

	const handleFilterToggle = (filterName) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			[filterName]: !prevFilters[filterName],
		}))

		const otherFilters = Object.keys(filters).filter(
			(key) => key !== filterName
		)
		otherFilters.forEach((filter) =>
			setFilters((prevFilters) => ({ ...prevFilters, [filter]: false }))
		)
	}

	return (
		<div className="filter">
			<div className="container">
				<div className="filter__wrapper">
					<PriceFilter
						cars={cars}
						isOpen={filters.priceFilterOpen}
						toggleDropdown={() => handleFilterToggle('priceFilterOpen')}
					/>
					<BrandFilter
						isOpen={filters.brandFilterOpen}
						toggleDropdown={() => handleFilterToggle('brandFilterOpen')}
					/>
					<ColorFilter
						isOpen={filters.colorFilterOpen}
						toggleDropdown={() => handleFilterToggle('colorFilterOpen')}
					/>
					<PowerFilter
						isOpen={filters.powerFilterOpen}
						toggleDropdown={() => handleFilterToggle('powerFilterOpen')}
					/>
				</div>
			</div>
		</div>
	)
}

export default Filter
