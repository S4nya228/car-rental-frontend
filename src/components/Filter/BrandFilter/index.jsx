import React, { useState, useEffect } from 'react'
import './index.scss'
import { CaretDown, CaretUp } from 'react-bootstrap-icons'

function BrandFilter({ isOpen, toggleDropdown, cars }) {
	const [checkedItems, setCheckedItems] = useState({})
	const [brands, setBrands] = useState([])

	console.log(cars)
	useEffect(() => {
		if (cars) {
			const uniqueBrands = [...new Set(cars.map((car) => car.brand))]
			setBrands(uniqueBrands)
		}
	}, [cars])

	const handleItemClick = (id) => {
		setCheckedItems((prevState) => ({
			...prevState,
			[id]: !prevState[id],
		}))
	}

	return (
		<div className="filter-brand">
			<div className="filter-brand__title" onClick={toggleDropdown}>
				<span>Марка {isOpen ? <CaretUp /> : <CaretDown />}</span>
			</div>
			<div
				className="filter-brand__items"
				style={{ display: isOpen ? 'flex' : 'none' }}
			>
				{brands.map((brand, index) => (
					<div
						className="filter-brand__item"
						key={index}
						onClick={() => handleItemClick(`brand${index + 1}`)}
					>
						<div className="filter-checkbox">
							<input
								type="checkbox"
								id={`brand${index + 1}`}
								checked={checkedItems[`brand${index + 1}`]}
							/>
							<label
								htmlFor={`brand${index + 1}`}
								className="filter-checkmark"
							></label>
							<p>{brand}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default BrandFilter
