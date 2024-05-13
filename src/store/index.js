import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'

const store = configureStore({
	reducer: {
		auth: authReducer,
		// Додавайте інші редуктори тут, якщо необхідно
	},
})

export default store
