import React, {useEffect, useState } from 'react'
import axios from 'axios';

import { Table, Button } from 'react-bootstrap';

import { useNavigate } from "react-router-dom";

export function UsersList() {

    const [usersList, setUsersList]= useState([]);
    const navigate = useNavigate();

    const getUsersList = async () =>{

        const { data } = await axios.get('http://localhost:4000/api/usersList', {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        });
        setUsersList(data);
        console.log(data, 'usersList');

    }

    const handleDelete = async (userId)=>{

      const res = window.confirm('are you sure you want to delete?');
      if(res){
        const { data } = await axios.delete(`http://localhost:4000/api/deleteUser/${userId}`,  {
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        });

        alert('user has been deleted');
        navigate(0);
      }


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
        <th>Edit Section</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
            usersList.length>0 && usersList.map((item,index)=>{
                        return (<tr>
                            <td>{item.userId}</td>
                            <td>{item.userName}</td>
                            <td>{item.fullName}</td>  
                            <td><Button variant="secondary" onClick={()=>navigate(`/usersList/${item.userId}`)}>Edit User</Button>{' '}</td>                       
                            <td><Button variant="secondary" onClick={() =>handleDelete(item.userId)}>Delete User</Button>{' '}</td>                       
                        </tr>)
            })
        }
      
     
    </tbody>
  </Table>
  )
}

