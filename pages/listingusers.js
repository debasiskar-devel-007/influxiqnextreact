
const axios = require('axios')
import { useEffect, useState, } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import Link from 'next/link';
import Router from 'next/router';


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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const App = () => {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getProductData = async () => {
    try {
      // const data = await axios.post(
      //   "https://wfr9bu9th2.execute-api.us-east-1.amazonaws.com/dev/api3/getnextuserslist", data
      // );
      // console.log(data.data);

      var data = {
        "db": "data_pece",
        "condition": {
          "limit": 10,
          "skip": 0
        },
        "sort": {
          "type": "desc",
          "field": "_id"
        }
      }
      const dataset = axios.post('https://wfr9bu9th2.execute-api.us-east-1.amazonaws.com/dev/api3/getnextuserslist', data)
        .then((response) => {
          console.log("success444", response);
          // listingDataSource = response.data.results.res;
          setProduct(response.data.results.res);
        })
        .catch(err => console.log("error", err))

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Users List</h1>
      <Link href='/'><h3 style={{ textAlign: 'left', marginLeft: 10, cursor: 'pointer' }}>Go Home</h3></Link>
      <Link href='/adduser'><h3 style={{ textAlign: 'right', marginRight: 10, cursor: 'pointer' }}>Add User</h3></Link>

      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <br /><br />  <br /><br />
      <TableContainer component={Paper}>
        <Table className="tablecls" aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">E-mail</StyledTableCell>
              <StyledTableCell align="center">Phone No.</StyledTableCell>
              <StyledTableCell align="center">Gender</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product
              .filter((item) => {
                if (search == "") {
                  return item;
                } else if (
                  item.first_name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <>
                    <StyledTableRow key={item._id}>
                      <StyledTableCell component="th" scope="row" align="center">
                        {item.first_name + ' ' + item.lastName}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item.email}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item.phone}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item.gender}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Button variant="contained" color="primary" type="submit" onClick={() => Router.push('/edituserdata')} >Edit </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                    {/* <div>
                      <Button variant="contained" color="primary" type="submit">
                        Edit
                      </Button>
                    </div> */}
                  </>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default App;