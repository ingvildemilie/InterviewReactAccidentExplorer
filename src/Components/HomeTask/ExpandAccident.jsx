import React, { useState } from "react";


export const ExpandAccident = ({accident, setLocation}) => {
    const location = {x:accident.x, y:accident.y}

    return (
        <div className="expanded-box">
            <div>
                <h5> Antall enheter: {accident.Antall_enheter} </h5> 
                <h5> Fartsgrense: {accident.Fartsgrense} </h5> 
                <h5> Føreforhold: {accident.Føreforhold} </h5> 
                <h5> Lysforhold: {accident.Lysforhold} </h5> 
                <h5> Ulykkeskode: {accident.Ulykkeskode} </h5> 
                <h5> Værforhold: {accident.Værforhold} </h5> 
                <button 
                    className="zoom-button" 
                    onClick={() => setLocation(location)}> Zoom
                </button>
            </div>
        </div>
    )
}