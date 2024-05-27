import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import FormControl from '@mui/material/FormControl'
import axiosInstance from '../../../api/axiosInstance'
import './index.scss'
import { useSelector } from 'react-redux'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}))

export default function AdminOrder() {
	const [orders, setOrders] = React.useState([])
	const token = useSelector((state) => state.auth.token)
	const orderStatus = {
		1: 'Виконано',
		2: 'Очікує підтвердження',
		3: 'Скасовано',
	}

	React.useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await axiosInstance.get('/admin/booking')
				setOrders(response.data.data)
			} catch (error) {
				console.error('Error fetching orders:', error)
			}
		}

		fetchOrders()
	}, [])

	const handleStatusChange = async (order, e) => {
		try {
			const newStatus = e.target.value

			const updatedOrderData = {
				car_id: order.car_id,
				phone_number: order.phone_number,
				booking_date: order.booking_date,
				lease_term: order.lease_term,
				destination: order.destination,
				order_status: newStatus,
			}

			await axiosInstance.post(`/admin/booking/${order.id}`, updatedOrderData, {
				headers: { Authorization: `Bearer ${token}` },
			})

			const updatedOrders = orders.map((o) =>
				o.id === order.id ? { ...o, order_status: newStatus } : o
			)
			setOrders(updatedOrders)
		} catch (error) {
			console.error(`Error updating order status for order ${order.id}:`, error)
		}
	}

	return (
		<TableContainer className="admin-cars" component={Paper}>
			<Table
				className="admin-cars__wrapper"
				sx={{ minWidth: 700 }}
				aria-label="customized table"
			>
				<TableHead>
					<TableRow>
						<StyledTableCell align="center">ID Замовлення</StyledTableCell>
						<StyledTableCell align="center">Автомобіль</StyledTableCell>
						<StyledTableCell align="center">Дата</StyledTableCell>
						<StyledTableCell align="center">Адреса</StyledTableCell>
						<StyledTableCell align="center">Термін оренди</StyledTableCell>
						<StyledTableCell align="center">Користувач</StyledTableCell>
						<StyledTableCell align="center">Номер телефону</StyledTableCell>
						<StyledTableCell align="center">Статус</StyledTableCell>
						<StyledTableCell align="center">Дії</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{orders.map((order) => (
						<StyledTableRow key={order.id}>
							<StyledTableCell align="center" component="th" scope="row">
								{order.id}
							</StyledTableCell>
							<StyledTableCell align="center">
								{order.car ? order.car.name : 'Невідомо'}
							</StyledTableCell>
							<StyledTableCell align="center">
								{new Date(order.booking_date).toLocaleDateString('uk-UA')}
							</StyledTableCell>
							<StyledTableCell align="center">
								{order.destination}
							</StyledTableCell>
							<StyledTableCell align="center">
								{order.lease_term} днів
							</StyledTableCell>
							<StyledTableCell align="center">
								{order.user ? order.user.name : 'Невідомо'}
							</StyledTableCell>
							<StyledTableCell align="center">
								{order.phone_number}
							</StyledTableCell>
							<StyledTableCell align="center">
								{orderStatus[order.order_status] ||
									order.order_status ||
									'Невідомо'}
							</StyledTableCell>
							<StyledTableCell align="center">
								<FormControl>
									<select
										id={`status-select-${order.id}`}
										defaultValue={order.order_status}
										onChange={(e) => handleStatusChange(order, e)}
									>
										<option disabled>Змінити статус</option>
										{Object.entries(orderStatus).map(
											([statusId, statusLabel]) => (
												<option key={statusId} value={statusId}>
													{statusLabel}
												</option>
											)
										)}
									</select>
								</FormControl>
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
