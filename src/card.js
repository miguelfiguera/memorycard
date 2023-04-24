import React, { useState, useEffect } from "react";

function Card(props){


  return (
    <div className="card me-3 ms-3 mt-3 mb-3" style={{width: '18rem'}} >
      <img src={props.data.img} className="card-img-top" alt="Imagen of Star Trek Character" />
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <button className="btn btn-primary" onClick={()=>props.handleClick(props.data.id)}>
          Choose me!
        </button>
      </div>
    </div>
  );
}

export { Card };
