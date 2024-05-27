import { useEffect } from 'react'
import axiosInstance from '../../api/axiosInstance'
import { useDispatch, useSelector } from 'react-redux'
import { setTokens, setUserInfo } from '../../store/authSlice'

function AuthUser() {
	const token = useSelector((state) => state.auth.token)
	const refreshToken = useSelector((state) => state.auth.refreshToken)

	const dispatch = useDispatch()

	const refresh = async () => {
		try {
			let response = await axiosInstance.post('/refresh', null, {
				headers: { Authorization: `Bearer ${refreshToken}` },
			})

			dispatch(setTokens(response.data))
		} catch (error) {
			console.log('Error refreshing token:', error)
		}
	}

	const fetchUser = async () => {
		try {
			let response = await axiosInstance.post('/user', null, {
				headers: { Authorization: `Bearer ${token}` },
			})

			dispatch(setUserInfo(response.data.data))
		} catch (error) {
			console.log('Error fetching user info:', error)
		}
	}

	useEffect(() => {
		if (!token && refreshToken) {
			refresh()
		}
	}, [token, refreshToken])

	useEffect(() => {
		if (token) {
			fetchUser()
		}
	}, [token])

	return null
}

export default AuthUser
