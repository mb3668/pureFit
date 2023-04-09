import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { signIn } from '../../firebase';
import { Navigate } from 'react-router-dom';
import './login.css';

function LoginScreen() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Handle 
    function handleUserChange(event) {
        setUserEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setUserPassword(event.target.value);
    }

    async function handleUserSubmit(event) {
        event.preventDefault();
        console.log(`Username: ${userEmail} Password: ${userPassword}`);

        try {
            const user = await signIn(userEmail, userPassword);
            setIsLoggedIn(true);
            setErrorMessage('');
            console.log(user);

        } catch (error) {
            // console.log(error.message);
            setErrorMessage(error.message);
        }
    }

    return (
        <div className="container">
            <div className="top"><h1>PureFitness</h1></div>
            <div className="middle">
                <div className="login">
                    {/* Login form */}
                    <Form onSubmit={handleUserSubmit}>

                        {/* Username input field */}
                        <Form.Group controlId="formUsername">
                            <Form.Label>Email</Form.Label>
                            <br/>
                            <Form.Control className="userField"
                                type="email"
                                placeholder="Email"
                                value={userEmail}
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
                    {errorMessage && <div className="error"><p>Incorrect Login Information</p></div>}
                    {isLoggedIn && <Navigate to="/Home" replace={false} />}
                </div>
            </div>
            <div className="bottom">
                <div className="info">
                    <b>Input and store sets and rep numbers for each workout!</b>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;