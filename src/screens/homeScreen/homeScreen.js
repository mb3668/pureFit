import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { user } from '../../firebase';
import './home.css';

function HomeScreen() {
    const [userExit, setUserExit] = useState(false);

    function handleUserExit(event) {
        setUserExit(true);
    }

    return (
        <div className="container">
            <div className="top">
                <div className="pageName">
                    <h1>PureFitness</h1>
                </div>
                <div className="logoutButton">
                    <Form onSubmit={handleUserExit}>
                        <Form.Group controlId="exitApp">
                            <Button className="exitButton" varient="light" type="submit">
                                Exit
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
                {userExit && <Navigate to="/" replace={true} />}
            </div>
            <div className="main">
                <div className="mainBar">
                    <h1>Current User : {user.email}</h1>
                </div>
                <div className="sideBar">
                    <h1>SideBar</h1>
                </div>
            </div>
            <div className="bottom">
                <div className="personalInfo">
                    <a href="https://github.com/mb3668" target="_blank" rel="noopener noreferrer"><b>github.com/mb3668</b></a>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen