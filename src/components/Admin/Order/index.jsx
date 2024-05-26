import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import axiosInstance from '../../../api/axiosInstance'
import './index.scss'

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
					</TableRow>
				</TableHead>
				<TableBody>
					{orders.map((order) => (
						<StyledTableRow key={order.id}>
							<StyledTableCell align="center" component="th" scope="row">
								{order.id}
							</StyledTableCell>
							<StyledTableCell align="center">{order.car.name}</StyledTableCell>
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
								{order.user ? `${order.user.name}` : 'Невідомо'}
							</StyledTableCell>
							<StyledTableCell align="center">
								{order.phone_number}
							</StyledTableCell>

							<StyledTableCell align="center">
								{order.order_status}
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
