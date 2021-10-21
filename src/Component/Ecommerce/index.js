import React, { useState } from 'react';
import  './e-commerce.css';
import { FaArrowCircleLeft, FaTrash} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Item from './ItemWrap';
const Ecommerce=(props)=>{
  const[produit,setProduit]=useState([
{name:"carton livre",
prix:"20 £",
dimmension:"35 x 27,5 x 30 cm",
quantite:0,
description:"3 à 4 cartons par mètre linéaire de livres"
}


  ])
return(<div className="wrap-ecommerce">

{produit.map((e)=><Item name={e.name} prix={e.prix} dimmension={e.dimmension} quantite={e.quantite} description={e.description}/>)}
    </div>)
}
export default Ecommerce;