import React from 'react';
import '../App.css'
import PropTypes from 'prop-types';

const myStyle = {
    ocultar: { display: "none" },
    mostrar: {
        display: "block",
        backgroundColor: "beige"
    }
}
export const Edad = ({ edad, show = true }) => {
    return (
        <React.Fragment>
            <p className="App" style={show ? myStyle.mostrar : myStyle.ocultar}>
                Su edad es: {edad}</p>

        </React.Fragment>
    );

}

Edad.ropTypes = {
    edad: PropTypes.number.isRequired
}
