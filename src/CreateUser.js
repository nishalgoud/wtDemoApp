import React, { useState } from 'react';

import axios from 'axios';

import {Button, Card, Form } from 'react-bootstrap';

import { useNavigate } from "react-router-dom";


export function CreateUser() {

    const [userName, setUserName] = useState('');
    
    const [fullName, setFullName] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:4000/api/createUser', {
                userName, fullName
            }, {
              headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
              }
            })
            alert(`user ${userName} has been created`);
            navigate('/usersList');
        }catch(err){
           console.log(err.message);
        }

    }

  return (
    <Card style={{width:'50%', marginLeft:'20%', marginTop:'5%'}}>
    <Card.Header>Create User</Card.Header>
    <Card.Body>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={userName} onChange={(e)=>setUserName(e.target.value)}/>

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>full name </Form.Label>
        <Form.Control type="text" placeholder="enter full name" value={fullName} onChange={(e)=>setFullName(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create User
      </Button>
    </Form>
    </Card.Body>
  </Card>
  )
}

