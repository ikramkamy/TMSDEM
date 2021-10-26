import React, { useState,useEffect } from 'react';
import  './carton.css';
import { FaArrowCircleLeft, FaMinus, FaPlus, FaTrash} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Carton=(props)=>{
  const{showVolum}=props;
  const {handelCubage}=props;
    const [input,setInput]=useState({
        element:"",
        prix:"",
        id:"",
        tab:[]
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
const [elem,setElem]=useState({
  name:"",
  cubage:"",
  index:""
});
const [tab2,setTab2]=useState([]);
const handelcklick2=(event)=>{
  const {name,value}=event.target;
  
setElem(prevInput=>{
      return  { 
        ...prevInput,
        [name]:value
      }
    })

}
const handeladd=()=>{
    setTab([...tab,input])
}

const handeladd2=(e)=>{
  //setTab2([...tab2,elem])
  //console.log("ici tab 2",tab2)
tab[0].tab=[...tab[0].tab,elem];
  console.log("input tab",tab[0].tab)
}
console.log("tableau de la piéce",tab)
const DeleteVolumeItem=(e)=>{
var index = tab.indexOf(e.target.value)
tab.splice(index, 1)
console.log("we are deleting item from tablea")
}
const [itemcubage,setItemCubage]=useState([
{
  name:"tabel",
  cubage:"1",
  id:1,
},{
  name:"lit",
  cubage:"0.75",
  id:1,
},
{
  name:"tabel",
  cubage:"1",
  id:1,
}
])
const [net,setNet]=useState(0);

useEffect(()=>{
  handelCubage(net);
  console.log(net)
})
/************************************************CALCUL DE VOLUME*********************************************** */
useEffect(()=>{
  let t=0;
  tab?.map((e)=>
  t=t+Number(e.tab.map((ele)=>t=t+Number(ele.name.split(" ")[0]))))
  console.log("le volume",t);
  setNet(t)
 
})

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
<div className=" margin-top" onClick={handeladd}>Ajouter</div>
<div className="add-box">
<select className="select-la-piece" onChange={handelClick} name="element" value={input.element}>
                <option value="selectionner">selectionner</option>
                <option value="chambre">Chambre</option>
                <option value="Jardin">Jardin</option>

                </select>


{tab?.map((option) => (
              <div className="element-volum" >
                <div className="la-piéce-head">
                <FaTrash className="icon-colum-item" onClick={DeleteVolumeItem}/>
                <p>{option.element}</p>
               
                </div>
               <div></div> 
               <FaPlus className="icon-colum-item" onClick={handeladd2}/>
                <select className="select-inter-piéce" name="name" value={elem.name} onChange={handelcklick2} style={{marginLeft:"50px"}}>
                <option value="selectioner" >selectioner</option>
                <option value="0.75 table" label="table">Table</option>
                <option value="1 lit" label="lit">Lit</option>
               </select>
               <FaMinus className="icon-colum-item" onClick={handeladd2}/>
{input.tab?.map((e)=><div style={{color:"red"}}>{e.name}    </div>)}

                </div>
            ))}
</div>


</div>

<div className="Total-carton">
<h1>Votre volume total</h1>
<div className="resultat-volume">
<p>Carton</p>
<div>{net} m3</div>
</div>
<h3>Nombre de carton(s) : 0</h3>
<h4>{net}m3</h4>
<div className="btn-carton">Continue</div>
<div className="btn-carton" onClick={showVolum}>Retour</div>
</div>

    </div>)
}
export default Carton;