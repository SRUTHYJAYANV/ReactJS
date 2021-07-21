import React, { useState, useEffect } from 'react';
import { ReactElement } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
		border: '1px solid'
	},
	thead: {
		backgroundColor: '#c6c6c6',
		textTransform: 'uppercase',
		verticalAlign: 'center',
		textAlign: 'center',
		fontWeight: 400
	},
	t_cell: {
		border: '1px solid #ccc'
	},
	th_cell: {
		border: '1px solid #afafaf'
	}

});

function ListComponent(): ReactElement {
	const [userDetails, setUserDetails] = useState<any>([])
	const classes = useStyles();

	useEffect(() => {
		getAllUserDetails();
	}, []);

	function getAllUserDetails() {
		axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
			setUserDetails(response);
		})
	}

	return (

		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead className={classes.thead}>
					<TableRow>
						<TableCell className={classes.th_cell}>User Id</TableCell>
						<TableCell className={classes.th_cell}>Id</TableCell>
						<TableCell className={classes.th_cell}>title</TableCell>
						<TableCell className={classes.th_cell}>body</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{userDetails && userDetails.data?.map((row: any) => (
						<TableRow key={row.id}>
							<TableCell className={classes.t_cell} component="th" scope="row">
								{row.userId}
							</TableCell>
							<TableCell className={classes.t_cell} >{row.id}</TableCell>
							<TableCell className={classes.t_cell} >{row.title}</TableCell>
							<TableCell className={classes.t_cell} >{row.body}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);

}
export default ListComponent;