import React from 'react';
import Logo from './Purrfect-Pet-Logo.PNG';

const styles = {
    headerStyle: {
        background: '#FFAFCC',
        display: "flex",
        justifyContent: "space-between",
    },
    heading: {
        textAlign: 'center',
        paddingBottom: '500px',
    }
}
export default function Banner() {
    return (
        <div>
        <header styles={styles.body}>
            <img src={Logo} alt="PurrfectPet Logo" width="250" height="200"/>
           <h1 className="text-center" styles={styles.heading}>Your Ticket to the Purrfect Pet!</h1>
        </header>
        </div>
    )
};