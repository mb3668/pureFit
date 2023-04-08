import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './login.css';

function LoginScreen() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    function handleUserChange(event) {
        setUserName(event.target.value);
    }

    function handlePasswordChange(event) {
        setUserPassword(event.target.value);
    }

    function handleUserSubmit(event) {
        event.preventDefault();
        console.log(`Username: ${userName} Password: ${userPassword}`);
    }

    return (
        <div className="container">
            <div className="top"><h1>PureFitness</h1></div>
            <div className="middle">
                <div className="login">
                    {/* Login form */}
                    <Form onSubmit={handleUserSubmit}><br/>

                        {/* Username input field */}
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <br></br>
                            <Form.Control className="userField"
                                type="text"
                                placeholder="Username"
                                value={userName}
                                onChange={handleUserChange}
                            />
                        </Form.Group>

                        {/* Password input field */}
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <br></br>
                            <Form.Control className="userField"
                                type="password"
                                placeholder="Password"
                                value={userPassword}
                                onChange={handlePasswordChange}
                            />
                        </Form.Group>

                        {/* Button */}
                        <Button className="customButton" variant="light" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
            <div className="bottom">
                <div className="info">
                    <b>Input and store sets and rep numbers for each workout</b>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;