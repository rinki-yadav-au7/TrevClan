import React from 'react';
import{TableContainer, Table,TableBody,
    TableRow, TableHead,
    Paper, TableCell,Avatar
} from '@material-ui/core'
import { withStyles} from '@material-ui/core/styles';
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const BidderCard = ({ item, loading }) => {
    console.log(item)
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <TableContainer component={Paper}>
    <Table  aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Customer name</StyledTableCell>
          <StyledTableCell align="right"> Email</StyledTableCell>
          <StyledTableCell align="right">Phone</StyledTableCell>
          <StyledTableCell align="right"> Premium</StyledTableCell>
          <StyledTableCell align="right">Max/Min bid </StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {item.map((row) => (
          <StyledTableRow key={row.id}>
            <StyledTableCell style={{display:'flex'}} component="th" scope="row">
              <Avatar
              style={{marginRight:'8px'}}
               alt="avtar" src={row.avatarUrl} />
              {`${row.firstname}${row.lastname}`}
            </StyledTableCell>
            <StyledTableCell align="right">{row.email}</StyledTableCell>
            <StyledTableCell align="right">{row.phone}</StyledTableCell>
            <StyledTableCell align="right">{row.hasPremium ? 'YES': 'NO'}</StyledTableCell>
            <StyledTableCell align="right">{row.fat}
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default BidderCard;