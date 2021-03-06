import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
// import { Link, Navigate  } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'
import { useNavigate } from "react-router-dom";




export  function User() {
    let navigate = useNavigate();
    // const history = useHistory();
    const [userlist,setuserlist] =  useState([])
    useEffect(()=>{
        fetchuserList()
    },[])
    const fetchuserList = async()=>{
        let res = await fetch(`http://localhost:3008/users`);
        let data =  await res.json();
        setuserlist(data)
    }
    const userRedirect = (id)=>{
        console.log("hello",id);
        navigate(`/userdetails/${id}`, { replace: false });
        // history.push(`/userdetails/:${id}`)
            // < Navigate to = {`/userdetails/:${id}`} replace = { true} />
        // <Navigate  to = {`/userdetails/:${id}`}></Navigate>
    } 
    const NavigateNewUser = ()=>{
        navigate(`/addnewuser`, { replace: false });
    }
    console.log(userlist)
    return (
        <div>
            <div>
                <Button onClick={NavigateNewUser}variant="contained" color="success">
                   Add User
                </Button>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Mobile</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>


                        {
                            userlist.map((e) => {
                                return <TableRow key={e._id} onClick={() => {
                                    userRedirect(e._id)
                                }}

                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >


                                    <TableCell align="center">{e._id}</TableCell>
                                    <TableCell align="center">{e.name}</TableCell>
                                    <TableCell align="center">{e.email}</TableCell>
                                    <TableCell align="center">{e.mobile}</TableCell>

                                </TableRow>

                            })
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
