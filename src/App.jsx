import React from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'
import Registration from './pages/Registration'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import CarFleet from './pages/CarFleet'
import Car from './pages/Car'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'
function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} index />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Registration />} />
				<Route path="/car-fleet" element={<CarFleet />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/car/id" element={<Car />} />
				<Route path="*" element={<Navigate to="/" />} />
				<Route path="/profile/*" element={<Profile />} />
			</Routes>

			<Footer />
		</div>
	)
}

export default App
