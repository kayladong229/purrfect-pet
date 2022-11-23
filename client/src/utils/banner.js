import React from 'react';
import Logo from './Purrfect-Pet-Logo.PNG';
export default function Banner() {
    return (
        <div>
            <img src={Logo} alt="PurrfectPet Logo" width="500" height="600"/>
           <h1>Your ticket to the purrfect Pet</h1>
        </div>
    )
};