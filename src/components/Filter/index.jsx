import React, { useState } from 'react'
import './index.scss'
import PriceFilter from './PriceFilter'
import BrandFilter from './BrandFilter'
import ColorFilter from './ColorFilter'
import PowerFilter from './PowerFilter'

function Filter({ cars, filters, setFilters }) {
	const [filtersOpen, setFiltersOpen] = useState({
		priceFilterOpen: false,
		brandFilterOpen: false,
		colorFilterOpen: false,
		powerFilterOpen: false,
	})

	const handleFilterToggle = (filterName) => {
		setFiltersOpen((prevFilters) => ({
			...prevFilters,
			[filterName]: !prevFilters[filterName],
		}))

		const otherFilters = Object.keys(filtersOpen).filter(
			(key) => key !== filterName
		)
		otherFilters.forEach((filter) =>
			setFiltersOpen((prevFilters) => ({ ...prevFilters, [filter]: false }))
		)
	}

	return (
		<div className="filter">
			<div className="container">
				<div className="filter__wrapper">
					<PriceFilter
						isOpen={filtersOpen.priceFilterOpen}
						toggleDropdown={() => handleFilterToggle('priceFilterOpen')}
						filters={filters}
						setFilters={setFilters}
					/>
					<BrandFilter
						cars={cars}
						isOpen={filtersOpen.brandFilterOpen}
						toggleDropdown={() => handleFilterToggle('brandFilterOpen')}
						filters={filters}
						setFilters={setFilters}
					/>
					<ColorFilter
						cars={cars}
						isOpen={filtersOpen.colorFilterOpen}
						toggleDropdown={() => handleFilterToggle('colorFilterOpen')}
						filters={filters}
						setFilters={setFilters}
					/>
					<PowerFilter
						cars={cars}
						isOpen={filtersOpen.powerFilterOpen}
						toggleDropdown={() => handleFilterToggle('powerFilterOpen')}
						filters={filters}
						setFilters={setFilters}
					/>
				</div>
			</div>
		</div>
	)
}

export default Filter
