import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

export const Nav = ({ setLogOut }) => {
    const handleSignout = () => {
        localStorage.clear('userInfo');
        setLogOut(true);
    }
    return (
        <div className="nav__logout">
            <Button onClick={handleSignout} variant="outline-danger">Sign Out</Button>
        </div>
    )
}
