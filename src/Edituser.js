import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function Edituser() {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState({
    userName: "",
    fullName: "",
  });

  const navigate = useNavigate();

  const getUserDetails = async () => {
    const { data } = await axios.get(
      `http://localhost:4000/api/usersList/${userId}`
    );
    setUserDetails({ userName: data[0].userName, fullName: data[0].fullName });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.put(`http://localhost:4000/api/updateUser`, {
        userId,
        userName: userDetails.userName,
        fullName: userDetails.fullName,
      });
      alert('user updated successfully')

      navigate("/usersList");

    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <Card style={{ width: "50%", marginLeft: "20%", marginTop: "5%" }}>
      <Card.Header>Edit User</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>userId</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={userId}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={userDetails.userName}
              onChange={(e) =>
                setUserDetails({ ...userDetails, userName: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>full name </Form.Label>
            <Form.Control
              type="text"
              placeholder="enter full name"
              value={userDetails.fullName}
              onChange={(e) =>
                setUserDetails({ ...userDetails, fullName: e.target.value })
              }
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Edit User
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
