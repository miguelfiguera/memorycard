import React, { useState, useEffect } from "react";

function Card({data}){


  return (
    <div className="card" style={{width: '18rem'}} >
      <img src={data.img} className="card-img-top" alt="Imagen of Star Trek Character" />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <button className="btn btn-primary">
          Choose me!
        </button>
      </div>
    </div>
  );
}

export { Card };
