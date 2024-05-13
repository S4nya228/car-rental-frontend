import React from 'react'
import './index.scss'

function Search() {
	return (
		<div className="search">
			<input type="text" placeholder="Пошук..." className="search__input" />
			<img
				src="/src/assets/searchIcon.svg"
				alt="search-icon"
				className="search__icon"
			/>
		</div>
	)
}

export default Search
