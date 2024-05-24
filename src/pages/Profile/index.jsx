import React from 'react'
import './index.scss'
import ProfileMenu from '../../components/ProfileMenu'
import Breadcrumb from '../../components/Breadcrumb'
import ProfileLayout from '../../components/ProfileMenu/ProfileLayout'
import MyOrder from '../../components/ProfileMenu/MyOrder'
import { Route, Routes } from 'react-router-dom'

function Profile() {
	return (
		<div className="profile">
			<Breadcrumb />
			<div className="profile__wrapper">
				<ProfileMenu />
				<Routes>
					<Route path="/" element={<ProfileLayout />} />
					<Route path="/my-order" element={<MyOrder />} />
				</Routes>
			</div>
		</div>
	)
}

export default Profile
