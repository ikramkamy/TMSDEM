import React, { useState,useEffect } from 'react';
import  './carton.css';
import { FaArrowCircleLeft, FaMinus, FaPlus, FaTrash} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Carton=(props)=>{
const{showVolum}=props;
const {handelCubage}=props;
const [i,setI]=useState("0");
const [room,setRoom]=useState([]);

const [input,setInput]=useState({
  name:"",
  tab:[],
  id:""
})
const handelroom=(event)=>{
const n=event.target.value;
 setInput({
name:n,
 })
}
  console.log("input",input)

const addtoroom=()=>{
setRoom([...room,input]);
}
console.log("Room",room);
const [input2,setInput2]=useState({
  name:"",
  volume:0,
  quantite:0
});
/************************************** */
const handelelem=(event)=>{
  const n=event.target.value;
  setInput2({
 name:n,
  })
}
console.log("input",input2)
//const [roomelem,setRoomelem]=useState([])
const [tableau,setTableau]=useState([]);
const addelem=(e)=>{
  e.id=e.name;
  //e.tab=[{name:e.name}]
  //console.log("sible",e)
  //tableau.push(input2);
  //e.tab=tableau;
}
//console.log("element de cubage",roomelem)
console.log("element de cubage in romm",input)
console.log("element de cubage in romm",room);

/*
const [vari,setVari]=useState();
const handelroom=()=>{
const selectval=document.querySelector('#select')
}
*/
return(<div className="carton">
<div className="calcul-carton">
<div className="text-carton">
  <div>
<h1>L'inventaire de votre déménagement</h1>
<p>Listez vos meubles pièce par pièce.</p>

<h4>Attention, ne pas oublier de compter le cabanon de jardin, la cave, le garage, le grenier et les cartons d'objets posés sur les meubles ou par terre !</h4>
</div>
{/*<div className="img-carton">
<img src="/images/carton.png" className="img-carton-size"/>
</div>*/}

</div>
<div className=" btn-add-room"  onClick={addtoroom}>Ajouter une piéce</div>
<div className="add-box">
<select className="select-la-piece" name="name" id="select" value={input.name} key={i} onChange={handelroom}>
                <option value="selectionner">selectionner</option>
                <option value="chambre ">Chambre</option>
                <option value="Jardin" >Jardin</option>
                <option value="salon" >salon</option>
                <option value="cuisine">cuisine</option>
</select>

</div>
la listes des piéces
{room?.map((e)=>
<div className="wrap-room">
  {e.name}

  <select className="select-la-piece" name="elm" value={e.tab} onChange={handelelem} >
                <option value="selectionner">selectionner</option>
                <option value="table">table</option>
                <option value="chaise" >chaise</option>
                <option value="lit" >lit</option>
                <option value="carton">carton</option>
</select>
  <div className="wrap-elems-room">
  <button  onClick={()=>addelem(e)}>ajouter element</button>
    {e.tab?.map((p)=><div >
      {p.name}
      <button  onClick={addelem}>ajouter element</button>
    </div>)}


</div>

</div>)}

</div>

<div className="Total-carton">
<h1>Votre volume total</h1>
<div className="resultat-volume">
<div>Carton</div>
<div>00.00 m3</div>
</div>
<h3>Nombre de carton(s) : 0</h3>
<h3>00.00m3</h3>
<div className="btn-carton">Continue</div>
<div className="btn-carton" >Retour</div>
</div>

    </div>)
}
export default Carton;