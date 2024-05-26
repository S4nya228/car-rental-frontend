import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoute = () => {
	const role = useSelector((state) => state.auth.userInfo?.role)

	return role === 'admin' ? <Outlet /> : <Navigate to="/" />
}

export default AdminRoute
