import React, { useState } from 'react';
import  './carton.css';
import { FaArrowCircleLeft} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Carton=()=>{
    const [input,setInput]=useState({
        element:"hhh",
        prix:"",
    })
    const [tab,setTab]=useState([]);
const handelClick=(event)=>{
    const {name,value}=event.target;
    setInput(prevInput=>{
      return  { 
        ...prevInput,
        [name]:value
    
      }
    })
   

}
const handeladd=()=>{
    setTab([...tab,input])
}

return(<div className="carton">
<div className="calcul-carton">
<div className="text-carton">
<h1>L'inventaire de votre déménagement</h1>
<p>Listez vos meubles pièce par pièce.</p>

<h4>Attention, ne pas oublier de compter le cabanon de jardin, la cave, le garage, le grenier et les cartons d'objets posés sur les meubles ou par terre !</h4>

<div className="btn-formule margin-top" onClick={handeladd}>Ajouter</div>

<div className="add-box">
    
{tab?.map((option) => (
              <div >{option.element}11111</div>
            ))}

<input type="text" placeholder="item" onChange={handelClick} className="input-volum" name="element" value={input.element} />


</div>
</div>
<div className="img-carton">
<img src="/images/carton.png" className="img-carton-size"/>
</div>

</div>

<div className="Total-carton">
<h1>Votre volume total</h1>
<div className="resultat-volume">
<p>Carton</p>
<div>0.00 m3</div>
</div>
<h3>Nombre de carton(s) : 0</h3>
<h4>0.00m3</h4>
<div className="btn-carton">Continue</div>
<div className="btn-carton">Retour</div>
</div>

    </div>)
}
export default Carton;