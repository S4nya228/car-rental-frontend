import React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { red } from '@mui/material/colors'
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

export default function CarsTable({
	cars,
	handleDeleteCar,
	handleEditCar,
	carImage,
}) {
	return (
		<TableContainer className="cars-table" component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<StyledTableCell className="cars-table__col">Клас</StyledTableCell>
						<StyledTableCell className="cars-table__col">Бренд</StyledTableCell>
						<StyledTableCell className="cars-table__col">Колір</StyledTableCell>
						<StyledTableCell className="cars-table__col">
							Тип двигуна
						</StyledTableCell>
						<StyledTableCell className="cars-table__col">
							Потужність
						</StyledTableCell>
						<StyledTableCell className="cars-table__col">
							Привід
						</StyledTableCell>
						<StyledTableCell className="cars-table__col">
							0-100 км/год
						</StyledTableCell>
						<StyledTableCell className="cars-table__col">Ціна</StyledTableCell>
						<StyledTableCell className="cars-table__col">Фото</StyledTableCell>
						<StyledTableCell className="cars-table__col">Дії</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{cars && Array.isArray(cars) && cars.length > 0 ? (
						cars.map((car, index) => (
							<StyledTableRow key={car.id || index}>
								<StyledTableCell
									className="cars-table__row"
									component="th"
									scope="row"
								>
									{car.car_class}
								</StyledTableCell>
								<StyledTableCell className="cars-table__row">
									{car.brand}
								</StyledTableCell>
								<StyledTableCell className="cars-table__row">
									{car.color}
								</StyledTableCell>
								<StyledTableCell className="cars-table__row">
									{car.engine_type}
								</StyledTableCell>
								<StyledTableCell className="cars-table__row">
									{car.engine_power}
								</StyledTableCell>
								<StyledTableCell className="cars-table__row">
									{car.wheel_drive}
								</StyledTableCell>
								<StyledTableCell className="cars-table__row">
									{car.zero_to_full}
								</StyledTableCell>
								<StyledTableCell className="cars-table__row">
									{car.price}
								</StyledTableCell>
								<StyledTableCell>
									{carImage(car) ? (
										<img
											src={carImage(car)}
											alt={`Car ${index}`}
											style={{ width: 100, marginRight: 10 }}
										/>
									) : (
										'Фото відсутнє'
									)}
								</StyledTableCell>
								<StyledTableCell className="cars-table__row">
									<IconButton onClick={() => handleEditCar(car)}>
										<EditIcon color="primary" />
									</IconButton>
									<IconButton onClick={() => handleDeleteCar(car.id)}>
										<DeleteIcon sx={{ color: red[500] }} />
									</IconButton>
								</StyledTableCell>
							</StyledTableRow>
						))
					) : (
						<StyledTableRow>
							<StyledTableCell colSpan={10} align="center">
								Дані відсутні
							</StyledTableCell>
						</StyledTableRow>
					)}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
