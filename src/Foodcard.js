import React from 'react';
import"./Foodcard.css";
const Foodcard=(props)=>
    {
    return (
        <div>
        <img src={props.img}alt=""/>
    <h1>{props.productName}</h1>
    </div>
    );
};
export default Foodcard;