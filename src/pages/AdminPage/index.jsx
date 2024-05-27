import React from 'react'
import './index.scss'
import SideBar from '../../components/Admin/SideBar'
import { Routes, Route } from 'react-router-dom'
import AdminCars from '../../components/Admin/AdminCars'
import AdminOrder from '../../components/Admin/Order'
import AuthRoute from '../../components/Routes/AuthRoute'

function AdminPage() {
	return (
		<div className="admin-page">
			<div className="admin-page__wrapper">
				<SideBar />
				<div className="admin-page__layout">
					<Routes>
						<Route element={<AuthRoute />}>
							<Route path="/" element={<AdminCars />} />
							<Route path="/order" element={<AdminOrder />} />
						</Route>
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default AdminPage
