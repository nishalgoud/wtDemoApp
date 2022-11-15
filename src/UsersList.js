import React, {useEffect, useState } from 'react'
import axios from 'axios';

import { Table } from 'react-bootstrap';

export function UsersList() {

    const [usersList, setUsersList]= useState([]);

    const getUsersList = async () =>{

        const { data } = await axios.get('http://localhost:4000/usersList');
        setUsersList(data);
        console.log(data, 'usersList');

    }

    useEffect(()=>{

        getUsersList()
    },[])

    console.log(usersList, 'usersList test')
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Username</th>
        <th>Full Name</th>
      </tr>
    </thead>
    <tbody>
        {
            usersList.length>0 && usersList.map((item,index)=>{
                        return (<tr>
                            <td>{index+1}</td>
                            <td>{item.strSISLoginID}</td>
                            <td>{item.strFullName}</td>                         
                        </tr>)
            })
        }
      
     
    </tbody>
  </Table>
  )
}

