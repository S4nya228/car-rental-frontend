import React, { useState, useEffect } from 'react'
import './index.scss'
import axiosInstance from '../../api/axiosInstance'
import { Link, useNavigate } from 'react-router-dom'

function Search() {
	const [debouncedQuery, setDebouncedQuery] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [results, setResults] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		const fetchResults = async () => {
			if (!debouncedQuery) {
				setResults([])
				return
			}

			setLoading(true)
			setError(null)

			try {
				const response = await axiosInstance.get('/search', {
					params: { query: debouncedQuery },
				})
				setResults(response.data)
			} catch (error) {
				setError('Помилка під час пошуку.')
			} finally {
				setLoading(false)
			}
		}

		fetchResults()
	}, [debouncedQuery])

	useEffect(() => {
		setDebouncedQuery('')
		setResults([])
	}, [navigate])

	return (
		<div className="search">
			<input
				type="text"
				placeholder="Пошук..."
				value={debouncedQuery}
				className="search__input"
				onChange={(e) => setDebouncedQuery(e.target.value)}
			/>
			<img
				src="/src/assets/searchIcon.svg"
				alt="search-icon"
				className="search__icon"
			/>
			{loading && <p>Завантаження...</p>}
			{error && <p>{error}</p>}
			{results.length > 0 && (
				<ul className="search__results">
					{results.map((result) => (
						<Link
							to={`/car-fleet/${result.id}`}
							key={result.id}
							className="search__results-item"
						>
							<div className="search__results-item-link">
								<img
									src={`${import.meta.env.VITE_API_BASE_URL}/getImage/${
										result.image_path.split(',')[0]
									}`}
									alt={result.name}
									className="search__results-item-image"
								/>
								<span className="search__results-item-name">{result.name}</span>
							</div>
						</Link>
					))}
				</ul>
			)}
		</div>
	)
}

export default Search
