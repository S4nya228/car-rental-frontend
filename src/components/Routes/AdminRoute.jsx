import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoute = () => {
	const token = useSelector((state) => state.auth.token)
	const user = useSelector((state) => state.auth.userInfo)
	const [loading, setLoading] = useState(true)
	const [isAdmin, setIsAdmin] = useState(false)

	useEffect(() => {
		if (user) {
			setIsAdmin(user.role === 'admin')
			setLoading(false)
		}
	}, [user])

	if (!token) {
		return <Navigate to="/" />
	}

	if (loading) {
		return <div>Loading...</div>
	}

	if (!isAdmin) {
		return <Navigate to="/" />
	}

	return <Outlet />
}

export default AdminRoute
