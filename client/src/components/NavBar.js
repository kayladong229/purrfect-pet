import React from 'react';
import Signup from './Signup'
import Login from './Login'
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <a href="Petfinder.com">Favorite Pet</a>
            <a href="Petfinder.com">Login</a>
        </div>
    )
};
