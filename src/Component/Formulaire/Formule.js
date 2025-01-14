import React, { useEffect, useState } from 'react';
import './style-form-final.css';
import { Button } from 'bootstrap';
import { FaAddressCard, FaArrowCircleLeft, FaCalendar, FaCheck} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Carton from '../Carton';
import  {MDBInput}  from 'mdbreact';
import Ecommerce from '../Ecommerce';
//simport ReactTooltip from 'react-tooltip';

const Formulefinale=()=>{
const[showecommerce,setShowecommerce]=useState(false);
const[box1,setBox1]=useState(false);
const[box2,setBox2]=useState(true);

/***************************************CALCUL DE VOLUM********************************* */
const [volum,setVolum]=useState(false);
const showVolum=()=>{
    setVolum(!volum)

}
const[volmanu,setVolmanu]=useState(true);
const[volcalc,setVolcalc]=useState(false);
const [vol1,setVol1]=useState();
const [vol2,setVol2]=useState();

useEffect(()=>{
    if(volmanu==true){
        setVol2(0)
    }else{setVol2()}
})
useEffect(()=>{
    if(volcalc==true){
        setVol1(0)   
    }else{
        setVol1();   
    }
})
const handelVolmanu=()=>{
    setVolmanu(true);
    setVolum(false);
    setVolcalc(false);
}
const handeVolValue=(event)=>{
    setVol1(event.target.value); 
    console.log("LA VALEUR DU VOLUM",vol1);
}

const handeVolcalc=()=>{
    setVolcalc(true);
    setVolmanu(false);
}
/******************************************Autorisation de stationnement******************************************* */
const [autoO,setAutoO]=useState(false);
const [autoO2,setAutoO2]=useState(false);
const handelauto=()=>{
    setAutoO(!autoO)   
}
const handelauto2=()=>{
    setAutoO2(!autoO2)   
}
/*****************************************REMONTAGE DEMONTAGE************************************************* */
const [rmntgN,setRmntgN]=useState(false);
const [rmtgdmtg,setRmtgdmtg]=useState(false);
const [dementaged,setDementaged]=useState(false);
const [remontager,setRemontager]=useState(false)
const [tarifRMNTG,setTarifRMNTG]=useState(1);

const handelRMNT1=()=>{
    setRmntgN(true); 
    setRmtgdmtg(false);  
    setDementaged(false);
    setRemontager(false);
    setShowrmntg(false) ;
    setTarifRMNTG(1);
    setVarchange(varchange+1);
}
const handelRMNT2=()=>{
    setRmtgdmtg(true);
    setRmntgN(false);
    setDementaged(false);
    setRemontager(false);
    setShowrmntg(true) ;
    setTarifRMNTG(2);
    setVarchange(varchange+1);
}
const handelRMNT3=()=>{
    setDementaged(true);
    setRmtgdmtg(false); 
    setRmntgN(false); 
    setRemontager(false) ;
    setShowrmntg(true) ;
    setTarifRMNTG(1);
    setVarchange(varchange+1);
}
const handelRMNT4=()=>{
    setRemontager(true);
    setRmtgdmtg(false);  
    setDementaged(false); 
    setRmntgN(false);
    setShowrmntg(true) ;
    setTarifRMNTG(1);
    setVarchange(varchange+1);
}
const [showrmntg,setShowrmntg]=useState(false);
const [simple,setSimple]=useState(0);
const [moy,setMoy]=useState(0);
const [complique,setComplique]=useState(0)
const handesimple=(event)=>{
    setSimple(event.target.value);
    setVarchange(varchange+1);
}
const handelmoy=(event)=>{
    setMoy(event.target.value);
    setVarchange(varchange+1);
}
const handelComplique=(event)=>{
setComplique(event.target.value);
setVarchange(varchange+1);
}
/****************************************************************************************** */

const handelecommerce=()=>{
    setShowecommerce(!showecommerce)    
}
const handelCheck=()=>{
    setBox1(true); 
    setBox2(false)
    setShowecommerce(true) 
}
const handelCheck2=()=>{
    setBox2(true); 
    setBox1(false)
    setShowecommerce(false) 
}
    /*********************************************MY CONSTANTS****************************************************************** */
const [lieux,setLieux]=useState([{label:"Ville",value:"Ville"}, {label:"Bordeaux",value:"Bordeaux"},
    {label:"Paris",value:"Paris"}]);
const [etage,setEtage]=useState([{label:"RDC",value:"0"},{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},
{label:"5",value:"5"},{label:"6",value:"6"},{label:"7",value:"7"},{label:"8",value:"8"},{label:"9",value:"9"},{label:"10",value:"10"},{label:"Plus",value:"11"},

])
const [assenseur,setAssenseur]=useState([{label:"Non",value:"0"},{label:"1-2 personnes",value:"5"},{label:"2-3 personnes",value:"5"},
{label:"3-4 personnes",value:"5"},{label:"4-5 personnes",value:"5"},
{label:"5-6 personnes",value:"5"},{label:"6-7 personnes",value:"5"},{label:"7-8 personnes",value:"5"},
{label:"Tout entre",value:"20"}])

const[distance,setDistance]=useState([{label:"0-10 m",value:"0"},
{label:"10-20 m",value:"0"},{label:"20-30 m",value:"10"},{label:"30-40 m",value:"20"},
{label:"40-50 m",value:"30"},{label:"50-60 m",value:"40"},{label:"60-70 m",value:"50"}
,{label:"70-80 m",value:"80"}
,{label:"80-90 m",value:"90"},
{label:"90-100 m",value:"100"},
{label:"plus de 101 m",value:"110"}])
const[input,setInput]=useState([]);

/********************************************************************************************************** */
const handelChange=()=>{
     
}
const[circlestyle,setCirclestyle]=useState("in-circle")

const handelClickCkeck=()=>{

    setCirclestyle("in-circle")   
}

/*******************************DECLARATION DES VARIABLES N2CESSAIRE POUR LE CALCUL DE DEVIS******************************************************************************* */
const [numetage,setNumetage]=useState(0);
const [numetage2,setNumetage2]=useState(0);
const [varetage,setVaretage]=useState([]);
const [varchange,setVarchange]=useState(0)
const [valassenseur,setValassenseur]=useState(0);
const [valassenseur2,setValassenseur2]=useState(0);
const [valdistance,setValdistance]=useState(0);
const [valdistance2,setValdistance2]=useState(0);
const [valdistancem,setValdistancem]=useState(0);
const [valdistancem2,setValdistancem2]=useState(0);
const [mnt,setMnt]=useState(0);
const [mnt2,setMnt2]=useState(0);
/********************************************Les fonction pour chaque variable******************************************************************** */
const handelChangeall=(event)=>{
    setNumetage(event.target.value);
   setVarchange(varchange+1);
      }
const handelChangeall2=(event)=>{
        setNumetage2(event.target.value);
       setVarchange(varchange+1);
          }
      console.log("LAVE VALUE",numetage);
         /*********/
const handelChangeassens=(event)=>{
   setValassenseur(event.target.value);
   setVarchange(varchange+1); 
}
const handelChangeassens2=(event)=>{
    setValassenseur2(event.target.value);
    setVarchange(varchange+1); 
 }
         /**********/
const handelvaldistance=(event)=>{
    setValdistance(event.target.value)
    setVarchange(varchange+1); 
 let d=0;
    d=Math.floor(valdistance/10)
console.log("D",d)
setValdistancem(d);
}
const handelvaldistance2=(event)=>{
    setValdistance2(event.target.value)
    setVarchange(varchange+1); 
 let d=0;
    d=Math.floor(valdistance2/10)
console.log("D",d)
setValdistancem2(d);
}
console.log("Valdistance",(valdistance));
/************/

const handelMnt=(event)=>{
setMnt(event.target.value);
setVarchange(varchange+1);
}
const handelMnt2=(event)=>{
    setMnt2(event.target.value);
    setVarchange(varchange+1);
    }
console.log('MTN',mnt)
/*********************************************************INPUT ********************************************************************************* */
const [inputall,setInputall]=useState({
numetage:0,



})

/*******************************************************LA SOMME TOTALE****************************************************************************** */
const [total,setTotal]=useState(120)
useEffect(()=>{
setTotal(120+Number(numetage)*
(30-valassenseur)+
Number(numetage2)*
(30-valassenseur2)+
Number(mnt)*1+
Number(mnt2)*1+
Number((Math.floor(valdistance/10)*40))+
Number((Math.floor(valdistance2/10)*40))+
(simple*40)*tarifRMNTG+(moy*60)*tarifRMNTG+
pricart+(complique*80)*tarifRMNTG)
},[varchange])
/*************************************************VOIR LES OBJETS LOURD*******************************/
const [lourd,setLourd]=useState(true);
const [piono,setPiano]=useState(false);
const [pianonum,setPianonum]=useState(0);
const [frigo,setFrigo]=useState(false)
const handelLourd=()=>{
    setLourd(!lourd)
}
const handelpiano=()=>{
    setPiano(!piono);
  
}
const handelfrigo=()=>{
    setFrigo(!frigo)
}

/***************************************************************************************************/



/**************************************************calcult de cubage******************************************** */

const[cubage,setCubage]=useState(0);
const handelCubage=(data)=>{
    setCubage(data);
    console.log("we are getting data from chlidern",data)
}

/*****************************************************Calcul pri carton**************************************** */
const [pricart,setPricart]=useState(0);
const sendPrixcarton=(data)=>{
    setPricart(data);
    setVarchange(varchange+1);
}
return(

<div className="principal-formulaire">

<div className="text-calcul">
<h1>Votre projet de déménagement</h1>
<div className="text-fomulaire">Choisissez maintenant vos options. Votre devis se recalcule automatiquement.</div>
</div>
<div className="les-champs-de-calcul">
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
    <h1 className="principale-titles">Départ</h1>
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
<select  value={numetage}  name='numetage' onChange={handelChangeall}>
   {etage.map((option) => (
              <option  value={option.value}>{option.label}</option>
            ))}
   </select>
</label>
<label className=" Myborder-top">
<p className="title">ASCENSEUR</p>
<select value={valassenseur} name="valassenseur" onChange={handelChangeassens}>
   {assenseur.map((option) => (
              <option  value={option.value}>{option.label}</option>
            ))}
   </select>
</label>
<label className=" Myborder-top">
<p className="title" >DISTANCE DE PORTAGE</p>

<select value={valdistance} name="valdistance"  onChange={handelvaldistance} >
   {distance.map((option) => (
              <option  value={option.value}>{option.label}</option>
            ))}
   </select>
   <p className="title " >
    <Link to="/depart" className="tip-distance1">Plus d'information
   <div className="tooltip-styling">
    Nombre de métres au RCD entre votre hall d'immeuble et l'emplacement de stationnement le plus proche pour le camion(accès facile, fond de cours,jardin à traverser,immeuble de résidence etc...
        </div>
   </Link>
   </p>
</label>
<label className=" Myborder-top">
<p className="title">MONTE-MEUBLES</p>
<select   type="number"  placeholder="Monte-meuble"  name="mnt" value={mnt} onChange={handelMnt}>
<option label="Non" value="0">Non</option>
<option label=" oui (7h)" value="450">Oui pour 7h</option>
<option label=" oui (1/2j)"  value="250"   >Oui pour une demie journée</option>
</select>
<p className="title"><Link className="tip-mont-meuble1">Plus d'information
<div className="tooltip-styling-monte-meuble1">
     Lors du démenagement, il arrive parfois que l'absence d'ascensseur ou l'étroitesse de la cage d'escalier oblige à passer le mobilier par la fenetre avec un appreil de levage appelé Monte-meuble.
        </div>
        </Link>
</p>
</label>




</div>
<div className="inter-calcul-item big-titles"><span className="tit-big-first">Avez-vous besoin d'une </span><span className="tit-big-second">autorisation de stationnement ?</span></div>
<div className="inter-calcul-item">
<p className="title"><Link className="tip-auton-01">Plus d'information

<div className="tooltip-styling-auton1">
   Si vous habitez en ville il est possible que le camion se gare dans la rue.Selon votre commune une autorisation de stationnement est peut être nécessaire.
        </div>

</Link>
</p></div>


<div className="inter-calcul-item  check-yes-no">
 
<MDBInput label="oui" type="checkbox" id="autoo" checked={autoO} onChange={handelauto}/>
<MDBInput label="Non" type="checkbox" id="auton" checked={!autoO} onChange={handelauto}/>  
 
    </div> 
</div>



<div className="calcul-bloc-item">
    <div className="inter-calcul-item">
    <h1 className="principale-titles">Arrivé</h1>
<input type="text"  className="address-input"/>
   <select className="select-ville" >
   {lieux.map((option) => (
              <option  value={option.value}>{option.label}</option>
            ))}
   </select>
    </div>
    <div className="inter-calcul-item">
<label className=" Myborder-top">
<p className="title">ETAGE </p>
<select value={numetage2}  name='numetage2' onChange={handelChangeall2}>
   {etage.map((option) => (
              <option  value={option.value}>{option.label}</option>
            ))}
   </select>
</label>
<label className=" Myborder-top">
<p className="title">ASCENSEUR</p>
<select value={valassenseur2} name="valassenseur2" onChange={handelChangeassens2}>
   {assenseur.map((option) => (
              <option  value={option.value}>{option.label}</option>
            ))}
   </select>
</label>
<label className=" Myborder-top">
<p className="title">DISTANCE DE PORTAGE</p>
<select value={valdistance2} name="valdistance2" onChange={handelvaldistance2} >
   {distance.map((option) => (
              <option  value={option.value}>{option.label}</option>
            ))}
   </select>
   <p className="title">
       <Link to="/depart"  className="tip-distance1">Plus d'information
       <div className="tooltip-styling">
    Nombre de métres au RCD entre votre hall d'immeuble et l'emplacement de stationnement le plus proche pour le camion(accès facile, fond de cours,jardin à traverser,immeuble de résidence etc...
        </div>
       
       </Link>
   
   </p>
</label>
<label className=" Myborder-top">
<p className="title">MONTE-MEUBLES</p>
<select  type="number"  placeholder="Ascenseur"  name="mnt2" value={mnt2} onChange={handelMnt2} >
<option label="Non" value="0">Non</option>
<option label=" oui (7h)" value="450">Oui pour 7h</option>
<option label=" oui (1/2j)"  value="250"   >Oui pour une demie journée</option>
</select>
<p className="title"><Link to="/depart" className="tip-mont-meuble1">Plus d'information
<div className="tooltip-styling-monte-meuble1">
     Lors du démenagement, il arrive parfois que l'absence d'ascensseur ou l'étroitesse de la cage d'escalier oblige à passer le mobilier par la fenetre avec un appreil de levage appelé Monte-meuble.
        </div>
        </Link>
</p>
</label>




</div>
<div className="inter-calcul-item big-titles"><span className="tit-big-first">Avez-vous besoin d'une</span><span className="tit-big-second">autorisation de stationnement ?</span></div>
<div className="inter-calcul-item">
    
<p className="title"><Link className="tip-auton-01">Plus d'information

<div className="tooltip-styling-auton1">
   Si vous habitez en ville il est possible que le camion se gare dans la rue.Selon votre commune une autorisation de stationnement est peut être nécessaire.
        </div>

</Link>
</p></div>

<div className="inter-calcul-item  check-yes-no">
    
<MDBInput label="oui" type="checkbox" id="autoo2" checked={autoO2} onChange={handelauto2}/>
<MDBInput label="Non" type="checkbox" id="auton2" checked={!autoO2} onChange={handelauto2}/>  
 
    </div> 

</div>


<div className="calcul-bloc-item">

<div className="inter-calcul-item">
    <h1 className="principale-titles">Votre volume</h1>
    </div>

<div className="inter-calcul-item">
<div className="text-fomulaire">Une bonne estimation du volume est un élément clé pour éviter les mauvaises surprises le jour J.<br/>
Nos conseillers sont à votre disposition.</div>
</div>
<div className="inter-calcul-item ">
  <div className="wrap-volum-items">
  <div className="wrap-volum-items-inter">
   <div><MDBInput type="checkbox" checked={volmanu}   id="volummanu" onChange={handelVolmanu}  /></div> 
    <p className="volum-text"> Volume renseigné manuellement</p>
    </div>
    <div><input className="input-vol" type="number" name="vol1" value={vol1} onChange={handeVolValue}  />
    <span className="unit-vol">m3</span></div> 
 
</div>
</div>

<div className="inter-calcul-item ">
  <div className="wrap-volum-items">
  <div className="wrap-volum-items-inter">
   <div><MDBInput type="checkbox" checked={volcalc}   id="volcalc"  onChange={handeVolcalc}/></div> 
    <p className="volum-text"> Volume estimé avec notre super calculateur de volume</p>
    </div>
    <div>
    <input className="input-vol" type="number" name="vol2" value={vol2} />
    <span className="unit-vol">m3</span>
    </div> 
    
</div>

<div className="btn-formule"  onClick={showVolum}>calculateur de volume</div>
</div>



</div>

{volum &&(<Carton showVolum={showVolum}  handelCubage={handelCubage}/>)}




</div>
{/*<div className="calcul-montant">
<p>DÉMÉNAGEMENT CLASSIQUE <br/> 695 km · 25 m3</p>

  <div className="total-formulaire"><div>Total:</div>
  <div>120 €</div>
  </div> 
   </div>*/}

</div>
<p className="width90">Possédez-vous des objets lourds ?</p>
<div className="wrap-formulaire">
<div className="calcul-bloc">
<div className="calcul-bloc-item">
<div className="inter-calcul-item  check-yes-no">
    
<MDBInput label="oui" type="checkbox"  checked={lourd} onChange={handelLourd} />
<MDBInput label="Non" type="checkbox"  checked={!lourd} onChange={handelLourd}/>  
 
    </div>    

</div>
{lourd &&(
<div className="inter-calcul-item ">
  <div className="wrap-volum-items">
  <div className="wrap-volum-items-inter">
   <div><MDBInput type="checkbox" checked={piono}  id="volummanu" onChange={handelpiano}/></div> 
    <p className="volum-text">Piano</p>
    </div>
    <div>Si vous possédez plus q'un seule piano, ajoutez un commantaire
    </div> 
 
</div>
</div>)
}
{lourd &&(
<div className="inter-calcul-item ">
  <div className="wrap-volum-items">
  <div className="wrap-volum-items-inter">
   <div><MDBInput type="checkbox" checked={frigo}  id="volummanu" onChange={handelfrigo}  /></div> 
    <p className="volum-text">Frigo Américain</p>
    </div>
    <div>Si vous possédez plus q'un seule Frigo Américain, ajoutez un commantaire</div> 
 
</div>
</div>)
}


</div>
{/*<div className="calcul-montant"></div>*/}
</div>
<p className="width90">Avez-vous besoin d'aide pour le démontage
et le remontage de<br/> votre mobilier ?</p>
<div className="wrap-formulaire">
<div className="calcul-bloc">
<div className="calcul-bloc-item">
<div className="inter-calcul-item ">
    

<MDBInput label="Aucune aide" type="checkbox"  checked={rmntgN}  onChange={handelRMNT1}/>  
<MDBInput label="Démontage & remontage" type="checkbox"  checked={rmtgdmtg} onChange={handelRMNT2} />  
<MDBInput label="Démontage seul" type="checkbox"  checked={dementaged} onChange={handelRMNT3}/> 
<MDBInput label="Remontage seul" type="checkbox" checked={remontager} onChange={ handelRMNT4}  /> 
    </div>   
    
    
    
  {showrmntg &&(
    <div className="inter-calcul-item RMNTG ">

<div className="title-RMNTG">Simple</div> 
<div className="content-RMNTG">
<div className="text-RMNTG">Bureau simple, commode de taille moyenne, étagère simple, lit simple, lit bébé, placard (décrochage), table...</div>
<input type="Number" min="0" className="input-RMNTG" name="simple" value={simple} onChange={handesimple}/>
</div>

    </div>
)}  
  {showrmntg &&(
    <div className="inter-calcul-item RMNTG ">

<div className="title-RMNTG">Moyen</div> 
<div className="content-RMNTG">
<div className="text-RMNTG">Armoire 2 portes, buffet plusieurs blocs, bureau d'angle, canapé, etagère, grande commode, lit mezzanine simple, living plusieurs blocs...</div>
<input  type="Number" min="0" className="input-RMNTG" name={moy} value={moy} onChange={handelmoy}/>
</div>

    </div>
)}  
 {showrmntg &&(
    <div className="inter-calcul-item RMNTG ">

<div className="title-RMNTG">Compliquée</div> 
<div className="content-RMNTG">
<div className="text-RMNTG">Armoire 3 portes et plus, armoire pont, armoire lit, bibliothèque, buffet, bahut, grande, vitrine, lit mezzanine 2 personnes, lit combiné avec bureau, living, vaisselier</div>
<input  min="0" type="Number" className="input-RMNTG" name={complique} value={complique} onChange={handelComplique}/>
</div>

    </div>
)}     
    
</div> 

    
</div>
{/*<div className="calcul-montant">
<p>DÉMÉNAGEMENT CLASSIQUE <br/> 695 km · 25 m3</p>

  <div className="total-formulaire"><div>Total:</div>
  <div>120 €</div>
  </div> 
</div>
*/}
</div>




<p className="width90">Avez-vous besoin de fournitures pour votre déménagement ?</p>
<div className="wrap-formulaire">
<div className="calcul-bloc">
<div className="calcul-bloc-item">
<div className="inter-calcul-item check-yes-no">
    
<MDBInput label="oui" type="checkbox" id="checkbox1" checked={box1} onChange={handelCheck} />
<MDBInput label="Non" type="checkbox" id="checkbox2" checked={box2} onChange={handelCheck2} /> 
</div>
    </div>   
    
    
    {showecommerce && (<Ecommerce  sendPrixcarton={sendPrixcarton}/>)}
    
    
    </div> 

    {/*<div className="calcul-montant">
    <p>DÉMÉNAGEMENT CLASSIQUE <br/> 695 km · 25 m3</p>

<div className="total-formulaire"><div>Total:</div>
<div>120 €</div>
</div> 

        
        
</div> */}
</div>

<p className="width90">Options libres</p>
<div className="width90-2-center">
<p className="width90-2">
Quelques exemples :
<br/>
<ul>
<li style={{marginLeft:"20px"}}>1- garde-meubles/stockage,</li>
<li style={{marginLeft:"20px"}}>2- livrer ou récupérer du mobilier à une autre adresse,</li>
<li style={{marginLeft:"20px"}}>3- transporter un objet spécifique (très lourd, très fragile, ou de grande valeur),</li>
</ul>
<br/>
Nous reviendrons vers vous avec un tarif dans un délai de 24h00 ouvrées. Pensez à nous laisser vos coordonnées (en créant votre compte) afin que nous puissions vous contacter si nous avons des questions.
</p>
</div>



<p className="width90">Commentaires</p>
<div className="width90-2-center">
<p className="width90-2">
    
<div className="text-fomulaire">
Faites-nous part de tout ce qui est important pour vous. Ces informations seront ajoutées sur le Devis entre vous et le déménageur sélectionné.

</div>
</p>


</div>
<div className="wrap-formulaire">
<div className="calcul-bloc">
<div className="center-comments">Commentaires  </div>
<div className="calcul-bloc-item">
 
<div className="inter-calcul-item">

<textarea type="text"  className="input-commantaires" />


</div>
</div>
</div>

{/*<div className="calcul-montant"></div>*/}
</div>

</div>

<div className="calcul-montant">

<p>DÉMÉNAGEMENT<br/></p>

<div className="total-formulaire">
    <div>Total: {total} €</div>

</div> 
{/*<p>voir les variables et la formule:</p>

etage:{numetage} <br/>
la distace:{valdistance} <br/>
le résultat de la division euclidienne:{Math.floor(valdistance/10)} <br/>
le monte-meuble:{mnt}<br/>
moy:{moy}<br/>
simple:{simple}<br/>
complique:{complique}<br/>*/}
</div>
<footer className="footer-formulaire">©2021 TMSDEM</footer>
    </div>)
}
export default Formulefinale;
