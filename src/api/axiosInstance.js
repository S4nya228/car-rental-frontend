import axios from 'axios'
import store from '../store/index.js'
import { setTokens, clearTokens } from '../store/authSlice'

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: {
		Accept: 'application/json',
	},
})

axiosInstance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config

		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true
			const refreshToken = store.getState().auth.refreshToken

			try {
				const response = await axios.post(
					`${import.meta.env.VITE_API_BASE_URL}/refresh`,
					{ token: refreshToken }
				)
				const { accessToken, refreshToken: newRefreshToken } = response.data

				store.dispatch(
					setTokens({
						accessToken,
						refreshToken: newRefreshToken,
					})
				)

				axiosInstance.defaults.headers.common[
					'Authorization'
				] = `Bearer ${accessToken}`
				originalRequest.headers['Authorization'] = `Bearer ${accessToken}`

				return axiosInstance(originalRequest)
			} catch (refreshError) {
				store.dispatch(clearTokens())
				return Promise.reject(refreshError)
			}
		}

		return Promise.reject(error)
	}
)

export default axiosInstance
