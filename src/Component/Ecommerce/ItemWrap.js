import React, { useState } from 'react';
import  './e-commerce.css';
import { FaArrowCircleLeft, FaMinus, FaPlus, FaTrash} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Item=(props)=>{
  
return(<div className="wrap-Item">
<div><img src={props.url} className="image-carton" style={{height:"100px", width:"100px" }}/></div>
<div className="Item-Ecommerce">{props.name}</div>
<div className="Item-Ecommerce">{props.dimmension}</div>
<div className=" description-carton">{props.description}</div>
<div className="Item-Ecommerce quantite"><FaPlus  className="Item-Icons" style={{marginLeft:"15px"}}/><div className="wrap-quantite">{props.quantite}</div><FaMinus  className="Item-Icons" style={{marginRight:"15px"}}/></div>

    </div>)
}
export default Item;