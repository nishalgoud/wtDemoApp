import React from 'react';

import {Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export function Home() {

    const navigate = useNavigate();
  return (
    <>
    <h1>test application</h1>
    <Button variant="secondary" onClick={()=>navigate('/usersList')}>usersList</Button>{' '}
    <Button variant="secondary" onClick={()=>navigate('/createUser')}>Create User</Button>{' '}
    </>
  )
}

