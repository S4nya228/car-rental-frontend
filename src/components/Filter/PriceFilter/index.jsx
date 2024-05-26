import React, { useState } from 'react'
import './index.scss'
import { CaretDown, CaretUp } from 'react-bootstrap-icons'

function PriceFilter({ isOpen, toggleDropdown, filters, setFilters }) {
	const [minPrice, setMinPrice] = useState('')
	const [maxPrice, setMaxPrice] = useState('')

	const handleMinPriceChange = (e) => {
		setMinPrice(e.target.value)
	}

	const handleMaxPriceChange = (e) => {
		setMaxPrice(e.target.value)
	}

	const handleApplyFilter = () => {
		setFilters((prevFilters) => ({
			...prevFilters,
			minPrice: minPrice,
			maxPrice: maxPrice,
		}))
	}

	return (
		<div className="filter-price">
			<div className="filter-price__title" onClick={toggleDropdown}>
				<span>Ціна {isOpen ? <CaretUp /> : <CaretDown />}</span>
			</div>
			<div
				className="filter-price__items"
				style={{ display: isOpen ? 'flex' : 'none' }}
			>
				<input
					autoComplete="off"
					placeholder="від"
					type="number"
					value={minPrice}
					onChange={handleMinPriceChange}
				/>
				<span>-</span>
				<input
					autoComplete="off"
					placeholder="до"
					type="number"
					value={maxPrice}
					onChange={handleMaxPriceChange}
				/>
				<button className="filter-price__btn-acces" onClick={handleApplyFilter}>
					Ок
				</button>
			</div>
		</div>
	)
}

export default PriceFilter
