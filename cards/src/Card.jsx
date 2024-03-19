import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Card = (props) => {
  return (
    <div className="card" style={{width: '18rem'}}>
      {props.image && <img src={props.image} className="card-img-top" alt="..."/>}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
