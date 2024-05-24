import React, { useState } from 'react'
import './index.scss'
import { CaretDown, CaretUp } from 'react-bootstrap-icons'

function PriceFilter({ isOpen, toggleDropdown }) {
	return (
		<div className="filter-price">
			<div className="filter-price__title" onClick={toggleDropdown}>
				<span>Ціна {isOpen ? <CaretUp /> : <CaretDown />}</span>
			</div>
			<div
				className="filter-price__items"
				style={{ display: isOpen ? 'flex' : 'none' }}
			>
				<input autoComplete="off" placeholder="від 3 500" type="number" />
				<span>-</span>
				<input autoComplete="off" placeholder="до 40 000" type="number" />
				<button className="filter-price__btn-acces">Ок</button>
			</div>
		</div>
	)
}

export default PriceFilter
