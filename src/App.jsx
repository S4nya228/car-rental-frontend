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
import Booking from './pages/Booking'
import AuthUser from './components/UserInfo/getUserInfo'
import AdminPage from './pages/AdminPage'
import 'react-toastify/dist/ReactToastify.css'
import AuthRoute from './components/Routes/AuthRoute'
import AdminRoute from './components/Routes/AdminRoute'
import { useSelector } from 'react-redux'

function App() {
	const token = useSelector((state) => state.auth.token)

	return (
		<div className="app">
			<Header />
			<AuthUser />
			<Routes>
				<Route path="/" element={<HomePage />} index />
				{!token && <Route path="/login" element={<Login />} />}
				{!token && <Route path="/register" element={<Registration />} />}
				<Route path="/car-fleet" element={<CarFleet />} />
				<Route path="/car-fleet/:id" element={<Car />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route element={<AuthRoute />}>
					<Route path="/profile/*" element={<Profile />} />
				</Route>
				<Route path="/booking" element={<Booking />} />
				<Route element={<AdminRoute />}>
					<Route path="/admin/*" element={<AdminPage />} />
				</Route>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
