import React, { useState } from 'react';
import './style-form-final.css';
import { Button } from 'bootstrap';
import { FaAddressCard, FaArrowCircleLeft, FaCalendar, FaCheck} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Carton from '../Carton';
import  {MDBInput}  from 'mdbreact';

const Formulefinale=()=>{

    /********************************************************************MY CONSTANTS****************************************************************** */
const [lieux,setLieux]=useState([{label:"Ville",value:"Ville"}, {label:"Bordeaux",value:"Bordeaux"},
    {label:"Paris",value:"Paris"}]);
const [etage,setEtage]=useState([{label:"RDC",value:"RDC"},{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},
{label:"5",value:"5"},{label:"6",value:"6"},{label:"Plus",value:"Plus"},

])
const [assenseur,setAssenseur]=useState([{label:"1-2 personnes",value:"1-2 personnes"},{label:"2-3 personnes",value:"2-3 personnes"},
{label:"3-4 personnes",value:"3-4 personnes"},{label:"4-5 personnes",value:"4-5 personnes"},
{label:"5-6 personnes",value:"5-6 personnes"},{label:"6-7 personnes",value:"6-7 personnes"},{label:"7-8 personnes",value:"7-8 personnes"},
{label:"Tout autre",value:"Tout autre"}])

const[distance,Distance]=useState([{label:"0-10 m",value:"0-10 m"},
{label:"10-20 m",value:"10-20 m"},{label:"20-30 m",value:"20-30 m"},{label:"30-40 m",value:"30-40 m"},
{label:"40-50 m",value:"40-50 m"},{label:"50-60 m",value:"50-60 m"},{label:"60-70 m",value:"60-70 m"},
{label:"90-100 m",value:"90-100 m"},
{label:"plus de 101 m",value:"plus de 101 m"}])
const[input,setInput]=useState([]);

/****************************************************************************************************************************************** */
const handelChange=()=>{
     
}
const[circlestyle,setCirclestyle]=useState("in-circle")

const handelClickCkeck=()=>{

    setCirclestyle("in-circle")   
}
return(

    <div className="principal-formulaire">
        <div className="text-calcul">
<h1>Votre projet de déménagement</h1>
Choisissez maintenant vos options. Votre devis se recalcule automatiquement.
</div>


<div className="wrap-formulaire">

<div className="calcul-bloc">


<div className="calcul-bloc-item">
<h1 className="text-conatiner">Date</h1>
<div className="date-wrap" >

<input type="date" className="date-input-style"/>
</div>
</div>
 

<div className="calcul-bloc-item">
    <div className="inter-calcul-item">
    <h1>Départ</h1>
<input type="text"  className="address-input"/>
   <select className="select-ville">
   {lieux.map((option) => (
              <option  value={option.value}>{option.label}</option>
            ))}
   </select>
    </div>
    <div className="inter-calcul-item">
<label className=" Myborder-top">
<p className="title">ETAGE </p>
<select >
   {etage.map((option) => (
              <option  value={option.value}>{option.label}</option>
            ))}
   </select>
</label>
<label className=" Myborder-top">
<p className="title">ASCENSEUR</p>
<select >
   {assenseur.map((option) => (
              <option  value={option.value}>{option.label}</option>
            ))}
   </select>
</label>
<label className=" Myborder-top">
<p className="title">DISTANCE DE PORTAGE</p>
<select >
   {distance.map((option) => (
              <option  value={option.value}>{option.label}</option>
            ))}
   </select>
   <p className="title"><Link>Plus d'information</Link></p>
</label>
<label className=" Myborder-top">
<p className="title">MONTE-MEUBLES</p>
<select className="input-style "  type="number"  placeholder="Ascenseur"  name="mnt" value={input.mnt} onChange={handelChange} >
<option label=""></option>

<option label="Non">Non</option>
<option label=" oui (7h)" value="450">Oui pour 7h</option>
<option label=" oui (1/2j)"  value="250"   >Oui pour une demie journée</option>
</select>
<p className="title"><Link>Plus d'information</Link></p>
</label>




</div>
<div className="inter-calcul-item">Avez-vous besoin d'une autorisation de stationnement ?</div>
<div className="inter-calcul-item"><p className="title"><Link>Plus d'information</Link></p></div>
</div>






<div className="calcul-bloc-item">

<div className="inter-calcul-item">Votre volume</div>

Une bonne estimation du volume est un élément clé pour éviter les mauvaises surprises le jour J.
Nos conseillers sont à votre disposition.
<div className="inter-calcul-item ">
    <div className="volum-input"><FaCheck/> Volume renseigné manuellement
<input type="number"/>
</div> 
</div>
<div className="inter-calcul-item">Le volume est un élément très important.
Utilisez notre calculateur ou contactez-nous !
<div className="btn-formule">calculateur de volume</div>
</div>

</div>






</div>
<div className="calcul-montant">
   Total:
</div>

</div>
<p className="width90">Possédez-vous des objets lourds ?</p>
<div className="wrap-formulaire">
<div className="calcul-bloc">
<div className="calcul-bloc-item">
<div className="inter-calcul-item  check-yes-no">
    
<MDBInput label="oui" type="checkbox" id="checkbox1" />
<MDBInput label="Non" type="checkbox" id="checkbox2" />  
 
    </div>    

</div>

</div>
<div className="calcul-montant">2</div>
</div>
<p className="width90">Avez-vous besoin d'aide pour le démontage
et le remontage de votre mobilier ?</p>
<div className="wrap-formulaire">
<div className="calcul-bloc">
<div className="calcul-bloc-item">
<div className="inter-calcul-item ">
    

<MDBInput label="Aucune aide" type="checkbox"  />  
<MDBInput label="Démontage & remontage" type="checkbox"  />  
<MDBInput label="Démontage seul" type="checkbox"  /> 
<MDBInput label="Remontage seul" type="checkbox"/> 
    </div>   
    </div> 

    
</div>
<div className="calcul-montant">2</div> 
</div>




<p className="width90">Avez-vous besoin de fournitures pour votre déménagement ?</p>
<div className="wrap-formulaire">
<div className="calcul-bloc">
<div className="calcul-bloc-item">
<div className="inter-calcul-item check-yes-no">
    
<MDBInput label="oui" type="checkbox" id="checkbox1" />
<MDBInput label="Non" type="checkbox" id="checkbox2" /> 
</div>
    </div>   
    </div> 

    <div className="calcul-montant">Total</div>   
</div>

<p className="width90">Options libres</p>
<div className="width90-2-center">
<p className="width90-2">
Quelques exemples :
<ul>
<li>1-garde-meubles/stockage,</li>
<li>2-livrer ou récupérer du mobilier à une autre adresse,</li>
<li>3-transporter un objet spécifique (très lourd, très fragile, ou de grande valeur),</li>
</ul>
<br/>
Nous reviendrons vers vous avec un tarif dans un délai de 24h00 ouvrées. Pensez à nous laisser vos coordonnées (en créant votre compte) afin que nous puissions vous contacter si nous avons des questions.
</p>
</div>



<p className="width90">Commentaires</p>
<div className="width90-2-center">
<p className="width90-2">Faites-nous part de tout ce qui est important pour vous. Ces informations seront ajoutées sur le Devis entre vous et le déménageur sélectionné.
</p>


</div>
<div className="wrap-formulaire">
<div className="calcul-bloc">
<div className="center-comments">Commentaires  </div>
<div className="calcul-bloc-item">
 
<div className="inter-calcul-item">

<input type="text"  className="input-commantaires" />


</div>
</div>
</div>

<div className="calcul-montant">Total</div>
</div>

<Carton/>
    </div>)
}
export default Formulefinale;