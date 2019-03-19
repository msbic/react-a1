import React from 'react';
import Table from '@material-ui/core/Table';
import styles from './ItemTable.module.css';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      
    },
  }))(TableCell);

const ItemTable = (props) =>
{
    const { list } = props;
    list.forEach(element => {
    
        console.log(element);
        //console.log(element.quantity);
    })

    return(
        
        <div>
            <Paper className={styles.root}>
            <Table className={styles.table}>
                <TableHead>
                <TableRow >
                    <CustomTableCell align="left">Dessert (100g serving)</CustomTableCell>
                    <CustomTableCell align="left">Calories</CustomTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                { 
                    list.map(item => (
                        <TableRow key={item.id}>
                          <TableCell component="th" scope="row">
                            {item.name}
                          </TableCell>
                          <TableCell align="left">{item.calories}</TableCell>
                        </TableRow>
                      ))                         
                }
        </TableBody>
      </Table>
    </Paper>

        </div>
    );
}
export default withStyles(styles)(ItemTable);