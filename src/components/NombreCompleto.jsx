import React from 'react';
import '../App.css'
import {Edad} from "./Edad";


export const NombreCompleto = (props) => {
    console.log("props ", props);
    return (
        <React.Fragment> {/* React.Fragment */}
            <h3 className="Juan">
                Me llamo {props.name}
            </h3 >
            <Edad edad={props.age} show={props.show}/>
        </React.Fragment>
        /*Tambien se puede quitar el React.Fragment*/
    );

}

  //export{NombreCompleto, otraExportacion}
