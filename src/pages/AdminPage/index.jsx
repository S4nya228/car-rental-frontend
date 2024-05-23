import React from 'react'
import './index.scss'
import SideBar from '../../components/Admin/SideBar'
import { Route, Routes } from 'react-router-dom'
import AdminCars from '../../components/Admin/AdminCars'
import AdminOrder from '../../components/Admin/Order'

function AdminPage() {
	return (
		<div className="admin-page">
			<div className="admin-page__wrapper">
				<SideBar />
				<div className="admin-page__layout">
					<Routes>
						<Route path="/" element={<AdminCars />} />
						<Route path="/order" element={<AdminOrder />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default AdminPage
