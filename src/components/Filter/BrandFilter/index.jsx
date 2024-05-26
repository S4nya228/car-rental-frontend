import React, { useEffect, useState } from 'react'
import './index.scss'
import { CaretDown, CaretUp } from 'react-bootstrap-icons'

function BrandFilter({ isOpen, toggleDropdown, cars, filters, setFilters }) {
	const [initialBrands, setInitialBrands] = useState([])

	const handleCheckboxChange = (e) => {
		const { name, checked } = e.target
		setFilters((prevFilters) => ({
			...prevFilters,
			brands: checked
				? [...prevFilters.brands, name]
				: prevFilters.brands.filter((brand) => brand !== name),
		}))
	}

	useEffect(() => {
		if (initialBrands.length === 0 && cars.length > 0) {
			const uniqueBrands = [...new Set(cars.map((car) => car.brand))]
			setInitialBrands(uniqueBrands)
		}
	}, [cars, initialBrands])

	return (
		<div className="filter-brand">
			<div className="filter-brand__title" onClick={toggleDropdown}>
				<span>Марка {isOpen ? <CaretUp /> : <CaretDown />}</span>
			</div>
			<div
				className="filter-brand__items"
				style={{ display: isOpen ? 'flex' : 'none' }}
			>
				{initialBrands.map((brand) => (
					<div className="filter-brand__item" key={brand}>
						<div className="filter-checkbox">
							<input
								type="checkbox"
								id={brand}
								name={brand}
								onChange={handleCheckboxChange}
								checked={filters.brands.includes(brand)}
							/>
							<label htmlFor={brand} className="filter-checkmark"></label>
							<p>{brand}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default BrandFilter
