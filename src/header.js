import React, { useState, useEffect } from "react";
import { Card } from "./card";


function Header(){


    return(
        <div className="container">
        <div className="page-header">
            <h1>Memory Game</h1>
        </div>

        <div className="container-sm">
            <p>Current Score: {}</p>
            <p>Best Score: {}</p>
        </div>
        </div>


    )
}




export {Header}